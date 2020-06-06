export interface IConsultaVentasMeseros {
  fechaVentasMeseros: string;
}

export interface IVentasMesero {
  idMesero: string;
  nombres: string;
  apellidos: string;
  total: number;
}

export interface IConsultaConsumoClientes {
  fecha: string;
  valor: string;
}

export interface IConsumoClientes {
  idCliente: string;
  nombres: string;
  apellidos: string;
  valorConsumo: number;
}

export interface IConsultaProductoTop {
  fechaInicio: string;
}

export interface IProductoTop {
  plato: string;
  cantidad: number;
  valorTotal: number;
  periodo: string;
}
