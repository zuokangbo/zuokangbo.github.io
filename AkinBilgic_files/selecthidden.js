/* Select Hidden Div - Akin Bilgic - v1.0 - 2013-04-22 */

$(document).ready(function(){

	$('.hidden').hide();

	$('#procedure_from_select').change(function(){
		$('.procedure_from').hide();
		$('#' + $(this).val()).show();
	});

	$('#procedure_to_select').change(function(){
		$('.procedure_to').hide();
		$('#' + $(this).val()).show();
	});

});