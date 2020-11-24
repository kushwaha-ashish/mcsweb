var cont_div_width = document.getElementById('vision_pic');

if (document.body.clientWidth > 992) {
	cont_div_width.style.height = (2/3)*cont_div_width.offsetWidth + 'px';
}
else {
	cont_div_width.style.height = (0.47)*cont_div_width.offsetWidth + 'px';
}



/*
$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});*/