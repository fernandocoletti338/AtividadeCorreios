//carregando documento
$(document).ready(function () {
    //adicionando uma função ao click do botão
    $('#Button1').click(function () {
        //conectando com api web
        $.getJSON("http://usysweb.com.br/api/correiosambev.php?", function (data) {
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
                $('#divAlert').append(
                    "<div> </div > "

                );
            });
        });
    });
});