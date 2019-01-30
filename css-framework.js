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

	$('.js-open-modal').click(function(){

		var
			modal = this
		;


		$('.dimmer').removeClass('hidden').addClass('visible active fade in').attr('style', 'display: flex !important; animation-duration: 500ms;');
		
		$('.modal').addClass('visible active scale in').attr('style', 'display: block !important;  animation-duration: 500ms;');

		setTimeout(function(){
			$('.dimmer').removeClass('fade in').attr('style', 'display: flex !important;');

			$('.modal').removeClass('scale in').attr('style', 'display: block !important;');
		}, 500);
	});

	$('.js-close-modal').click(function() {

		$('.dimmer').addClass('hidden fade out');

		$('.modal').addClass('scale out')

		// $('.dimmer').addClass('hidden fade out').attr('style', 'animation-duration: 1000ms;').removeClass('visible active').removeAttr('style');

		// $('.modal').addClass('scale out').attr('style', 'animation-duration: 1000ms;').removeClass('visible active').removeAttr('style');

		setTimeout(function(){
			$('.dimmer').removeClass('visible active fade out').removeAttr('style');

			$('.modal').removeClass('visible active scale out').removeAttr('style');
		}, 500);
	});

	// $(document).on('click', function(event) {

	// 	if($('.dimmer').hasClass('visible active')) {
	// 		if(!$(event.target).closest('.modal').length) {
	// 			$('body').find('.dimmer').addClass('hidden fade out');
	// 			$('body').find('.modal').addClass('scale out');

	// 			setTimeout(function(){
	// 				$('body').find('.dimmer').removeClass('visible active fade out');
	// 				$('body').find('.modal').removeClass('visible active scale out');
	// 			});
	// 		}
	// 	}
	// });
});