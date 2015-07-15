$(document).ready(function(){

	//ScrollTo codes
	$("nav a,h1 a").click(function(e){
	
		$.scrollTo(this.hash || 0, 1500, {offset: {"left":0, "top":-100}});
		e.preventDefault();
		
		if(window.innerWidth < 768){
			$("nav").hide();
		};

	});

	//Header colors - Function 
	var bgColor, textColor, logoSrc;
	function scrollColors(bgColor, textColor, logoSrc){
		$("#header").css("background-color",bgColor);
		$("nav li a, #menu").css("color",textColor);
		$(".logo").attr("src",logoSrc).fadeIn(1500);
	}
	
	//Header colors
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		var windowLen = $(window).height() - 100;
		if (scrollPos >= windowLen && scrollPos < windowLen * 2){
			scrollColors("#f5f4f1","#000","img/logo-black.png");
		}else if (scrollPos >= windowLen * 2 && scrollPos < windowLen * 3){
			scrollColors("#34495e","#fff","img/logo.png");
		}else if (scrollPos >= windowLen * 3 && scrollPos <= windowLen * 4){
			scrollColors("#df7166","#fff","img/logo.png");
		}else {
			scrollColors("#00a8a5","#fff","img/logo.png");
		};	
	});
	
	//Every resize of window
	function sizeContent() {
		$("#main").css("height", $(window).height() + "px");
		$("#about, #portfolio, #contact").css("height", $(window).height() -100 + "px");
		$(".articleBodyMain").show().animate({"opacity":"1","padding-top":($(window).height()-100)/3+"px"},1000);
		$(".articleBody").show().animate({"opacity":"1","padding-top":($(window).height()-520)/3+"px"},1000);
	}
	
	sizeContent();
	$(window).resize(sizeContent);

	//Portfolio image description
	$(".image").hover(function(){
		$(this).find("h3").slideToggle("show");
		},function(){
		$(this).find("h3").slideToggle("hide");

	});

	//Nav menu for small size 
	$("nav").addClass("js").before('<div id="menu">&#9776;</div>');
	$("#menu").click(function(){
		$("nav").toggle();
	});

	//Mobile menu
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$("nav").removeAttr("style");
		};
	});

});

