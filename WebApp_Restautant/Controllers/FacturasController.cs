using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestauranteService;

namespace WebApp_Restautant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacturasController : ControllerBase
    {
        [HttpPost]
        public int Post([FromBody] Factura factura)
        {
            ServiceClient serviceClient = new ServiceClient();

            RestauranteService.Cliente cliente = new RestauranteService.Cliente()
            {
                IdCliente = factura.IdCliente,
                Nombres = factura.Nombres,
                Apellidos = factura.Apellidos,
                Direccion = factura.Direccion,
                Telefono = factura.Telefono
            };

            string regCliente = serviceClient.RegistrarCliente(cliente);
            if (regCliente.Equals("OK"))
            {
                RestauranteService.Factura newFactura = new RestauranteService.Factura()
                {
                    IdCliente = factura.IdCliente,
                    Nombres = factura.Nombres,
                    Apellidos = factura.Apellidos,
                    Direccion = factura.Direccion,
                    Telefono = factura.Telefono,
                    NroMesa = factura.NroMesa,
                    IdMesero = factura.IdMesero
                };
                int nroFactura = serviceClient.GenerarFactura(newFactura);
                bool tmp = true;
                var listDetalle = factura.Detalles.ToList();
                for (int i = 0; i < listDetalle.Count(); i++)
                {
                    RestauranteService.DetallexFactura detallexFactura = new RestauranteService.DetallexFactura()
                    {
                        NroFactura = nroFactura,
                        IdSupervisor = factura.IdSupervisor,
                        Plato = listDetalle[i].Plato,
                        Valor = Convert.ToInt32(listDetalle[i].Valor)
                    };
                    string result = serviceClient.DetalleFactura(detallexFactura);
                    if (!result.Equals("OK")) {
                        i = listDetalle.Count();
                        tmp = true;
                    }
                }
                if (tmp) { return 0; }
                return 1;
            }
            return 0;
        }
    }
}
