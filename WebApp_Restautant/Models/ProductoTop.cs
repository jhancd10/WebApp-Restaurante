using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp_Restautant
{
    public class ProductoTop
    {
        public string Plato { get; set; }
        public int Cantidad { get; set; }
        public int ValorTotal { get; set; }
        public string Periodo { get; set; }

        public ProductoTop() {}
    }
}