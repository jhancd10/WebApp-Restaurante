using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestauranteService;

namespace WebApp_Restautant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeserosController : ControllerBase
    {
        private readonly ILogger<Mesero> _logger;

        public MeserosController(ILogger<Mesero> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Mesero> Get()
        {
            ServiceClient serviceClient = new ServiceClient();
            var getList = serviceClient.GetMeserosAsync().Result;
            var castToList = getList.AsEnumerable().ToList();

            List<Mesero> meseros = new List<Mesero>();
            for (int i = 0; i < castToList.Count; i++)
            {
                meseros.Add(new Mesero()
                {
                    IdMesero = castToList[i].IdMesero,
                    Nombres = castToList[i].Nombres,
                    Apellidos = castToList[i].Apellidos,
                    Edad = castToList[i].Edad,
                    Antiguedad = castToList[i].Antiguedad
                });
            }
            return meseros;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Mesero mesero)
        {
            RestauranteService.Mesero mesero1 = new RestauranteService.Mesero()
            {
                IdMesero = mesero.IdMesero,
                Nombres = mesero.Nombres,
                Apellidos = mesero.Apellidos,
                Edad = Convert.ToInt32(mesero.Edad),
                Antiguedad = Convert.ToInt32(mesero.Antiguedad)
            };
            ServiceClient serviceClient = new ServiceClient();
            string newMesero = serviceClient.RegistrarMeseroAsync(mesero1).Result;
            if (!newMesero.Equals("OK"))
            {
                return BadRequest(newMesero);
            }
            return CreatedAtAction("GetMesero", new { id = mesero.IdMesero }, mesero);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Mesero mesero)
        {
            RestauranteService.Mesero mesero1 = new RestauranteService.Mesero()
            {
                IdMesero = mesero.IdMesero,
                Nombres = mesero.Nombres,
                Apellidos = mesero.Apellidos,
                Edad = Convert.ToInt32(mesero.Edad),
                Antiguedad = Convert.ToInt32(mesero.Antiguedad)
            };
            ServiceClient serviceClient = new ServiceClient();
            string newMesero = serviceClient.ActualizarMeseroAsync(mesero1).Result;
            if (!newMesero.Equals("OK"))
            {
                return BadRequest(newMesero);
            }
            return CreatedAtAction("PutMesero", new { id = mesero.IdMesero }, mesero);
        }

        [HttpGet("{idMesero}")]
        public string Get([FromRoute] string idMesero)
        {
            RestauranteService.Mesero mesero1 = new RestauranteService.Mesero()
            {
                IdMesero = idMesero,
                Nombres = "Nomb",
                Apellidos = "Ape",
                Edad = Convert.ToInt32(1),
                Antiguedad = Convert.ToInt32(0)
            };
            ServiceClient serviceClient = new ServiceClient();
            string newMesero = serviceClient.EliminarMeseroAsync(mesero1).Result;
            return newMesero;
        }
    }
}
