using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace calculandoIdade.Controllers
{
    public class calculoIdadeController : ApiController
    {
        /// <summary>
        /// Retorna aplicação
        /// </summary>
        /// <returns>Retorna o que nosso app faz</returns>
        public string Get()
        {
            return "App para poder beber hoje";
        }

        public string Get(int anoNascimento, string nomeUsuario = "default")
        {            
            if ((DateTime.Now.Year - anoNascimento) >=18)
            {
                return $"Olá {nomeUsuario} Recursos hidricos alcoolicos";
            }
            else
            {
                return $"Olá {nomeUsuario} Leitinho pra você";
            }
        }
    }
}
