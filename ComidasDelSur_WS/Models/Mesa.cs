using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComidasDelSur_WS.Models
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