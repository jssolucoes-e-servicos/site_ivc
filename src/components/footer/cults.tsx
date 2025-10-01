import { Fragment } from "react";

export async function FooterCults() {
  return (<Fragment>
    <div className="space-y-4">
      <h3 className="font-semibold">Horários dos Cultos</h3>
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <div>
          <p className="font-medium text-foreground">Quinta-feira</p>
          <p>Culto de Adoração - 20h</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Domingo</p>
          <p>Culto da Família - 19h</p>
        </div>
      </div>
    </div>
  </Fragment>)
}