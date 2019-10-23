//carregando documento
$(document).ready(function () {
    //adicionando uma função ao click do botão
    $('#Button').click(function () {

     
        //conectando com api web
        var nCdEmpresa = $('#codigo').val();
        var nCdServico = $('#servico').val();
        var cepOrigem = $('#cepOrigem').val();
        var cepDestino = $('#cepDestino').val();
        var nVlPeso = $('#peso').val();
        var nCdFormato = $('#formato').val();
        var nVlComprimento = $('#comprimento').val();
        var nVlAltura = $('#altura').val();
        var nVlLargura = $('#largura').val();
        var nVlDiametro = $('#diametro').val();
        var sCdMaoPropria = $('#maoPropria').val();
        var nVlValorDeclarado = $('#valorDeclarado').val();
        var sCdAvisoRecebimento = $('#avisoDeRecebimento').val();

        //http://usysweb.com.br/api/correiosambev.php isto e nossa base de informações nossa url que acessamos os dados

        //"?" esse é o indicador 

        //nCdServico=04510&sCepDestino=" + cepDestino + "&sCepOrigem=" + cepOrigem   tesmo nosso "where" que passa as informações 
        //para nossa base de dados

        $.getJSON("http://usysweb.com.br/api/correiosambev.php?nCdServico=" + nCdServico + "&sCepDestino=" + cepDestino + "&sCepOrigem=" + cepOrigem + "&nVlPeso=" + nVlPeso + "&nCdFormato=" + nCdFormato + "&nVlComprimento=" + nVlComprimento + "&nVlAltura=" + nVlAltura + "&nVlLargura=" + nVlLargura, function (data) {

            alert(data.cServico.Valor + " " + data.cServico.PrazoEntrega + " " + data.cServico.ValorSemAdicionais + " " + data.cServico.ValorMaoPropria + " " + data.cServico.ValorAvisoRecebimento + " " + data.cServico.ValorValorDeclarado + " " + data.cServico.EntregaDomiciliar + " " + data.cServico.EntregaSabado); 

          //  + " " + data.cServico.ValorSemAdicionais + " " + data.cServico.ValorMaoPropria + " " + data.cServico.ValorAvisoRecebimento + " " + data.cServico.ValorValorDeclarado + " " + data.cServico.EntregaDomiciliar + " " + data.cServico.EntregaSabado

            /*$.each(data.cServico, function (key, value) {
                //criamos uma variavel q irá armazenar a informação
                var templateContent = "";
                //iniciamos um separador de informação 
                templateContent += "{";
                //outro laço para repetir para cada informaçõa
                $.each(value, function (key, value) {
                    //adicionamos todas as informaçãoes do nosso objeto
                    templateContent += key + ": " + value + ", ";
                });
                //finalizamos nosso objeto
                templateContent += "}"
                //adicionamos ao nosso campo de texto
                $('input[name="BTN"]').click(function () {
                    alert("Codigo: " +                 
                        + "\nServiços: R$ " +          
                        + "\nCep Origem: Kg " +        
                        + "\nCep Destino: " +          
                        + "\nPeso: R$ " +              
                        + "\nFormato: Kg " +           
                        + "\nComprimento: " +          
                        + "\nAltura: R$ " +            
                        + "\nLargura: Kg " +           
                        + "\nDiâmetro: " +             
                        + "\nMão própria: R$ " +       
                        + "\nValor declarado: Kg " +   
                        + "\nAviso de Recebimento: " + 

                        //.append(

                        //  "<div id=\"divContent\" class=\"alert alert-warning\" role\"alert\"><div class=\"row\">" + "Cidade/Uf: " + value.localidade + "/" + value.uf + "</div><div class=\"row\">" + "Bairro: " + value.bairro + "</div><div class=\"row\">" + "Rua: " + value.logradouro + "</div><div class=\"row\">" + "Cep: " + value.cep + "</div><div class=\"row\">" + "Complemento: " + value.complemento + "</div><div class=\"row\">" + "Dados Ibge: "
                    );
                });
            });*/
        });
    });
});