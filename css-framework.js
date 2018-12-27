/*$.getScript('components/dropdown.js', function() {

});*/

$(document).ready(function (){
	$('div.dropdown').click(function(){
		var dropdown = this;
		$(dropdown).toggleClass('active').toggleClass('visible');
		$(dropdown).find('.menu').first().toggleClass('show').toggleClass('visible hidden');
	});
});