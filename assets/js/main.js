/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');
	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});
	// Play initial animations on page load.
	
		function fit_navbar() {

			
			var win_width = window.innerWidth;
			var win_height = window.innerHeight;



			var ratio = win_width/1280;

			var ratio_min = 736/1280;

			var navi_height = parseInt($("#navi").css('height'));
			console.log(win_width,win_height);

			// $("#footer").css('height',+"px");
			
			$("#nav_top ul li").css('margin','0 '+3.8*ratio+'em');
			

			if (736 < win_width && win_width < 1280){

				$("#home div.single_column").addClass("columns").removeClass('single_column');
				$("#home div.border_top").addClass("border_left").removeClass('border_top');
				$("#header").css('height',Math.round(688*ratio));
				$("#avatar img").css("height",(300*ratio)+'px');
				$("#avatar").css("background-size",(270*ratio)+'px');
				$("#nav_top").css("height",106*ratio+40+'px');
				$("#navi").css('height',146*ratio);
				$("#navi ul li a").css('font-size',2.7*ratio+"em");
				$("#nav_up").css('font-size',2.5*ratio+"em");
				$("#navi ul").css('margin-top',-0.9/(ratio*1.3)+"em");
				$("#navi").css("background-size", "3200px "+(460*ratio)+"px");
				$("#myspan").css('font-size',150*(ratio)+'%');
				$("#myspan").css('top',1.6*ratio-1.1+'em');

				$("#header h1").css("font-size",2.5*ratio+'em')
				$("#header h1").css('margin-top',0+"em");

				$("#header p").css("font-size",1.2*ratio+0.5+'em')
				$("#header p").css('margin-top', -0.3*ratio-1+"em");

				$("ul.icons li").css("font-size",1.25+"em");
				$("#footer").css('height',Math.max((win_height+205-navi_height),600)+"px");
				
			}
			else if (win_width<=736){
				$("#home div.columns").addClass("single_column").removeClass('columns');
				$("#home div.border_left").addClass("border_top").removeClass('border_left');
				$("#header").css('height',Math.round(688*ratio_min));
				$("#avatar img").css("height",(300*ratio_min)+'px');
				$("#avatar").css("background-size",(270*ratio_min)+'px');
				$("#nav_top").css("height",106*ratio_min+40+'px');
				$("#navi").css('height',146*ratio_min);
				$("#navi ul li a").css('font-size',2.7*ratio_min+"em");
				$("#nav_up").css('font-size',2.5*ratio_min+"em");
				$("#navi ul").css('margin-top',-0.9/(ratio_min*1.3)+"em");
				$("#navi").css("background-size", "3200px "+(460*ratio_min)+"px");
				$("#myspan").css('font-size',150*(ratio_min)+'%');
				$("#myspan").css('top',1.6*ratio_min-1.1+'em');

				$("#header h1").css("font-size",2.5*ratio_min+'em')
				$("#header h1").css('margin-top',0+"em");

				$("#header p").css("font-size",1.2*ratio_min+0.5+'em')
				$("#header p").css('margin-top', -0.3*ratio_min-1+"em");

				$("ul.icons li").css("font-size",0.75+"em");
				$("#footer").css('height',Math.max((win_height+81),420)+"px");

			}
			else if (win_width>=1280){
				$("#home div.single_column").addClass("columns").removeClass('single_column');
				$("#home div.border_top").addClass("border_left").removeClass('border_top');

				$("#header").css('height',Math.round(688));
				$("#avatar img").css("height",(300)+'px');
				$("#avatar").css("background-size",(270)+'px');
				$("#nav_top").css("height",106+20+'px');
				$("#navi").css('height',146);
				$("#navi ul li a").css('font-size',2.7+"em");
				$("#nav_up").css('font-size',2.5+"em");
				$("#navi ul").css('margin-top',-0.9+"em");
				$("#navi").css("background-size", "3200px "+(460)+"px");
				$("#myspan").css('font-size',150+'%');
				$("#myspan").css('top',0.5+'em');
				
				$("#header h1").css("font-size",2.5+'em')
				$("#header h1").css('margin-top',0+"em");
				$("#header p").css("font-size",1.7+'em')
				$("#header p").css('margin-top', -1.3+"em");
				$("ul.icons li").css("font-size",1.25+"em");
					
				if (win_width==1280){
					$("#footer").css('height',Math.max((win_height+205-navi_height),600)+"px");
				}
				else{
					$("#footer").css('height',Math.max((win_height+265),900)+"px");
				}
			}
		
			
		}
		

		$window.on('load', function() {
			fit_navbar();			
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
			
		});
		$(window).resize(function () {
			fit_navbar();
		});

		$(window).scroll(function() {
			fit_navbar();
			var header_height= parseInt($("#header").css('height'));
			if ($(this).scrollTop() > Math.round(0.75*header_height)){ 
				$('#navi').show(200);
				$('#nav_up').show(200);
			}
			else{
				$('#navi').fadeOut(150);
				$('#nav_up').fadeOut(100);
		}});


		$(document).on('click', 'a[href^="#"]', function (event) {
			event.preventDefault();
			if ($.attr(this, 'href')=="#footer"){
				if (window.outerWidth < 736){
					var my_offset = parseInt($("#navi").css("height"))-164.5;
				}
				else if (window.outerWidth > 1280){
					var my_offset = parseInt($("#navi").css("height"))-414.5;
				}
				else
					var my_offset = parseInt($("#navi").css("height"))-207;
			}	
			else 
				var my_offset = parseInt($("#navi").css("height"));
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - my_offset
			}, 400);
		});

		var $nav = $('#navi');
		var $nav_a = $nav.find('a');

		var $nav_top = $('#nav_top');
		var $nav_top_a = $nav_top.find('a');

		$nav_top_a
			.on('click', function() {
					var $this = $(this);
				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;
					else if ($this.attr('href')=='#home'){
						var my_span = 'myself'
					}
					else if ($this.attr('href')=='#work'){
						var my_span = 'projects'
					}
					else if ($this.attr('href')=='#footer'){
						var my_span = 'contact'
					}
					$('#myspan').css('opacity',0);
					setTimeout(() => {
						$('#myspan').text(my_span);
						$('#myspan').css('opacity',1);
					}, 200);
				// Deactivate all links.
					$nav_a
						.removeClass('active')
						.removeClass('active-locked');
				
					// $("#myspan").css('opacity',0);
						


				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$("#navi ul li a[href='"+$(this).attr('href')+"']")
						.addClass('active')
						.addClass('active-locked');
					

				});
		
		$nav_a
			.on('click', function() {

				var $this = $(this);
				// $('#myspan').fadeOut(100);
				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;
					else if ($this.attr('href')=='#home'){
						var my_span = 'myself'
					}
					else if ($this.attr('href')=='#work'){
						var my_span = 'projects'
					}
					else if ($this.attr('href')=='#footer'){
						var my_span = 'contact'
					}
					// console.log($('#myspan').css('opacity'));
					// $('#myspan').css('opacity',0);
					// $('#myspan').css('opacity',0).delay(1000).css('opacity',1);
					// $('#myspan').fadeIn(1000).delay(3000).fadeOut(1000);
					
					// $('#myspan').css('opacity',1);
					// $('#myspan').text(my_span);
					$('#myspan').css('opacity',0);
					setTimeout(() => {
						$('#myspan').text(my_span);
						$('#myspan').css('opacity',1);
					}, 200);
				// Deactivate all links.
					$nav_a
						.removeClass('active')
						.removeClass('active-locked');

				
				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');
				});

		$("#nav_up a").on('click', function(){
			$('#navi ul li a').addClass('locked');
			$('#myspan').css('opacity',0);
		});


		
		$(function() {
			$('#header').scrollex({
				mode: 'top',
				enter: function() {
					$('#navi ul li a').removeClass('locked');
				},	
			});
			$('#home').scrollex({
				mode: 'middle',
				enter: function() {
					
					if ($('#navi ul li a').hasClass('locked'))
						return;
					if ($('#navi ul li a').hasClass('active-locked')){
						$('#navi ul li a[href="#home"]').removeClass('active-locked');
						return;
					}
					// $('#myspan').text('myself');
					// $('#myspan').css('opacity',1);
					$('#myspan').css('opacity',0);
					setTimeout(() => {
						$('#myspan').text('myself');
						$('#myspan').css('opacity',1);
					}, 100);
					
					$('#navi ul li a').removeClass('active');
					$('#navi ul li a[href="#home"]').addClass('active');
					$('#navi ul li a[href="#home"]').removeClass('active-locked');
				},
				leave: function() {					
					$('#navi ul li a[href="#home"]').removeClass('active');
					if ($('#navi ul li a').hasClass('active-locked')){
						return;
					}
					$('#myspan').css('opacity',0);
				}
			});
			$('#work').scrollex({
				mode: 'middle',
				enter: function() {
					
					if ($('#navi ul li a').hasClass('locked'))
						return;
					if ($('#navi ul li a').hasClass('active-locked')){
						$('#navi ul li a[href="#work"]').removeClass('active-locked');
						return;
					}
					// $('#myspan').text('projects');
					// $('#myspan').css('opacity',1);
					$('#myspan').css('opacity',0);
					setTimeout(() => {
						$('#myspan').text('projects');
						$('#myspan').css('opacity',1);
					}, 100);

					$('#navi ul li a').removeClass('active');
					$('#navi ul li a[href="#work"]').addClass('active');
					$('#navi ul li a[href="#work"]').removeClass('active-locked');
				},
				leave: function() {
					$('#navi ul li a[href="#work"]').removeClass('active');
					if ($('#navi ul li a').hasClass('active-locked')){
						return;
					}
					$('#myspan').css('opacity',0);


				}
			});
			$('#footer').scrollex({
				mode: 'top',
				enter: function() {
					
					if ($('#navi ul li a').hasClass('locked'))
						return;
					if ($('#navi ul li a').hasClass('active-locked')){
						$('#navi ul li a[href="#footer"]').removeClass('active-locked');
						return;
					}
				
					$('#myspan').css('opacity',0);
					setTimeout(() => {
						$('#myspan').text('contact');
						$('#myspan').css('opacity',1);
					}, 100);

					$('#navi ul li a').removeClass('active');
					$('#navi ul li a[href="#footer"]').addClass('active');
					$('#navi ul li a[href="#footer"]').removeClass('active-locked');
				},
				
				leave: function() {
					$('#navi ul li a[href="#footer"]').removeClass('active');
					if ($('#navi ul li a').hasClass('active-locked')){
						return;
					}
					$('#myspan').css('opacity',0);
				}
			});
		});



})(jQuery);
