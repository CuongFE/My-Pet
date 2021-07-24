$(document).ready(function () {
    $("#plus-1").click(function () {
        $("#sidedown-1").slideDown(1000)
        $("#plus-1").hide()
        $("#minus-1").show()
    })
    $("#minus-1").click(function(){
        $("#sidedown-1").slideUp(1000)
        $("#plus-1").show()
        $("#minus-1").hide()
    })
    $("#plus-2").click(function () {
        $("#sidedown-2").slideDown(1000)
        $("#plus-2").hide()
        $("#minus-2").show()
    })
    $("#minus-2").click(function(){
        $("#sidedown-2").slideUp(1000)
        $("#plus-2").show()
        $("#minus-2").hide()
    })
    $("#plus-3").click(function () {
        $("#sidedown-3").slideDown(1000)
        $("#plus-3").hide()
        $("#minus-3").show()
    })
    $("#minus-3").click(function(){
        $("#sidedown-3").slideUp(1000)
        $("#plus-3").show()
        $("#minus-3").hide()
    })
    $("#system-img-1").mouseenter(function(){
        $("#system-hide-icon-1").fadeOut(500)
        $(".system-img-item").addClass("hover-system")
    })
    $("#system-img-1").mouseleave(function(){
        $("#system-hide-icon-1").fadeIn(500)
        $(".system-img-item").removeClass("hover-system")
    })
    $("#system-img-2").mouseenter(function(){
        $("#system-hide-icon-2").fadeOut(500)
        $(".system-img-item").addClass("hover-system")
    })
    $("#system-img-2").mouseleave(function(){
        $("#system-hide-icon-2").fadeIn(500)
        $(".system-img-item").removeClass("hover-system")
    })

})