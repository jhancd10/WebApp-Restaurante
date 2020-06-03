using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComidasDelSur_WS.Models
{
    public class Supervisor
    {
        public string IdSupervisor { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int Edad { get; set; }

        public Supervisor() {}
    }
}