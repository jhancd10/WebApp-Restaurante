export interface IDetalle {
  plato: string;
  valor: string;
}

export interface IFactura {
  idSupervisor: string;
  idCliente: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  nroMesa: number;
  idMesero: number;
  detalles: IDetalle[];
}
