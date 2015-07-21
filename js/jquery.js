/*This will only make some styles work if JS is on - must add jsOff in the body tag*/
$('body').removeClass('jsOff').addClass('jsOn');

/*Accordion*/
var accordion = $('.accordion');

accordion.find('dd').hide();

accordion.find('dt').on('click', function (){
	$(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');
});


