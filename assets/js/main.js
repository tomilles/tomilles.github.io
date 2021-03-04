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
		// $( document ).ready(function() {
		// 	$("#navi").css('height',Math.round(win_width*0.113));
		// });
		function fit_navbar() {
			var screen_width = screen.width;
			
			var win_width = window.outerWidth;


			var difference = Math.abs(screen_width - 736);

			var ratio = (screen_width-win_width)/difference;

			var ratio_2 = Math.abs((screen_width-736)/difference);
			console.log('screen:',screen_width,'window',win_width,'diff',difference,'ratio',ratio)

			$("#nav_top ul li").css('margin','0 '+(4-3*(screen_width-win_width)/(1.65*difference))+"em");
			if (win_width > 736){
				$("#myspan").css('top',0.5-0.6*ratio+'em');
				$("#myspan").css('font-size',150-50*ratio+'%');

				// $("#navi").css('height',Math.round(win_width*0.113));
				// $("#header").css('height',Math.round(win_width*0.47));

				$("#navi").css('height',Math.round(146-63*ratio));
				$("#header").css('height',Math.round(688-342*ratio));

				$("#navi ul li a").css('font-size',2.5-0.8*ratio+"em");
				$("#nav_up").css('font-size',2.5-0.8*ratio+"em");
				$("#navi ul").css('margin-top',-0.9*ratio+"em");

				$("#navi").css("background-size", "3200px "+(460-280*ratio)+"px");
			}
			else {
				$("#myspan").css('top',(0.5-0.6*ratio_2)+'em');
				$("#myspan").css('font-size',(150-50*ratio_2)+'%');

				$("#navi").css('height',Math.round(146-63*ratio_2));
				$("#header").css('height',Math.round(688-342*ratio_2));

				$("#navi ul li a").css('font-size',2.5-0.8*(ratio_2)+"em");
				$("#nav_up").css('font-size',2.5-0.8*ratio_2+"em");
				$("#navi ul").css('margin-top',-0.9*ratio_2+"em");

				$("#navi").css("background-size", "3200px 180px");
			}
			// if (win_width<840){
			// 	$("#navi").css("background-image", 'url("assets/css/images/navbar_mobile.svg")')
			// }
			// else if (win_width<1280){
			// 	$("#navi").css("background-image", 'url("assets/css/images/navbar_mobile2.svg")')
			// }
			// else{
			// 	$("#navi").css("background-image", 'url("assets/css/images/navbar.svg")');
			// }
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
			// var win_width = window.outerWidth;
			// if (win_width > 736){
			// 	$("#navi").css('height',Math.round(win_width*0.113));
			// 	$("#header").css('height',Math.round(win_width*0.47));
			// }
			fit_navbar();
			var header_height= parseInt($("#header").css('height'));
			if ($(this).scrollTop() > Math.round(0.7*header_height)){ 
				$('#navi').show(300);
				$('#nav_up').show(300);
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
					// $('#myspan').text('contact');
					// $('#myspan').css('opacity',1);
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
