$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('navactive');
        })
        $(this).addClass('navactive');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.nav li a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('ul.nav li a').removeClass("navactive");
            currentLink.addClass("navactive");
        }
        else{
            currentLink.removeClass("navactive");
        }
    });

   
    $(function(){
        $('#portfolio').mixitup({
            targetSelector: '.item',
            transitionSpeed: 350
        });
    });

      $(function() {
        $( "#datepicker" ).datepicker();
    });

};


function shareTelegram() {
    const url = encodeURIComponent(window.location.href); // Кодирует текущий URL
    const text = encodeURIComponent('Проверьте это!');
    window.open(`https://t.me/share/url?url=${url}&text=${text}`,'_blank');
}

function shareWhatsApp() {
    const url = encodeURIComponent(window.location.href); // Кодирует текущий URL
    const text = encodeURIComponent('Проверьте это!'); // Сообщение для дележа
    window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
}

function shareVK() {
    const url = encodeURIComponent(window.location.href); // Кодирует текущий URL
    const title = encodeURIComponent('Проверьте это!'); // Заголовок для дележа
    window.open(`https://vk.com/share.php?url=${url}&title=${title}`, '_blank');
}
