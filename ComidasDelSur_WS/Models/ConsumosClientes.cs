using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComidasDelSur_WS.Models
{
    public class ConsumosClientes
    {
        public string IdCliente { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int ValorConsumo { get; set; }

        public ConsumosClientes() {}
    }
}