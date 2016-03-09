$(document).ready(function(){
    $('.appearance__product').first().addClass('is-active');
    $(".appearance__indicator[data-uuid='"+$('.appearance__product').first().data('uuid')+"']").addClass('is-active');

    $('.appearance__indicator').on('click', function(e){
        var id = $(e.currentTarget).data('uuid');
        $('.is-active').removeClass('is-active');
        $(e.currentTarget).addClass('is-active');
        $('.appearance__product.is-active').removeClass('is-active');
        $(".appearance__product[data-uuid='"+id+"']").addClass('is-active');
    });
});

(function(){

	'use strict';
	// Je roept hier een IFFE waar je (nog) niets mee doet, misscien kun je de code hierboven er in stoppen?
	

}());
