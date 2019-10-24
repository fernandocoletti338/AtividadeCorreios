//carregando documento
$(document).ready(function () {
    //adicionando uma função ao click do botão
    $('input[name="BTN"]').click(function () {

        var informacoes = $('form[name="formenviar"]').serializeArray();


        var obterAtributo = $('form[name="formenviar"]').attr('send-post');

        //Enviamos o post para nosso servidor web
        $.post("http://usysweb.com.br/api/" + obterAtributo + ".php?giomar=true", informacoes, function (data) {
            //aqui como recebemos uma string com formato de JSON
            //temos que passar ela para o JSON parecido com o int.Parse()
            data = JSON.parse(data);
            //Aqui carregamos as informações automaticamente
            $.each(data.cServico, function (key, value) {
                $('p[name="{key}"'.replace("{key}", key)).text(value);
            });
        });
    });
});