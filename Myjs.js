$(document).ready(function () {
    $("#plus-1").click(function () {
        $("#sidedown-1").slideDown(1000)
        $("#plus-1").hide()
        $("#minus-1").show()
    })
    $("#minus-1").click(function () {
        $("#sidedown-1").slideUp(1000)
        $("#plus-1").show()
        $("#minus-1").hide()
    })
    $("#plus-2").click(function () {
        $("#sidedown-2").slideDown(1000)
        $("#plus-2").hide()
        $("#minus-2").show()
    })
    $("#minus-2").click(function () {
        $("#sidedown-2").slideUp(1000)
        $("#plus-2").show()
        $("#minus-2").hide()
    })
    $("#plus-3").click(function () {
        $("#sidedown-3").slideDown(1000)
        $("#plus-3").hide()
        $("#minus-3").show()
    })
    $("#minus-3").click(function () {
        $("#sidedown-3").slideUp(1000)
        $("#plus-3").show()
        $("#minus-3").hide()
    })

    $('.system-img').find('.system-img-item').hover(function () {
        // hover IN
        $(this).find('img').fadeOut();
        $(this).css({
            'pointer-events': 'none',
        })
        $(this).addClass("hover-system", 200, function () {
            $(this).css({
                'pointer-events': 'auto',
            })
        })
    }, function () {
        // hover Out
        $(this).find('img').fadeIn();
        $(this).removeClass("hover-system")
    })


})


//navbar

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar-menu");
menuToggle.addEventListener("click", function() {
    menu.classList.add("is-active");
});

document.addEventListener("click", function(e) {
    if(!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove("is-active");
    }
});