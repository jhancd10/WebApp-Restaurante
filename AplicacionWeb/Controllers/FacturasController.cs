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
                return nroFactura;
            }
            return 0;
        }
    }
}
