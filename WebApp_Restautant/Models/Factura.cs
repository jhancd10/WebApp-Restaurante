using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApp_Restautant.Models;

namespace WebApp_Restautant
{
    public class Factura
    {
        public string IdSupervisor { get; set; }
        public string IdCliente { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public int NroMesa { get; set; }
        public int IdMesero { get; set; }
        public IEnumerable<Detalle> Detalles { get; set; }

        public Factura() {}
    }
}