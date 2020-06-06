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
    public class EstadisticasController : ControllerBase
    {
        [HttpGet("{fechaInicio}")]
        public IEnumerable<VentasMesero> Get([FromRoute] string fechaInicio)
        {
            DateTime fecha = Convert.ToDateTime(fechaInicio);
            ServiceClient serviceClient = new ServiceClient();
            var getList = serviceClient.GetVentasMesero(fecha);
            var castToList = getList.AsEnumerable().ToList();

            List<VentasMesero> ventasMeseros = new List<VentasMesero>();
            for (int i = 0; i < castToList.Count; i++)
            {
                ventasMeseros.Add(new VentasMesero()
                {
                    IdMesero = castToList[i].IdMesero,
                    Nombres = castToList[i].Nombres,
                    Apellidos = castToList[i].Apellidos,
                    Total = castToList[i].Total
                });
            }
            return ventasMeseros;
        }
    }
}
