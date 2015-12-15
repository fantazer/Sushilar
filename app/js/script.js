function flyToElement(flyer, flyingTo) {
    var $func = $(this);
    var divider = 3;
    var flyerClone = $(flyer).clone();
    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
    $('body').append($(flyerClone));
    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
     
    $(flyerClone).animate({
        opacity: 0.4,
        left: gotoX,
        top: gotoY,
        width: $(flyer).width()/divider,
        height: $(flyer).height()/divider
    }, 700,
    function () {
        $(flyingTo).fadeOut('fast', function () {
            $(flyingTo).fadeIn('fast', function () {
                $(flyerClone).fadeOut('fast', function () {
                    $(flyerClone).remove();
                });
            });
        });
    });
}



$(document).ready(function(){


	$('.dropdown-toggle').dropdown()
	//Carousel
	$(".main-slider").owlCarousel({
	 	items : 1,
	 	autoHeight : true,
	 	pagination : true,
	 	autoPlay : true,
	 	singleItem:true
	 	}
	 ); 	

	//Toggle
	$('.basket-inner').click(function(){
		$('.basket-toggle').slideToggle();
		$('.content-right').slideToggle();
		
	})
	$('.basket .fa').click(function(){
		$('.main-nav li').slideToggle(100);
	})

	//random text
	var randomText = [" Хочу " , " Да! " , " Моё " , " Еще "  , " Беру " , " Надо "]
	$('.content-left-bigitems-footer-icon').hover(function(){
		var rand = Math.floor(Math.random() * randomText.length);
		$(this).html(randomText[rand]);
	})
	$('.content-left-midleitems-footer-icon').hover(function(){
		var rand = Math.floor(Math.random() * randomText.length);
		$(this).html(randomText[rand]);
	})
	$('.content-left-smallitems-footer-icon').hover(function(){
		var rand = Math.floor(Math.random() * randomText.length);
		$(this).html(randomText[rand]);
	})

	$(".toggle-animate-card").click(function(){ 
						var imgBasket = $(this).parent().parent().parent().find('img').eq(0);
						console.log(imgBasket);
						var locationBasket = $('.basket-inner').offset();
						var basketY = locationBasket.top+'px';
						var basketX = locationBasket.left+$('.basket').width()/2+'px';
						var imgY = imgBasket.offset().top;
						var imgX = imgBasket.offset().left;
             imgBasket  
              .clone()  
              .appendTo("body")
              .css({'position' : 'absolute','z-index' : '1001','left':imgX,'top':imgY})   
              .animate({opacity: 0.1,   
                            top: basketY, 
                            left: basketX,
                            width: 50,   
                            height: 50}, 700, function() {  
                    $(this).remove();  
              });  
         }); 
	
	// Do our DOM lookups beforehand

  // $('.main-nav').waypoint({
  //   handler: function(event) {
  //     	$('.container-head').toggleClass('sticky');
  //     	$('.owl-wrapper-outer').toggleClass('dn');
  //     	$('.owl-pagination').toggleClass('hidden');

  //   },offset: -250
  // });

  setTimeout(function(){

  	// ######### auth #########
  	$('.lsp-block-auth .label-row-field  .lsp-js-submit')
		.parent(".label-row-field ")
		.addClass("auth-buttons")
		.append('<a class="auth-button-registration" href="/menu/#!/register">Регистрация</a>')

		$('.label-row-field  a').each(function(){
			if($(this).text()=="Забыли пароль?"){
				$(this).addClass("text-red")
			}
		})

		$('.lsp-block-auth .label-row-field input:eq(0)').attr("placeholder", "Ваш e-mail");
		$('.lsp-block-auth .label-row-field input:eq(1)').attr("placeholder", "пароль");
		//######### auth #########

		//######### registration #########

		$('.lsp-block-register .lsp-js-form-field-name input:eq(0)').attr("placeholder", "Имя");
		$('.lsp-block-register .lsp-js-form-field-phone input[type="text"]').attr("placeholder", "Телефон");	
		$('.lsp-block-register .lsp-js-form-field-email input[type="text"]').attr("placeholder", "Электронная почта");	
		$('.lsp-block-register .lsp-js-form-field-password input[type="password"]').attr("placeholder", "Пароль");	
		$('.lsp-block-register .lsp-js-form-field-passwordRepeat input[type="password"]').attr("placeholder", "Подтверждение пароля");	

		$('.lsp-block-register .label-row-field  .lsp-js-submit')
		.parent(".label-row-field ")
		.addClass("auth-buttons")
		.append('<a class="auth-button-registration"  href="/menu/#!/auth">Войти</a>')

		$('.lsp-block-register .auth-buttons span').text("Регистрация");

		//######### registration #########

  	
  },3000)
  
	
})



