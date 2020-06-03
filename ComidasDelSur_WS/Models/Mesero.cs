using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComidasDelSur_WS.Models
{
    public class Mesero
    {
        public string IdMesero { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int Edad { get; set; }
        public int Antiguedad { get; set; }

        public Mesero() {}
    }
}