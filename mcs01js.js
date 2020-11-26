var mission_div = document.getElementById('mission_pic');
var vision_div = document.getElementById('vision_pic');
var goals_div = document.getElementById('goals_pic');

/*
function setpic_height(xElement) {
	if (document.body.clientWidth > 768) {
		xElement.style.height = (2/3)*xElement.offsetWidth + 'px';
	}
	else {
		xElement.style.height = (0.45)*xElement.offsetWidth + 'px';
	}
}

window.onload = setpic_height(mission_div);
window.onload = setpic_height(vision_div);
window.addEventListener('resize', setpic_height(mission_div));
window.addEventListener('resize', setpic_height(vision_div));
*/

function setpic_height() {
	if (document.body.clientWidth > 768) {
		mission_div.style.height = (2/3)*mission_div.offsetWidth + 'px';
		vision_div.style.height = (2/3)*vision_div.offsetWidth + 'px';
		goals_div.style.height = (2/3)*goals_div.offsetWidth + 'px';
	}
	else {
		mission_div.style.height = (0.45)*mission_div.offsetWidth + 'px';
		vision_div.style.height = (0.45)*vision_div.offsetWidth + 'px';
		goals_div.style.height = (0.45)*goals_div.offsetWidth + 'px';
	}
}

window.onload = setpic_height();
window.addEventListener('resize', setpic_height);




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