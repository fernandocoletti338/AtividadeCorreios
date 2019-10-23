//carregando documento
$(document).ready(function () {
    //adicionando uma função ao click do botão
    $('#Button').click(function () {
        //conectando com api web
        $.getJSON("http://usysweb.com.br/api/correiosambev.php", function (data) {
            $.each(data, function (key, value) {
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
                    alert("Codigo: " + $('#codigo').val()
                        + "\nServiços: R$ " + $('#servicos').val()
                        + "\nCep Origem: Kg " + $('#cepOrigem').val()
                        + "\nCep Destino: " + $('#cepDestino').val()
                        + "\nPeso: R$ " + $('#peso').val()
                        + "\nFormato: Kg " + $('#formato').val()
                        + "\nComprimento: " + $('#comprimento').val()
                        + "\nAltura: R$ " + $('#altura').val()
                        + "\nLargura: Kg " + $('#largura').val()
                        + "\nDiâmetro: " + $('#diametro').val()
                        + "\nMão própria: R$ " + $('#maoPropria').val()
                        + "\nValor declarado: Kg " + $('#valorDeclarado').val()
                        + "\nAviso de Recebimento: " + $('#avisoDeRecebimento').val());

                    //.append(

                  //  "<div id=\"divContent\" class=\"alert alert-warning\" role\"alert\"><div class=\"row\">" + "Cidade/Uf: " + value.localidade + "/" + value.uf + "</div><div class=\"row\">" + "Bairro: " + value.bairro + "</div><div class=\"row\">" + "Rua: " + value.logradouro + "</div><div class=\"row\">" + "Cep: " + value.cep + "</div><div class=\"row\">" + "Complemento: " + value.complemento + "</div><div class=\"row\">" + "Dados Ibge: "
                );
            });
        });
    });
});