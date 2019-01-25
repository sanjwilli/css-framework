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


		if (inViewport($(dropDown)) && (dropDownTop + topTolerance) >=  abovePage && (dropDownTop + topTolerance) <= pageHeight) {

			$(dropDown).toggleClass('active').toggleClass('upward').toggleClass('visible');

		}else {

			$(dropDown).toggleClass('active').toggleClass('visible');
		}

		$(dropDown).find('.menu').first().toggleClass('show').toggleClass('visible hidden');


	});

	$('.selection.dropdown .item').click(function(){

		var

			select = this,
			selected = $(this).data('value'),
			displayFind = $(this).parent().parent(),
			input = displayFind.find('input'),
			display = displayFind.find('.text')

		;

		if(display.hasClass('default')) {

			console.log('Im in');

			display.removeClass('default');

		}

		display.html(selected);
		input.val(selected)

	});

	/*function selectedDisplay(element, selected) {


		if(element.hasClass('.text')) {

			if(element.hasClass('.default')) {

				element.removeClass('.default');

				console.log(selected);
			}

		} else if(element.hasClass('.selection') && element.hasClass('.dropdown')) {

			console.log("Error");

		} else {

			selectedDisplay(element.prev(), $(selected));
		}

	} */

	function inViewport(element) {

		var

			top_of_dropdown = element.offset().top,
			bottom_of_dropdown = element.offset().top + element.outerHeight(),
			top_of_screen = $(window).scrollTop(),
			bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()

		;

		if((bottom_of_screen > top_of_dropdown) && (top_of_screen < bottom_of_dropdown)) {

			return true;

		} else {

			return false;
		}
	}


	/* 	
		*********************
		*					*
		*	Checkbox Button	*
		*					*
		*********************
	*/

	$('.checkbox').click(function(){

		var

			checkbox = this
		;

		$(checkbox).toggleClass('checked');
	});

	/* 	
		*********************
		*					*
		*		Modal		*
		*					*
		*********************
	*/

	$('#TestModal').click(function(){

		$('.dimmer').removeClass('hidden').addClass('visible active');
		$('.modal').addClass('visible active');
	})
});