using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp_Restautant
{
    public class Factura
    {
        public string IdCliente { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public int NroMesa { get; set; }
        public int IdMesero { get; set; }

        public Factura() {}
    }
}