using ComidasDelSur_WS.Models;
using System;
using System.Collections.Generic;
using System.Data;

namespace ComidasDelSur_WS
{
    public class Service : IService
    {
        public clsdatosctr.CapaDatos CapaDatos;
        public string conex;
        
        Service() {
            CapaDatos = new clsdatosctr.CapaDatos();
            conex = CapaDatos.GetConexString();
        }

        /* Create: Metodos de Creacion */
        //------------------------------------------------------------------------------------------------------------------------------//
        /* Creacion de un nuevo Cliente */
        public string RegistrarCliente(Cliente cliente)
        {
            string estado = "ERROR";
            if (!string.IsNullOrEmpty(cliente.IdCliente) && !string.IsNullOrEmpty(cliente.Nombres) &&
                !string.IsNullOrEmpty(cliente.Apellidos) && !string.IsNullOrEmpty(cliente.Direccion) &&
                !string.IsNullOrEmpty(cliente.Telefono))
            {
                string query = "INSERT INTO CLIENTE (IdCliente, Nombres, Apellidos, Direccion, Telefono) " +
                               "VALUES ('" + cliente.IdCliente + "', '" + cliente.Nombres + "', '" + cliente.Apellidos + "', '" +
                               cliente.Direccion + "', '" + cliente.Telefono + "')";
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }

        /* Creacion de un nuevo Mesero */
        public string RegistrarMesero(Mesero mesero)
        {
            string estado = "ERROR";
            if (!string.IsNullOrEmpty(mesero.IdMesero) && !string.IsNullOrEmpty(mesero.Nombres) &&
                !string.IsNullOrEmpty(mesero.Apellidos) && mesero.Edad > 0 && mesero.Antiguedad >= 0)
            {
                string query = "INSERT INTO MESERO (IdMesero, Nombres, Apellidos, Edad, Antiguedad) " +
                               "VALUES (" + mesero.IdMesero + ", '" + mesero.Nombres + "', '" + mesero.Apellidos + "', " + mesero.Edad +
                               ", " + mesero.Antiguedad + ")";
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }

        /* Creacion de una nueva Mesa */
        public string RegistrarMesa(Mesa mesa)
        {
            string estado = "ERROR";
            if (mesa.NroMesa > 0 && !string.IsNullOrEmpty(mesa.Nombre) &&
                !string.IsNullOrEmpty(mesa.Reservada) && mesa.Puestos > 0)
            {
                string query = "INSERT INTO MESA (NroMesa, Nombre, Reservada, Puestos) " +
                               "VALUES (" + mesa.NroMesa + ", '" + mesa.Nombre + "', '" + mesa.Reservada + "', " + mesa.Puestos + ")";
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }

        /* Creacion de un nuevo Supervisor */
        public string RegistrarSupervisor(Supervisor supervisor)
        {
            string estado = "ERROR";
            if (!string.IsNullOrEmpty(supervisor.IdSupervisor) && !string.IsNullOrEmpty(supervisor.Nombres) &&
                !string.IsNullOrEmpty(supervisor.Apellidos) && supervisor.Edad > 0)
            {
                string query = "INSERT INTO DETALLE (IdSupervisor, Nombres, Apellidos, Edad) " +
                               "VALUES ('" + supervisor.IdSupervisor + "', '" + supervisor.Nombres + "', '" + supervisor.Apellidos + "', '" +
                               supervisor.Edad + "')";
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }
        //------------------------------------------------------------------------------------------------------------------------------//

        /* Read: Metodos de Lectura */
        //------------------------------------------------------------------------------------------------------------------------------//
        /* Tabla: Cliente */
        private string ConsultaCliente(string IdCliente)
        {
            string query = "SELECT IdCliente FROM Cliente WHERE IdCliente = '" + IdCliente + "'";
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return "SUCCESS";
                }
                return "El cliente no ha sido registrado.";
            }
            catch (Exception ex) { return ex.Message; }
        }

        /* Tabla: Mesero */
        private string ConsultaMesero(int IdMesero)
        {
            string query = "SELECT IdMesero FROM Mesero WHERE IdMesero = " + IdMesero;
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return "SUCCESS";
                }
                return "El Mesero no esta registrado en el sistema.";
            }
            catch (Exception ex) { return ex.Message; }
        }

        /* Tabla: Mesa */
        private string ConsultaMesa(int NroMesa)
        {
            string query = "SELECT NroMesa FROM Mesa WHERE NroMesa = '" + NroMesa + "'";
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return "SUCCESS";
                }
                return "El Mesa Nro: " + NroMesa + " no existe en el restaurante.";
            }
            catch (Exception ex) { return ex.Message; }
        }

        /* Tabla: Detalle */
        public string ConsultaSupervisor(int IdSupervisor)
        {
            string query = "SELECT IdSupervisor FROM Detalle WHERE IdSupervisor = " + IdSupervisor;
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return "SUCCESS";
                }
                return "El Supervisor no existe.";
            }
            catch (Exception ex) { return ex.Message; }
        }

        /* Metodo complementario que genera el IdFactura de un nuevo registro. */
        private int GetConsecutivoFact()
        {
            string query = "SELECT MAX(NroFactura) FROM Factura";
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                int numConsecutivo = Convert.ToInt32(ds.Tables[0].Rows[0][0]);
                numConsecutivo += 1;
                return numConsecutivo;
            }
            catch (Exception) { return 1; }
        }

        private int GetConsecutivoDetallexFact()
        {
            string query = "SELECT MAX(IdDetallexFactura) FROM DetallexFactura";
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                int numConsecutivo = Convert.ToInt32(ds.Tables[0].Rows[0][0]);
                numConsecutivo += 1;
                return numConsecutivo;
            }
            catch (Exception) { return 1; }
        }
        //------------------------------------------------------------------------------------------------------------------------------//

        /* Update: Metodos de Actualizacion */
        //------------------------------------------------------------------------------------------------------------------------------//
        /* Actualizar un Mesero */
        public string ActualizarMesero(Mesero mesero)
        {
            string estado = "ERROR";
            if (!string.IsNullOrEmpty(mesero.IdMesero) && !string.IsNullOrEmpty(mesero.Nombres) &&
                !string.IsNullOrEmpty(mesero.Apellidos) && mesero.Edad > 0 && mesero.Antiguedad >= 0)
            {
                string query = "UPDATE MESERO SET IdMesero = " + mesero.IdMesero + ", Nombres = '" + mesero.Nombres + 
                               "', Apellidos = '" + mesero.Apellidos + "', Edad = " + mesero.Edad +
                               ", Antiguedad = " + mesero.Antiguedad + " WHERE IdMesero = " + mesero.IdMesero;
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }

        /* Actualizar una Mesa */
        public string ActualizarMesa(Mesa mesa)
        {
            string estado = "ERROR";
            if (mesa.NroMesa > 0 && !string.IsNullOrEmpty(mesa.Nombre) &&
                !string.IsNullOrEmpty(mesa.Reservada) && mesa.Puestos > 0)
            {
                try
                {
                    string query = "UPDATE MESA SET Nombre = '" + mesa.Nombre +
                                   "', Reservada = '" + mesa.Reservada + "', Puestos = " + mesa.Puestos +
                                   " WHERE NroMesa = '" + mesa.NroMesa + "'";
                    estado = CapaDatos.ExecTransaction(query, conex);
                    if (estado.Equals("SUCCESS"))
                    {
                        estado = "OK";
                    }
                }
                catch (Exception ex)
                {
                    estado = ex.Message;
                }
            }
            return estado;
        }

        /* Actualizar un Supervisor */
        public string ActualizarSupervisor(Supervisor supervisor)
        {
            string estado = "ERROR";
            if (!string.IsNullOrEmpty(supervisor.IdSupervisor) && !string.IsNullOrEmpty(supervisor.Nombres) &&
                !string.IsNullOrEmpty(supervisor.Apellidos) && supervisor.Edad > 0)
            {
                string query = "UPDATE DETALLE SET Nombres = '" + supervisor.Nombres +
                                   "', Apellidos = '" + supervisor.Apellidos + "', Edad = " + supervisor.Edad +
                                   " WHERE IdSupervisor = " + supervisor.IdSupervisor;
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }
        //------------------------------------------------------------------------------------------------------------------------------//

        /* Delete: Metodos de Eliminacion */
        //------------------------------------------------------------------------------------------------------------------------------//
        /* Eliminar un Mesero */
        public string EliminarMesero(Mesero mesero)
        {
            string estado = "ERROR";
            if (!string.IsNullOrEmpty(mesero.IdMesero) && !string.IsNullOrEmpty(mesero.Nombres) &&
                !string.IsNullOrEmpty(mesero.Apellidos) && mesero.Edad > 0 && mesero.Antiguedad >= 0)
            {
                string query = "DELETE FROM Mesero WHERE IdMesero = " + mesero.IdMesero;
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }

        /* Eliminar una Mesa */
        public string EliminarMesa(Mesa mesa)
        {
            string estado = "ERROR";
            if (mesa.NroMesa > 0 && !string.IsNullOrEmpty(mesa.Nombre) &&
                !string.IsNullOrEmpty(mesa.Reservada) && mesa.Puestos > 0)
            {
                string query = "DELETE FROM Mesa WHERE NroMesa = '" + mesa.NroMesa + "'";
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }

        /* Eliminar un Supervisor */
        public string EliminarSupervisor(Supervisor supervisor)
        {
            string estado = "ERROR";
            if (!string.IsNullOrEmpty(supervisor.IdSupervisor) && !string.IsNullOrEmpty(supervisor.Nombres) &&
                !string.IsNullOrEmpty(supervisor.Apellidos) && supervisor.Edad > 0)
            {
                string query = "DELETE FROM Detalle WHERE IdSupervisor = " + supervisor.IdSupervisor;
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }
        //------------------------------------------------------------------------------------------------------------------------------//

        /* Funciones: Metodos que utilizan el CRUD para mostrar informacion especifica */
        //------------------------------------------------------------------------------------------------------------------------------//
        /* Obtener Todos los Meseros registrados en el sistema */
        public List<Mesero> GetMeseros()
        {
            List<Mesero> meseros = new List<Mesero>();
            string query = "SELECT * FROM Mesero";
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    for (int x = 0; x < ds.Tables[0].Rows.Count; x++)
                    {
                        meseros.Add(new Mesero()
                        {
                            IdMesero = ds.Tables[0].Rows[x]["IdMesero"].ToString().Trim(),
                            Nombres = ds.Tables[0].Rows[x]["Nombres"].ToString().Trim(),
                            Apellidos = ds.Tables[0].Rows[x]["Apellidos"].ToString().Trim(),
                            Edad = Convert.ToInt32(ds.Tables[0].Rows[x]["Edad"]),
                            Antiguedad = Convert.ToInt32(ds.Tables[0].Rows[x]["Antiguedad"])
                        });
                    }
                }
            }
            catch (Exception) {}
            return meseros;
        }

        /* Obtener Todos las Mesas registradas en el sistema */
        public List<Mesa> GetMesas()
        {
            List<Mesa> mesas = new List<Mesa>();
            string query = "SELECT * FROM Mesa";
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    for (int x = 0; x < ds.Tables[0].Rows.Count; x++)
                    {
                        mesas.Add(new Mesa()
                        {
                            NroMesa = Convert.ToInt32(ds.Tables[0].Rows[x]["NroMesa"]),
                            Nombre = ds.Tables[0].Rows[x]["Nombre"].ToString().Trim(),
                            Reservada = Convert.ToInt32(ds.Tables[0].Rows[x]["Reservada"]).ToString(),
                            Puestos = Convert.ToInt32(ds.Tables[0].Rows[x]["Puestos"].ToString())
                        });
                    }
                }
            }
            catch (Exception) { }
            return mesas;
        }

        /* Obtener los Supervisores del sistema */
        public List<Supervisor> GetSupervisores()
        {
            List<Supervisor> supervisores = new List<Supervisor>();
            string query = "SELECT * FROM Detalle";
            try
            {
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    for (int x = 0; x < ds.Tables[0].Rows.Count; x++)
                    {
                        supervisores.Add(new Supervisor()
                        {
                            IdSupervisor = ds.Tables[0].Rows[x][0].ToString().Trim(),
                            Nombres = ds.Tables[0].Rows[x][1].ToString().Trim(),
                            Apellidos = ds.Tables[0].Rows[x][2].ToString().Trim(),
                            Edad = Convert.ToInt32(ds.Tables[0].Rows[x][3].ToString())
                        });
                    }
                }
            }
            catch (Exception) {}
            return supervisores;
        }

        /* Creacion de una nueva Factura */
        public int GenerarFactura(Factura factura)
        {
            int NroFactura = 0;
            if (factura.NroMesa != 0 && factura.IdMesero > 0)
            {
                if (ConsultaCliente(factura.IdCliente).Equals("SUCCESS") &&
                    ConsultaMesero(factura.IdMesero).Equals("SUCCESS") &&
                    ConsultaMesa(factura.NroMesa).Equals("SUCCESS"))
                {
                    NroFactura = GetConsecutivoFact();
                    string query = "INSERT INTO FACTURA (NroFactura, Cliente_IdCliente, NroMesa, IdMesero, Fecha) " +
                                    "VALUES (" + NroFactura + ", '" + factura.IdCliente + "', '" + factura.NroMesa + "', " +
                                    factura.IdMesero + ", CURRENT_TIMESTAMP)";
                    string estado = CapaDatos.ExecTransaction(query, conex);
                    if (!estado.Equals("SUCCESS"))
                    {
                        NroFactura = 0;
                    }
                }
            }
            return NroFactura;
        }

        /* Creacion del detalle de una Factura */
        public string DetalleFactura(DetallexFactura detallexFactura)
        {
            string estado = "ERROR";
            if(!string.IsNullOrEmpty(detallexFactura.IdSupervisor) && !string.IsNullOrEmpty(detallexFactura.Plato) &&
                detallexFactura.NroFactura > 0 && detallexFactura.Valor > 0)
            {
                int NroDetallexFact = GetConsecutivoDetallexFact();
                string query = "INSERT INTO DetallexFactura (NroFactura, IdDetallexFactura, IdSupervisor, Plato, Valor) " +
                                "VALUES (" + detallexFactura.NroFactura + ", " + NroDetallexFact + ", " + detallexFactura.IdSupervisor + 
                                ", '" + detallexFactura.Plato + "', " + detallexFactura.Valor + ")";
                estado = CapaDatos.ExecTransaction(query, conex);
                if (estado.Equals("SUCCESS"))
                {
                    estado = "OK";
                }
            }
            return estado;
        }

        /* Obtener el Total (suma) vendido por cada mesero en un periodo de tiempo */
        public List<VentasMesero> GetVentasMesero(DateTime fechaInicio)
        {
            List<VentasMesero> ventasMeseros = new List<VentasMesero>();
            if (fechaInicio <= DateTime.Now)
            {
                string query = "SELECT idmesero, nombres, apellidos FROM mesero";
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        query = "SELECT " +
                                "(CASE WHEN SUM(a.valor) IS NULL THEN 0 ELSE SUM(a.valor) END) AS TOTAL " +
                                "FROM detallexfactura a INNER JOIN factura b ON a.nrofactura = b.nrofactura " +
                                "RIGHT JOIN mesero c ON b.idmesero = c.idmesero " +
                                "WHERE " +
                                "b.fecha >= to_timestamp('" + fechaInicio.Date.ToString("dd/MM/yyyy") + "', 'dd-mm-yyyy hh24:mi:ss') " +
                                "AND c.idmesero = '" + ds.Tables[0].Rows[i][0].ToString().Trim() + "' ";
                        DataSet ds1 = CapaDatos.GetDataSet(query, conex);
                        if (ds1.Tables[0].Rows.Count > 0)
                        {
                            ventasMeseros.Add(new VentasMesero()
                            {
                                IdMesero = ds.Tables[0].Rows[i][0].ToString().Trim(),
                                Nombres = ds.Tables[0].Rows[i][1].ToString().Trim(),
                                Apellidos = ds.Tables[0].Rows[i][2].ToString().Trim(),
                                Total = Convert.ToInt32(ds1.Tables[0].Rows[0][0].ToString().Trim())
                            });
                        }
                    }
                }
            }
            return ventasMeseros;
        }

        /* Obtener los Clientes con consumos superiores o iguales al dado */
        public List<ConsumosClientes> GetConsumosClientes(DateTime fechaInicio, int valor)
        {
            List<ConsumosClientes> consumosClientes = new List<ConsumosClientes>();
            if (fechaInicio <= DateTime.Now && valor >= 0)
            {
                string query = "WITH " +
                                    "Consumos_Clientes AS( " +
                                        "SELECT c.idcliente, c.nombres, c.apellidos, SUM(a.valor) AS TOTAL " +
                                        "FROM detallexfactura a inner join factura b on a.nrofactura = b.nrofactura " +
                                        "INNER JOIN cliente c on b.cliente_idcliente = c.idcliente " +
                                        "WHERE b.fecha >= to_timestamp('" + fechaInicio.Date.ToString("dd/MM/yyyy") + "', 'dd-mm-yyyy hh24:mi:ss') " +
                                        "GROUP BY c.idcliente, c.nombres, c.apellidos) " +
                                "SELECT * FROM Consumos_Clientes WHERE TOTAL >= " + valor;
                
                DataSet ds = CapaDatos.GetDataSet(query, conex);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        consumosClientes.Add(new ConsumosClientes()
                        {
                            IdCliente = ds.Tables[0].Rows[i][0].ToString().Trim(),
                            Nombres = ds.Tables[0].Rows[i][1].ToString().Trim(),
                            Apellidos = ds.Tables[0].Rows[i][2].ToString().Trim(),
                            ValorConsumo = Convert.ToInt32(ds.Tables[0].Rows[i][3].ToString().Trim())
                        });
                    }
                }
            }
            return consumosClientes;
        }

        /* Obtener el producto mas vendido en el restaurante */
        public List<ProductoTop> GetProductosTop(DateTime fechaInicio)
        {
            List<ProductoTop> productoTops = new List<ProductoTop>();
            if (fechaInicio <= DateTime.Now)
            {
                fechaInicio = new DateTime(fechaInicio.Year, fechaInicio.Month, 1);
                DateTime fechaFinPeriodo = fechaInicio.AddMonths(1);
                DateTime fechaFinal = DateTime.Now.Date;

                while (fechaInicio < fechaFinal)
                {
                    string query = "WITH " +
                                        "Plato_Top AS( " +
                                            "SELECT a.plato, COUNT(a.plato) AS Cantidad, SUM(a.valor) AS Monto_Total " +
                                            "FROM detallexfactura a " +
                                            "inner join factura b on a.nrofactura = b.nrofactura " +
                                            "where b.fecha >= to_timestamp('" + fechaInicio.Date.ToString("dd/MM/yyyy") + "', 'dd-mm-yyyy hh24:mi:ss') " +
                                            "AND b.fecha <= to_timestamp('" + fechaFinPeriodo.Date.ToString("dd/MM/yyyy") + "', 'dd-mm-yyyy hh24:mi:ss') " +
                                            "group by a.plato) " +
                                    "SELECT * FROM Plato_Top ORDER BY Monto_Total DESC";
                    DataSet ds = CapaDatos.GetDataSet(query, conex);
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        productoTops.Add(new ProductoTop() 
                        {
                            Plato = ds.Tables[0].Rows[0][0].ToString().Trim(),
                            Cantidad = Convert.ToInt32(ds.Tables[0].Rows[0][1].ToString().Trim()),
                            ValorTotal = Convert.ToInt32(ds.Tables[0].Rows[0][2].ToString().Trim()),
                            Periodo = fechaInicio.ToString("MMM") + " " + fechaInicio.Year
                        });
                    }
                    fechaInicio = fechaInicio.AddMonths(1);
                    fechaFinPeriodo = fechaInicio.AddMonths(1);
                }
            }
            return productoTops;
        }
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------//
/*  * JHAN CARLOS DEL RIO: Full-Stack Developer *  */
/*  * 2020-06   *   */
//---------------------------------------------------------------------------------------------------------------------------------------------//