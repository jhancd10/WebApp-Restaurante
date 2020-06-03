using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp_Restautant
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