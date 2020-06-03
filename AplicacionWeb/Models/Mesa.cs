using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp_Restautant
{
    public class Mesa
    {
        public int NroMesa { get; set; }
        public string Nombre { get; set; }
        public string Reservada { get; set; }
        public int Puestos { get; set; }

        public Mesa() {}
    }
}