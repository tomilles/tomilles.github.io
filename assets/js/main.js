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
			var win_width = window.outerWidth;
			if (win_width > 736){
				$("#nav_top ul li").css('margin','0 '+(4-3*(1280-win_width)/544)+"em");

				$("#navi").css('height',Math.round(win_width*0.113));
				$("#header").css('height',Math.round(win_width*0.47));

				$("#navi ul li a").css('font-size',(2.5-0.8*((1280-win_width)/544))+"em");
				$("#nav_up").css('font-size',(2.5-0.8*((1280-win_width)/544))+"em");
				$("#navi ul").css('margin-top',-0.9*(1280-win_width)/544+"em");
			}
			else {
				$("#nav_top ul li").css('margin','0 1em');

				$("#navi").css('height',Math.round(736*0.113));
				$("#header").css('height',Math.round(736*0.47));

				$("#navi ul li a").css('font-size',(2.5-0.8*((1280-736)/544))+"em");
				$("#nav_up").css('font-size',(2.5-0.8*((1280-736)/544))+"em");
				$("#navi ul").css('margin-top',-0.9*(1280-736)/544+"em");
			}
			if (win_width<840){
				$("#navi").css("background-image", 'url("assets/css/images/navbar_mobile.svg")')
			}
			else if (win_width<1280){
				$("#navi").css("background-image", 'url("assets/css/images/navbar_mobile2.svg")')
			}
			else{
				$("#navi").css("background-image", 'url("assets/css/images/navbar.svg")');
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
			// var win_width = window.outerWidth;
			// if (win_width > 736){
			// 	$("#navi").css('height',Math.round(win_width*0.113));
			// 	$("#header").css('height',Math.round(win_width*0.47));
			// }
			fit_navbar();
			var header_height= parseInt($("#header").css('height'));
			if ($(this).scrollTop() > Math.round(0.69*header_height)){ 
				// $('#navi').fadeIn(200);
				// $('#nav_up').fadeIn(200);
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

				// External link? Bail.
					if ($(this).attr('href').charAt(0) != '#')
						return;

				// Deactivate all links.
					$nav_a
						.removeClass('active')
						.removeClass('active-locked');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$("#navi ul li a[href='"+$(this).attr('href')+"']")
						.addClass('active')
						.addClass('active-locked');
				});
		
		$nav_a
			.on('click', function() {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

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
		});


		// var $sections=$("#main div[id]")
		// $sections.each(function(){
		// 	$section="#"+this["id"];
	
		
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
						
					$('#navi ul li a').removeClass('active');
					$('#navi ul li a[href="#home"]').addClass('active');
					$('#navi ul li a[href="#home"]').removeClass('active-locked');
				},
				leave: function() {
					$('#navi ul li a[href="#home"]').removeClass('active');
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
					$('#navi ul li a').removeClass('active');
					$('#navi ul li a[href="#work"]').addClass('active');
					$('#navi ul li a[href="#work"]').removeClass('active-locked');
				},
				leave: function() {
					$('#navi ul li a[href="#work"]').removeClass('active');
				}
			});
			$('#footer').scrollex({
				mode: 'middle',
				enter: function() {
					if ($('#navi ul li a').hasClass('locked'))
						return;
					if ($('#navi ul li a').hasClass('active-locked')){
						$('#navi ul li a[href="#footer"]').removeClass('active-locked');
						return;
					}
					$('#navi ul li a').removeClass('active');
					$('#navi ul li a[href="#footer"]').addClass('active');
					$('#navi ul li a[href="#footer"]').removeClass('active-locked');
				},
				leave: function() {
					$('#navi ul li a[href="#footer"]').removeClass('active');
				}
			});
		});
		// $(document).on('click', 'a[href^="#"]', function (event) {
		// 	event.preventDefault();
		// 	if ($.attr(this, 'href')=="#footer")
		// 		var my_offset = -60;
		// 	else 
		// 		var my_offset = 146;
		// 	$('html, body').animate({
		// 		scrollTop: $($.attr(this, 'href')).offset().top - my_offset
		// 	}, 400);
		// });
			// .each(function() {
			// 	var	$this = $(this),
			// 		id = $this.attr('href'),
			// 		$section = $(id);
			// 		if ($section.length < 1)
			// 			return;
			// 		$section.scrollex({
			// 			mode: 'top',
			// 			enter: function() {
			// 				$section.addClass('entered');
			// 			},
			// 			leave: function() {
			// 				$section.removeClass('entered');
			// 			}
			// 		});
			// });
		
			// .each(function() {

			// 	var	$this = $(this),
			// 		id = $this.attr('href'),
			// 		$section = $(id);

			// 	// No section for this link? Bail.
			// 		// if ($section.length < 1)
			// 		// 	return;

			// 	// Scrollex.
			// 		$section.scrollex({
			// 			mode: 'top',

			// 			enter: function() {

			// 				// No locked links? Deactivate all links and activate this section's one.
			// 					// if ($nav_a.filter('.active-locked').length == 0) {

			// 						// $nav_a.removeClass('active');
			// 						$this.addClass('active');

			// 					// }

			// 				// Otherwise, if this section's link is the one that's locked, unlock it.
			// 					// else if ($this.hasClass('active-locked'))
			// 					// 	$this.removeClass('active-locked');

			// 			}
			// 		});

			// });


})(jQuery);
