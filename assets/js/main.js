/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// function offsetAnchor() {
// 	if (location.hash.length !== 0) {
// 	  window.scrollTo(window.scrollX, window.scrollY - 146);
// 	}
//   }

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
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		$(window).scroll(function() {
	 
			if ($(this).scrollTop() > 430){ 
				$('#navi').show(200);
				$('#nav_up').show(200);
			}
			else{
				$('#navi').hide(150);
				$('#nav_up').hide(150);
		}});
		// AN ALTERNATIVE VERSION FOR NAVBAR APPEARANCE that is not working yet...
		// $(function() {
		// 	$('header').scrollex({
		// 		scroll: function(progress) {

		// 			// Progressively increase #foobar's opacity as we scroll through it.
		// 			$("navi ul li a").css('opacity', Math.max(0, Math.min(1, progress)));
			
		// 		}
		// 	});
		// });

		$(document).on('click', 'a[href^="#"]', function (event) {
			event.preventDefault();
			// console.log($.attr(this, 'href'))
			if ($.attr(this, 'href')=="#footer")
				var my_offset = -60;
			else 
				var my_offset = 146;
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
						// console.log("class added");
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
						// console.log("class added");
				});

		$("#nav_up a").on('click', function(){
			$('#navi ul li a').addClass('locked');
		});


		// var $sections=$("#main div[id]")
		// $sections.each(function(){
		// 	$section="#"+this["id"];
		// 	console.log($section)
	
		
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
						console.log('active locked');
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
						console.log('active locked');
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
						console.log('active locked');
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
		$(document).on('click', 'a[href^="#"]', function (event) {
			event.preventDefault();
			// console.log($.attr(this, 'href'))
			if ($.attr(this, 'href')=="#footer")
				var my_offset = -60;
			else 
				var my_offset = 146;
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - my_offset
			}, 400);
		});
			// .each(function() {
			// 	var	$this = $(this),
			// 		id = $this.attr('href'),
			// 		$section = $(id);
			// 		// console.log(id);
			// 		// console.log($section);
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
