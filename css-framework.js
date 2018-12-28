/*$.getScript('components/dropdown.js', function() {

});*/

$(document).ready(function (){
	/* 	
		*********************
		*					*
		*	DropDown Menu	*
		*					*
		*********************
	*/

	$('div.dropdown').click(function(){
		
		var 

			dropDown = this,
			pageHeight = $(window).height(),
			dropDownTop = $(this).offset().top,
			abovePage = 0.84 * $(window).height(),
			topTolerance = 5

		;


		if ((dropDownTop + topTolerance) >=  abovePage && (dropDownTop + topTolerance) <= pageHeight) {

			$(dropDown).toggleClass('active').toggleClass('upward').toggleClass('visible');

		}else {

			$(dropDown).toggleClass('active').toggleClass('visible');
		}

		$(dropDown).find('.menu').first().toggleClass('show').toggleClass('visible hidden');

		console.log(dropDownTop);
		console.log(abovePage);
	});
});