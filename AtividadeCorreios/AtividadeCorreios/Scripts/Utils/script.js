//carregando documento
$(document).ready(function () {
    //adicionando uma função ao click do botão
    $('#Button').click(function () {
        debugger
     
        //conectando com api web
        var nCdEmpresa = $('#codigo').val();
        var sDsSenha = $('#senha').val();
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

        var url = "http://usysweb.com.br/api/correiosambev.php?nCdServico="
            + nCdServico
            + "&nCdEmpresa=" + nCdEmpresa
            + "&sDsSenha=" + sDsSenha
            + "&sCepDestino=" + cepDestino
            + "&sCepOrigem=" + cepOrigem
            + "&nVlPeso=" + nVlPeso
            + "&nCdFormato=" + nCdFormato
            + "&nVlComprimento=" + nVlComprimento
            + "&nVlAltura=" + nVlAltura
            + "&nVlLargura=" + nVlLargura
            + "&nVlDiametro=" + nVlDiametro
            + "&sCdMaoPropria=" + sCdMaoPropria
            + "&nVlValorDeclarado=" + nVlValorDeclarado
            + "&sCdAvisoRecebimento=" + sCdAvisoRecebimento
            + "&StrRetorno=xml&nIndicaCalculo=3"; 

        $.getJSON(url, function (data) {

            alert("Valor: " + data.cServico.Valor
                + "\r\nPrazo de Entrega: " + data.cServico.PrazoEntrega
                + "\r\nValor sem adicionais: " + data.cServico.ValorSemAdicionais
                + "\r\nValor mão propria: " + data.cServico.ValorMaoPropria
                + "\r\nValor de aviso de Recebimento: " + data.cServico.ValorAvisoRecebimento
                + "\r\nValor declarado: " + data.cServico.ValorValorDeclarado
                + "\r\nEntraga domiciliar: " + data.cServico.EntregaDomiciliar
                + "\r\nEntrega sabado: " + data.cServico.EntregaSabado); 
                   
        });
    });
});