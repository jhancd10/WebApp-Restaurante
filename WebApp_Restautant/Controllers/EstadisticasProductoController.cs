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
    public class EstadisticasProductoController : ControllerBase
    {
        [HttpGet("{fechaInicio}")]
        public IEnumerable<ProductoTop> Get([FromRoute] string fechaInicio)
        {
            DateTime fecha = Convert.ToDateTime(fechaInicio);
            ServiceClient serviceClient = new ServiceClient();
            var getList = serviceClient.GetProductosTop(fecha);
            var castToList = getList.AsEnumerable().ToList();

            List<ProductoTop> productosTop = new List<ProductoTop>();
            for (int i = 0; i < castToList.Count; i++)
            {
                productosTop.Add(new ProductoTop()
                {
                    Plato = castToList[i].Plato,
                    Cantidad = castToList[i].Cantidad,
                    ValorTotal = castToList[i].ValorTotal,
                    Periodo = castToList[i].Periodo
                });
            }
            return productosTop;
        }
    }
}
