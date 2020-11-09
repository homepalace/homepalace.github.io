
;(function () {

    var smoothGoTo = function(){
        $('.smooth-goto').on('click', function() {  
            $('html, body').animate({scrollTop: $(this.hash).offset().top +parseInt($(this).attr('offset'))}, 500);
            return false;
        });
        $('.smooth-goto2').on('')
    }

    $(function(){
		smoothGoTo();
	});

}());