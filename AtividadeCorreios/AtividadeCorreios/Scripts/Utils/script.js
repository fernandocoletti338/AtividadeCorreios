//carregando documento
$(document).ready(function () {
    //adicionando uma função ao click do botão
    $('input[name="bntconsultar"]').click(function () {
        debugger

        //obter as informações dos meus campos
        //Obtemos as informações do nosso formulario web completo
        var informacoes = $('form[name="formenviar"]').serializeArray();
        //Obtemos o atributo que indica a pagina que vamos enviar o post
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

// Aperta enter par autopreencher o formulário para testes
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        $('#servico').val('04014');
        $('#cepOrigem').val('89035038');
        $('#cepDestino').val('89046015');
        $('#peso').val('2');
        $('#formato').val('1');
        $('#comprimento').val('20');
        $('#altura').val('20');
        $('#largura').val('40');
        $('#diametro').val('0');
        $('#maoPropria').val('N');
        $('#valorDeclarado').val('0');
        $('#avisoDeRecebimento').val('N');
    }
});