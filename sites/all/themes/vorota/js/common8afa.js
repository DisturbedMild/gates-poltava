jQuery(document).ready(function(){
  /* Формы*/
	jQuery(".zakaz-spec").click(function(){
		jQuery(".pop-back").fadeIn();
		jQuery(".zakaz-wrapper2").fadeIn();
	});
 jQuery(".footer-call,#call-zakaz").click(function(){
		jQuery(".pop-back").fadeIn();
		jQuery(".zakaz-wrapper2").fadeIn();
	});
	jQuery(".pop-back").click(function(){
		jQuery(".pop-back").fadeOut();
		jQuery(".zakaz-wrapper").fadeOut();
   	jQuery(".zakaz-wrapper2").fadeOut();
	});
	jQuery(".fa-window-close").click(function(){
		jQuery(".pop-back").fadeOut();
		jQuery(".zakaz-wrapper").fadeOut();
    jQuery(".zakaz-wrapper2").fadeOut();
	});
	jQuery(".ckecked").attr("checked","checked");
	         
	jQuery(".zakaz-spec").click(function(){
		var zakaz = jQuery(this).parent().find(".vorota-razmer").html();
  
		jQuery(".webform-component--razmer-vorot input").val(zakaz);
	});
  
		var zakaz = jQuery(".mk-banner h1").html();
		jQuery(".webform-component--stranica input").val(zakaz);

 
	  /* Меню*/
  
  jQuery(".top-menu-wrap .expanded").mouseenter(function(){
        jQuery(".top-menu-wrap .expanded").addClass("collapsed"); 
        jQuery(".top-menu-wrap .menu .menu").stop(true,true);    
        jQuery(".top-menu-wrap .menu .menu").slideDown();                                            
  });
  jQuery(".top-menu-wrap .menu .menu").mouseleave(function(){
        jQuery(".top-menu-wrap .expanded").removeClass("collapsed");
        jQuery(".top-menu-wrap .menu .menu").stop(true,true); 
        jQuery(".top-menu-wrap .menu .menu").slideUp();
  });
  
  jQuery(".view-footer .region-main-menu .expanded").mouseenter(function(){
        jQuery(".bottom-menu-wrap .expanded").addClass("collapsed"); 
        jQuery(".bottom-menu-wrap .menu .menu").stop(true,true);
        jQuery(".bottom-menu-wrap .menu .menu").slideDown();    
  });
  jQuery(".bottom-menu-wrap .menu .menu").mouseleave(function(){
        jQuery(".bottom-menu-wrap .expanded").removeClass("collapsed");
         jQuery(".bottom-menu-wrap .menu .menu").stop(true,true);
        jQuery(".bottom-menu-wrap .menu .menu").slideUp();
  });
 
   jQuery(".top-menu-wrap .expanded").click(function(){
    jQuery(".top-menu-wrap .menu .menu").stop(true,true);
        jQuery(".top-menu-wrap .menu .menu").slideToggle();
   });
    jQuery(".bottom-menu-wrap .expanded").click(function(){
     jQuery(".bottom-menu-wrap .menu .menu").stop(true,true);
        jQuery(".bottom-menu-wrap .menu .menu").slideToggle();
   });
   
   /*Мобильное меню*/
   
    jQuery(".fa-bars").click(function(){
        jQuery(".top-menu-wrap .menu .menu").stop(true,true);
        jQuery(".top-menu-wrap .menu .menu").slideToggle();
    });
   
  /* Картинки попапы*/ 
    var img_cnt = 0;
   jQuery("img.noscale").click(function(){                             
       if (img_cnt == 0){
       jQuery(".pop-up").fadeIn();  
       jQuery(this).removeClass("noscale").addClass("scale-img").hide().fadeIn(); 
       img_cnt++;     
       }  
       else{
       jQuery(this).removeClass("scale-img").addClass("noscale"); 
        jQuery(".pop-up").fadeOut();
        img_cnt--;     
       }    
                         
  }); 
  jQuery(".pop-up").click(function(){
    jQuery(this).hide();
    jQuery(".scale-img").removeClass("scale-img").addClass("noscale");
   
  });
  
   /*Шапка фиксированная*/
   $(window).scroll(function(){
    $('.mk-header').toggleClass('smaller', $(this).scrollTop() > 150);
	});
 
   /*Политика назад*/
   jQuery('#back-page').click(function(){  // Кнопка назад в политике 
      window.history.back(); 
    });   
    
  /*Заголовки товаров на главной*/       
  var new_title = jQuery(".views-field-title a").html().substring(0,15);
  jQuery(".views-field-title a").html(new_title);
  
  /* Размеры на сендвич панелях*/
  jQuery(".page-node-5 .mainprices #vor1 span.vorota-razmer").html("3,5 x 2,1");
  jQuery(".page-node-5 .mainprices #vor2 span.vorota-razmer").html("4 x 2,1");
  jQuery(".page-node-5 .mainprices #vor3 span.vorota-razmer").html("4,5 x 2,1");
  jQuery(".page-node-5 .mainprices #vor4 span.vorota-razmer").html("5 x 2,5");
  jQuery(".page-node-5 .mainprices #vor5 span.vorota-razmer").html("Размеры на заказ");
  /**/
 
});