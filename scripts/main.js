$(document).ready(function(){

	$(window).scroll(function() {
	    var height = $(window).scrollTop();

	    if(height  > 70) {
	        $('nav').addClass('opaque');
	    } else {
	    	$('nav').removeClass('opaque');
	    }
	});

	$('.mobile-menu').click(function(){
		if($('nav').hasClass('active')){
			$('nav').removeClass('active');
		} else {
			$('nav').addClass('active');
		}
	});

	$('.faq-link').click(function(event){
		var parent = $(this).parent().parent();
		parent.find('.faq-content').stop(true, true).slideToggle();
		if($(this).hasClass('collapse')){
			$(this).removeClass('collapse');
			$(this).addClass('collapsed');
		} else {
			$(this).removeClass('collapsed');
			$(this).addClass('collapse');
		}
	});

	var url = document.URL;
	var idx = url.indexOf("#");

	if (idx != -1) {
		var hash = url.substring(idx+1);
		var faqElement = document.getElementById(hash);

		if (faqElement != null) {

			var faqLink = faqElement.getElementsByClassName('faq-link')[0];
			faqLink.className = "";
			faqLink.className = "faq-link";
			faqLink.className = "collapsed";

			var faqContent = faqElement.getElementsByClassName('faq-content')[0];
			faqContent.style.display = "block";
			// window.scrollBy(1000,1000);
		} 
	}
	

});


$(document).mouseup(function (e)
{
    var container = $("nav");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('nav').removeClass('active');
    }
});