/* FOR TESTIMONIAL */

$(document).ready(function()
{
	setupRotator();
});	
function setupRotator()
{
	if($('.buyer-say').length > 1)
	{
		$('.buyer-say:first').addClass('current').fadeIn(1000); /* INITIAL FADE-IN TIME*/
		setInterval('textRotate()', 3000); /* CONTENT SHOING TIME */
	}
}
function textRotate()
{
	var current = $('#testimonial > .current');
	if(current.next().length == 0)
	{
		current.removeClass('current').fadeOut(1000); /* ONLY FADING ANIMATION TIME */
		$('.buyer-say:first').addClass('current').fadeIn(1000);
	}
	else
	{
		current.removeClass('current').fadeOut(1000);
		current.next().addClass('current').fadeIn(1000);
	}
}