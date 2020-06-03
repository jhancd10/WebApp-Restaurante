using ComidasDelSur_WS.Models;
using System;
using System.Collections.Generic;
using System.ServiceModel;

namespace ComidasDelSur_WS
{
    [ServiceContract]
    public interface IService
    {
        [OperationContract]
        string RegistrarCliente(Cliente cliente);

        [OperationContract]
        string RegistrarMesero(Mesero mesero);

        [OperationContract]
        string RegistrarMesa(Mesa mesa);
        
        [OperationContract]
        string RegistrarSupervisor(Supervisor supervisor);

        [OperationContract]
        string ConsultaSupervisor(int IdSupervisor);

        [OperationContract]
        string ActualizarMesero(Mesero mesero);

        [OperationContract]
        string ActualizarMesa(Mesa mesa);

        [OperationContract]
        string ActualizarSupervisor(Supervisor supervisor);

        [OperationContract]
        string EliminarMesero(Mesero mesero);

        [OperationContract]
        string EliminarMesa(Mesa mesa);

        [OperationContract]
        string EliminarSupervisor(Supervisor supervisor);

        [OperationContract]
        List<Mesero> GetMeseros();

        [OperationContract]
        List<Mesa> GetMesas();

        [OperationContract]
        List<Supervisor> GetSupervisores();

        [OperationContract]
        int GenerarFactura(Factura factura);

        [OperationContract]
        string DetalleFactura(DetallexFactura detallexFactura);

        [OperationContract]
        List<VentasMesero> GetVentasMesero(DateTime fechaInicio);

        [OperationContract]
        List<ConsumosClientes> GetConsumosClientes(DateTime fechaInicio, int valor);

        [OperationContract]
        List<ProductoTop> GetProductosTop(DateTime fechaInicio);
    }
}