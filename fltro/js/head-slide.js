
$(document).ready(function()
{
	setupRotator();
});	
function setupRotator()
{
	if($('.head-slide').length > 1)
	{
		$('.head-slide:first').addClass('current').fadeIn(3000);
		setInterval('textRotate()', 7000);
	}
}
function textRotate()
{
	var current = $('#head-slide > .current');
	if(current.next().length == 0)
	{
		current.removeClass('current').fadeOut(1500);
		$('.head-slide:first').addClass('current').fadeIn(1500);
	}
	else
	{
		current.removeClass('current').fadeOut(1500);
		current.next().addClass('current').fadeIn(1500);
	}
}