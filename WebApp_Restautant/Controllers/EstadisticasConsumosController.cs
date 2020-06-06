using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestauranteService;

namespace WebApp_Restautant.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EstadisticasConsumosController : ControllerBase
    {
        [HttpGet("{valorConsulta}")]
        public IEnumerable<ConsumosClientes> Get([FromRoute] string valorConsulta)
        {
            var list = valorConsulta.Split(",");
            DateTime fecha = Convert.ToDateTime(list[0]);
            int valor = Convert.ToInt32(list[1]);
            ServiceClient serviceClient = new ServiceClient();
            var getList = serviceClient.GetConsumosClientes(fecha, valor);
            var castToList = getList.AsEnumerable().ToList();

            List<ConsumosClientes> consumosClientes = new List<ConsumosClientes>();
            for (int i = 0; i < castToList.Count; i++)
            {
                consumosClientes.Add(new ConsumosClientes()
                {
                    IdCliente = castToList[i].IdCliente,
                    Nombres = castToList[i].Nombres,
                    Apellidos = castToList[i].Apellidos,
                    ValorConsumo = castToList[i].ValorConsumo
                });
            }
            return consumosClientes;
        }
    }
}
