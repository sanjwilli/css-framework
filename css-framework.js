/*$.getScript('components/dropdown.js', function() {

});*/

$(document).ready(function (){

	/*var

		dropdown = 'dropdown',
		selection = 'selection',
		checkbox = 'checkbox',
		modal = 'modal'
	;*/

	$(document).click(function(a){

		var
			classes = $(a.target).prop('class').toLowerCase(),
			ids = $(a.target).prop('id').toLowerCase(),
			tag = $(a.target).prop('tagName').toLowerCase()
		;

		//console.log(a.target);

		//console.log(classes);
		//console.log(ids);
		//console.log(tag);

		if(classes.includes("dropdown")) {
			if (tag.includes("div")) {
				dropdown(a.target);
			} else if (tag.includes("i")) {
				dropdown(a.target.offsetParent);
			};
		}
		if(classes.includes("item") && tag.includes("div")) {
			drop_item_select(a.target);
		}
	});

	/*
		*********************
		*					*
		*	DropDown Menu	*
		*					*
		*********************
	*/



	/*$('div.dropdown').click(function(){

		console.log(this);

		var

			dropDown = this,
			pageHeight = $(window).height(),
			dropDownTop = $(this).offset().top,
			abovePage = 0.84 * $(window).height(),
			topTolerance = 5

		;

		console.log("div dropdown - actiivated");


		if (inViewport($(dropDown)) && (dropDownTop + topTolerance) >=  abovePage && (dropDownTop + topTolerance) <= pageHeight) {

			$(dropDown).toggleClass('active').toggleClass('upward').toggleClass('visible');

		}else {

			$(dropDown).toggleClass('active').toggleClass('visible');
		}

		$(dropDown).find('.menu').first().toggleClass('show').toggleClass('visible hidden');


	});*/

	/*$('.selection.dropdown .item').click(function(){

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

	});*/

	/*function selectedDisplay(element, selected) {


		if(element.hasClass('.text')) {

			if(element.hasClass('.default')) {

				element.removeClass('.default');

				console.log(selected);
			}

		} else if(element.hasClass('.selection') && element.hasClass('.dropdown')) {

			console.log("Error");

		} else {0

			selectedDisplay(element.prev(), $(selected));
		}

	} */

	/*function inViewport(element) {

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
	}*/


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

	/* -- Modal Open Specific -- */

	$(document).on('click', '.js-open-modal', function(){

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

	/* -- Modal Close Specific -- */

	/*$('.js-close-modal').click(function() {

		$('.dimmer').addClass('hidden fade out');

		$('.modal').addClass('scale out')

		setTimeout(function(){
			$('.dimmer').removeClass('visible active fade out').removeAttr('style');

			$('.modal').removeClass('visible active scale out').removeAttr('style');
		}, 500);
	}); */

	/* -- Close Modal Outside of Modal -- */

	$(document).on('click', function(e) {

		var
			element = $(e.target),

			target = $(e.target).prop('class')

		;

		//console.log(target);

		//alert(target);
		//alert(element.is('div'));

		/*if(target.includes(dropdown) && target.includes(selection)) {

		} */

		if(target.includes('modal')) {

			var
				modal_type = element.data('modalValue')
			;

			//alert(modal_type);
		}


		if(target.includes('dimmer') && target.includes('visible')) {

			$('.dimmer').addClass('hidden fade out');

			$('.modal').addClass('scale out');

			setTimeout(function(){
				$('.dimmer').removeClass('visible active fade out').removeAttr('style');

				$('.modal').removeClass('visible active scale out').removeAttr('style');
			}, 500);
		}

		if(target.includes('js-close-modal')) {

			$('.dimmer').addClass('hidden fade out');

			$('.modal').addClass('scale out')

			setTimeout(function(){
				$('.dimmer').removeClass('visible active fade out').removeAttr('style');

				$('.modal').removeClass('visible active scale out').removeAttr('style');
			}, 500);
		}
	});
});

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
	*										*
	*		DropDown Menu		*
	*										*
	*********************
*/
function dropdown(a) {

	console.log(a);

	var

		dropDown = a,
		pageHeight = $(window).height(),
		dropDownTop = $(a).offset().top,
		abovePage = 0.84 * $(window).height(),
		topTolerance = 5

	;

	//console.log(dropDown);


	if (inViewport($(dropDown)) && (dropDownTop + topTolerance) >=  abovePage && (dropDownTop + topTolerance) <= pageHeight) {

		$(dropDown).toggleClass('active').toggleClass('upward').toggleClass('visible');

	}else {

		$(dropDown).toggleClass('active').toggleClass('visible');
	}

	$(dropDown).find('.menu').first().toggleClass('show').toggleClass('visible hidden');

}

function drop_item_select(a) {

	var
		select = a,
		selected = $(a).data('value'),
		displayFind = $(a).parent().parent(),
		input = displayFind.find('input'),
		display = displayFind.find('.text')
	;
	//console.log(a)
	//console.log(a.offsetParent.offsetParent);

	if(display.hasClass('default')) {

		//console.log('Im in');

		display.removeClass('default');

	}

	display.html(selected);
	input.val(selected)
	dropdown(a.offsetParent.offsetParent);

}
