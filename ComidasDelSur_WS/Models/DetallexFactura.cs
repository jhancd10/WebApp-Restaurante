﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComidasDelSur_WS.Models
{
    public class DetallexFactura
    {
        public int NroFactura { get; set; }
        public string IdSupervisor { get; set; }
        public string Plato { get; set; }
        public int Valor { get; set; }

        public DetallexFactura() {}
    }
}