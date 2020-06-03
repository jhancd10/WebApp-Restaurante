using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComidasDelSur_WS.Models
{
    public class VentasMesero
    {
        public string IdMesero { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int Total { get; set; }

        public VentasMesero() {}
    }
}