using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace calculoImc.Controllers
{
   
    public class calculoImcController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [AllowAnonymous]
        public string Get(double peso, double altura, string nomeUsuario = "default")
        {
            var imc = peso / (altura * altura);
            var resultado = imc;

            //Abaixo de 17	Muito abaixo do peso
            if (imc <= 17)
            {
                return $"Olá {nomeUsuario} Seu Imc é: {imc} de acordo com seu peso: {peso}Kg e altura: {altura}M. Você está abaixo do peso! COMA BIGMAC 10 X POR DIA";
            }
            //Entre 17 e 18,49	Abaixo do peso
            if (imc >= 17 && imc <= 18.49)
            {
                return $"Olá {nomeUsuario} Seu Imc é: {imc} de acordo com seu peso: {peso}Kg e altura: {altura}M. Você está abaixo do peso! COMA BIGMAC 5 X POR DIA";
            }
            //Entre 18,5 e 24,99  Peso normal
            if (imc >= 18.5 && imc <= 24.99)
            {
                return $"Olá {nomeUsuario} Seu Imc é: {imc} de acordo com seu peso: {peso}Kg e altura: {altura}M. Você está dentro do peso! COMA BIGMAC 1 X POR DIA";
            }
            //Entre 25 e 29,99    Acima do peso
            if (imc >= 25 && imc <= 29.99)
            {
                return $"Olá {nomeUsuario} Seu Imc é: {imc} de acordo com seu peso: {peso}Kg e altura: {altura}M. Você está acima do peso! ESTÁ LIBERADO SÓ 1/2 BIGMAC POR DIA";
            }
            //Entre 30 e 34,99    Obesidade I
            else
            {
                return $"Olá {nomeUsuario} Seu Imc é: {imc} de acordo com seu peso: {peso}Kg e altura: {altura}M. Você esta acima do peso! FECHA A BOCA FOFÃO";
            }
        }
    }
}
