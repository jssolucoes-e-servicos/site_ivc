"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { celulas, igrejaLocation, type Celula } from "@/lib/celulas-data"
import { Loader } from "@googlemaps/js-api-loader"
import { Calendar, Clock, MapPin, Navigation, Search, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CelulaMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any | null>(null)
  const [searchAddress, setSearchAddress] = useState("")
  const [nearestCelulas, setNearestCelulas] = useState<Celula[]>([])
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!mapRef.current) return

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
      libraries: ["places", "geocoding"],
    })

    loader
      .load()
      .then(() => {
        if (!mapRef.current) return

        const googleMap = new window.google.maps.Map(mapRef.current, {
          center: { lat: igrejaLocation.lat, lng: igrejaLocation.lng },
          zoom: 14,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        })

        setMap(googleMap)
        setIsLoading(false)

        // Adicionar marcador da igreja com ícone customizado
        new window.google.maps.Marker({
          position: { lat: igrejaLocation.lat, lng: igrejaLocation.lng },
          map: googleMap,
          title: igrejaLocation.nome,
          icon: {
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "#0891b2",
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#ffffff",
            scale: 2,
            anchor: new window.google.maps.Point(12, 22),
          },
        })

        // Adicionar marcadores das células
        celulas.forEach((celula) => {
          const marker = new window.google.maps.Marker({
            position: { lat: celula.lat, lng: celula.lng },
            map: googleMap,
            title: celula.nome,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: "#06b6d4",
              fillOpacity: 0.8,
              strokeWeight: 2,
              strokeColor: "#ffffff",
              scale: 8,
            },
          })

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="font-weight: bold; margin-bottom: 8px; color: #0891b2;">${celula.nome}</h3>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Líder:</strong> ${celula.lider}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Endereço:</strong> ${celula.endereco}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Dia:</strong> ${celula.dia} às ${celula.horario}</p>
          </div>
        `,
          })

          marker.addListener("click", () => {
            infoWindow.open(googleMap, marker)
          })
        })
      })
      .catch((error) => {
        console.error("Erro ao carregar Google Maps:", error)
        setIsLoading(false)
      })
  }, [])

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371 // Raio da Terra em km
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLon = ((lon2 - lon1) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const handleSearch = async () => {
    if (!searchAddress || !map) return

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ address: searchAddress + ", Restinga, Porto Alegre, RS" }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const location = results[0].geometry.location
        const lat = location.lat()
        const lng = location.lng()

        setUserLocation({ lat, lng })

        // Centralizar mapa no endereço buscado
        map.setCenter({ lat, lng })
        map.setZoom(15)

        new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: "Sua localização",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: "#ef4444",
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#ffffff",
            scale: 10,
          },
        })

        const celulasComDistancia = celulas.map((celula) => ({
          ...celula,
          distancia: calculateDistance(lat, lng, celula.lat, celula.lng),
        }))

        const nearest = celulasComDistancia.sort((a, b) => a.distancia - b.distancia).slice(0, 3)

        setNearestCelulas(nearest)
      }
    })
  }

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude

          setUserLocation({ lat, lng })

          if (map) {
            map.setCenter({ lat, lng })
            map.setZoom(15)

            new window.google.maps.Marker({
              position: { lat, lng },
              map: map,
              title: "Sua localização",
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: "#ef4444",
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: "#ffffff",
                scale: 10,
              },
            })

            const celulasComDistancia = celulas.map((celula) => ({
              ...celula,
              distancia: calculateDistance(lat, lng, celula.lat, celula.lng),
            }))

            const nearest = celulasComDistancia.sort((a, b) => a.distancia - b.distancia).slice(0, 3)

            setNearestCelulas(nearest)
          }
        },
        (error) => {
          console.error("Erro ao obter localização:", error)
          alert("Não foi possível obter sua localização. Por favor, digite seu endereço.")
        },
      )
    }
  }

  return (
    <div className="space-y-6">
      {/* Busca */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Digite seu endereço (ex: Rua das Flores, 123)"
                value={searchAddress}
                onChange={(e) => setSearchAddress(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSearch} className="bg-cyan-600 hover:bg-cyan-700" disabled={isLoading}>
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
              <Button onClick={handleUseMyLocation} variant="outline" disabled={isLoading}>
                <Navigation className="mr-2 h-4 w-4" />
                Usar Minha Localização
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Digite seu endereço ou use sua localização atual para encontrar as células mais próximas
          </p>
        </CardContent>
      </Card>

      {/* Mapa */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              {isLoading ? (
                <div className="w-full h-[500px] rounded-lg flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">Carregando mapa...</p>
                </div>
              ) : (
                <div ref={mapRef} className="w-full h-[500px] rounded-lg" />
              )}
            </CardContent>
          </Card>
        </div>

        {/* Células mais próximas */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-cyan-600" />
            Células Mais Próximas
          </h3>
          {nearestCelulas.length > 0 ? (
            nearestCelulas.map((celula) => (
              <Card key={celula.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg">{celula.nome}</h4>
                    <p className="text-sm text-cyan-600 font-medium">{celula.distancia.toFixed(1)} km de distância</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>{celula.lider}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>{celula.endereco}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>{celula.dia}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>{celula.horario}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                <p>Digite seu endereço ou use sua localização para encontrar células próximas</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Legenda */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-3">Legenda do Mapa</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-cyan-600 rounded-sm" />
              <span className="text-sm">Igreja Viva em Células</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
              <span className="text-sm">Células</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-full" />
              <span className="text-sm">Sua Localização</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
