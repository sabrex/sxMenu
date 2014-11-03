/*!
 * jQuery sxMenu v1.0.1
 * @Copyright (C) 2013-2014 Sabri El Gueder (https://github.com/sabrex/sxMenu)
 *
 */
(function ($) {
	"use strict";
    $.fn.sxmenu = function (options) {
        var defaults = {
			sxMenuTarget		: $(this), 				// Target the current HTML markup you wish to replace
			sxMenuSpeed	 		: 300,     				// dropdown speed (ms)
			sxMenuType	 		: "horizontal",     	// menu type arrangement
			sxMenuAlign	 		: "left",    			// menu alignment (horizontal type)
			sxMenuIndicator	 	: false,    			// indicator that indicates a submenu
			sxMenuExpand		: "+", 					// single character you want to represent the expand for ULs
            sxMenuContract		: "-", 					// single character you want to represent the contract for ULs
			sxMenuShowhide		: "<span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span>"
        };
        var options = $.extend(defaults, options);
		var sxLastSize = window.innerWidth;
        
        // get browser width
        var currentWidth = window.innerWidth || document.documentElement.clientWidth;

		var sxMenu = options.sxMenuTarget;	
		var bigScreen = false;
		
		if(options.sxMenuType == "vertical"){
			sxMenu.addClass("vertical");
			if(options.sxMenuAlign == "right"){
				sxMenu.addClass("right");
			}
		}
		
		if(options.sxMenuIndicator == true){
			sxMenu.find("li").each(function(){
				if($(this).children("ul").length > 0){
					$(this).append("<span class='indicator'>"+options.sxMenuExpand+"</span>");
				}
			});
		}
		
		sxMenu.prepend("<li class='showhide'>"+options.sxMenuShowhide+"</li>");
		
		screenSize(true);
		
		
		$(window).resize(function() {
			screenSize(false);
		});
		
		function controlSize(){
			var sxNewSize = window.innerWidth
			
			if(sxNewSize <= 768 && sxLastSize <= 768){
				sxLastSize = sxNewSize;
				return false;
			} else if(sxNewSize > 768 && sxLastSize > 768){
				sxLastSize = sxNewSize;
				return false;
			} else {
				sxLastSize = sxNewSize;
				return true;				
			}

		}
		
		function screenSize(val){
			if(controlSize()==true || val==true){
				
				sxMenu.find("li, a").unbind();
				sxMenu.find("ul").hide(0);
				sxMenu.find("span.indicator").html(options.sxMenuExpand);
				if(window.innerWidth <= 768){
					showCollapse();
					bindClick();
					if(bigScreen == true){
						bigScreen = false;
						rightAlignMenu();						
					}
				}
				else{
					hideCollapse();
					bindHover();
					if(options.sxMenuType == "horizontal" && options.sxMenuAlign == "right" && bigScreen == false){
						bigScreen = true;
						rightAlignMenu();						
					}
				}
			}
		}
		
		function bindHover(){
			sxMenu.find("li").bind("mouseover", function(){
				$(this).children("ul").stop(true, true).fadeIn(options.sxMenuSpeed);
			}).bind("mouseleave", function(){
				$(this).children("ul").stop(true, true).fadeOut(options.sxMenuSpeed);
			});
		}
		
		function bindClick(){
			sxMenu.find("li:not(.showhide)").each(function(){
				if($(this).children("ul").length > 0){
					$(this).children("a").bind("click", function(){							
						if($(this).siblings("ul").css("display") == "none"){
							$(this).closest("li").children("span.indicator").first().html(options.sxMenuContract);
							$(this).siblings("ul").slideDown(300);
						}
						else{
							$(this).closest("li").children("span.indicator").first().html(options.sxMenuExpand);
							$(this).siblings("ul").slideUp(300);
						}
					});
				}
			});
		}
		
		function showCollapse(){
			sxMenu.children("li:not(.showhide)").hide(0);
			sxMenu.children("li.showhide").show(0);
			sxMenu.children("li.showhide").click(function(){
				if($(this).closest("ul").children("li").is(":hidden")){
					$(this).closest("ul").children("li").slideDown(300);
				}
				else{
					$(this).closest("ul").children("li:not(.showhide)").slideUp(300);
					$(this).closest("ul").children("li.showhide").show(0);
				}
			});
		}
		
		function hideCollapse(){
			sxMenu.children("li").show(0);
			sxMenu.children("li.showhide").hide(0);
		}	
		
		function rightAlignMenu() {
			sxMenu.children("li").addClass("right");	
			var menuWidth = sxMenu.width();
			var menuItems = sxMenu.children("li");
			sxMenu.children("li:not(.showhide)").detach();
			for(var i = menuItems.length; i >= 1; i--){
				sxMenu.append(menuItems[i]);
			}		
		}

    };
})(jQuery);
