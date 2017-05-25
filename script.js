$(function () {
    //dentro deste bloco só executa quando a página está totalmente carregada
    $(".menu").click(function () {
        $(".pop").show();
        $(".fundopop").show();
    });
    $(".fecharpop").click(function () {
        $(".pop").fadeIn();
        $(".pop").hide();
        $(".fundopop").hide();
    });
    $(document).mousemove(function (e) {
        var X = e.pageX;
        var Y = e.pageY;
        $('header').css('background', 'radial-gradient(circle at ' + X + 'px ' + Y + 'px, #211003, #000)');
        $('footer').css('background', 'radial-gradient(circle at ' + X + 'px ' + Y + 'px, #211003, #000)');
    })
});