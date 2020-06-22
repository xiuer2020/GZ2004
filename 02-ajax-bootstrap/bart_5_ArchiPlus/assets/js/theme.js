/************************************************
Template Name: Archiplus Boostrap Template
Author: BoostrapMart
Develop By: BoostrapMart
Developer URL: http://info@website.com
************************************************/

jQuery( document ).ready( function( $ ) {
	'use strict';

	/**
	 *	Table of Content
	 *	1. Contact Us Map
	 *	2. About Us Carousel
	 *	3. Blog Carousel
	 *	4. Service Page
	 *	5. Project Page
	 *	6. Faq Page
	 *	7. Shortcodes Page
	 *	8. Homepage
	 *	9. Homepage Two
	 *	10. Mobile Menu Style
	 *
	 *	Fire all function js
	 */

	/**
	 * 1. Contact Us Map
	 */
	function archiplus_contact_us_map() {
		if ( !( $( 'body' ).hasClass( 'page-contact-us' ) ) ) return false;

		var map = new google.maps.Map( document.getElementById( 'contact_map' ), {
			center: { lat: 52.094046, lng: 1.132338 },
			zoom: 14,
			draggable: true,
			scrollwheel: false
		} );

		var marker = new google.maps.Marker( {
			position: { lat: 52.094046, lng: 1.132338 },
			icon: './assets/img/marker.png',
			map: map
		} );
	}

	/**
	 * 2. About Us Carousel
	 */
	function archiplus_about_us_carousel() {
		if ( !( $( 'body' ).hasClass( 'page-about-us' ) ) ) return false;

		$( '.archiplus-featured-carousel' ).owlCarousel( {
			loop: true,
			margin: 10,
			nav: true,
			items: 1,
			navText: [
				'<img src="./assets/img/arrow-left.png">',
				'<img src="./assets/img/arrow-right.png">'
			]
		} );

		$( '.archiplus-about-team-carousel' ).owlCarousel( {
			loop: true,
			margin: 30,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 3
				},
				1200: {
					items: 4,
					center: true
				},
				1440: {
					items: 4,
					stagePadding: 190,
				},
			}
		} );

		$( '.archiplus-testimonial-carousel' ).owlCarousel( {
			loop: true,
			nav: false,
			dots: true,
			items: 1
		} );
	}

	/**
	 * 3. Blog Carousel
	 */
	function archiplus_blog_carousel() {
		if ( !( $( 'body' ).hasClass( 'blog' ) ) ) return false;

		$( '.recent-post-carousel' ).owlCarousel( {
			loop: true,
			nav: true,
			dots: true,
			items: 1,
			navText: [
				'<i class="icon-arrow-left"></i>',
				'<i class="icon-arrow-right"></i>'
			]
		} );

		$( '.featured-video a' ).on( 'click', function( e ) {
			e.preventDefault();
			$( '.single-blog .video-player' ).fadeIn( 300 );
			$( 'body' ).css( 'overflow', 'hidden' );
			$( 'iframe' ).parent().fitVids();
		} );

		$( '.video-player .container > a' ).on( 'click', function( e ) {
			e.preventDefault();
			$( '.single-blog .video-player' ).fadeOut( 300 );
			$( 'body' ).css( 'overflow', 'visible' );
		} );

		$( document ).keyup( function( e ) {
			if ( e.keyCode == 27 ) {
				$( '.single-blog .video-player' ).fadeOut( 300 );
				$( 'body' ).css( 'overflow', 'visible' );
			}
		} );
	}

	/**
	 * 4. Service Page
	 */
	function archiplus_service_page() {
		if ( !( $( 'body' ).hasClass( 'page-services' ) ) ) return false;

		$( '.archiplus-featured-carousel' ).owlCarousel( {
			loop: true,
			margin: 10,
			nav: true,
			items: 1,
			navText: [
				'<img src="./assets/img/arrow-left.png">',
				'<img src="./assets/img/arrow-right.png">'
			]
		} );

		$( '.page-services .service-wrapper' ).isotope( {
			itemSelector: '.type-service',
			masonry: {
				columnWidth: 390
			}
		} );
	}

	/**
	 * 5. Project Page
	 */
	function archiplus_project_page() {
		if ( !( $( 'body' ).hasClass( 'page-projects' ) ) ) return false;

		$( '.archiplus-featured-carousel' ).owlCarousel( {
			loop: true,
			margin: 10,
			nav: true,
			items: 1,
			navText: [
				'<img src="./assets/img/arrow-left.png">',
				'<img src="./assets/img/arrow-right.png">'
			]
		} );

		$( '.archiplus-testimonial-carousel' ).owlCarousel( {
			loop: true,
			nav: false,
			dots: true,
			items: 1
		} );
	}

	/**
	 * 6. Faq Page
	 */
	function archiplus_faq_page() {
		if ( !( $( 'body' ).hasClass( 'page-faq' ) ) ) return false;

		$( '.archiplus-tab-nav a' ).each( function() {
			$( this ).on( 'click', function( e ) {
				e.preventDefault();

				var link_href = $( this ).data( 'click' ),
					i,
					tabcontent,
					tablinks;

				// Get all elements with class="tabcontent" and hide them
				tabcontent = $( '.archiplus-tab-panel' );
				for ( i = 0; i < tabcontent.length; i++ ) {
					tabcontent[i].style.display = 'none';
				}

				// Get all elements with class="tablinks" and remove the class "active"
				tablinks = $( this );
				for ( i = 0; i < tablinks.length; i++ ) {
					tablinks[i].className = tablinks[i].className.replace( ' active', '' );
				}

				// Show the current tab, and add an 'active' class to the button that opened the tab
				document.getElementById( link_href ).style.display = 'block';
				$( this ).addClass( ' active' );
			} );
		} );
	}

	/**
	 * 7. Shortcodes Page
	 */
	function archiplus_shortcode_page() {
		if ( !( $( 'body' ).hasClass( 'page-shortcodes' ) ) ) return false;

		/* Accordion */
		$( '.accordion' ).accordion( {
			heightStyle: 'content'
		} );

		/* Toggle */
		$( '.toggle h4' ).each( function() {
			$( this ).on( 'click', function( e ) {
				$( this ).next( 'div' ).slideUp( 300 );
				if ( $( this ).next( 'div' ).is( ':hidden' ) ) {
					$( this ).next( 'div' ).slideDown( 300 );
				}
				if ( $( this ).parent().hasClass( 'active' ) ) {
					$( this ).parent().removeClass( 'active' );
				} else {
					$( this ).parent().addClass( 'active' );
				}
			} );
		} );

		/* Testimonial Slider */
		$( '.testimonial-wrapper' ).owlCarousel( {
			loop: true,
			nav: false,
			dots: true,
			items: 1
		} );

		$( '.testimonial-wrapper-two' ).owlCarousel( {
			loop: true,
			nav: true,
			navText: [
				'<img src="./assets/img/arrow-grey-left.png">',
				'<img src="./assets/img/arrow-grey-right.png">',
			],
			thumbs: true,
			thumbsPrerendered: true,
			items: 1
		} );

		/* Slider */
		$( '.slider-wrapper' ).owlCarousel( {
			loop: true,
			nav: true,
			navText: [
				'<i class="fa fa-chevron-left"></i>',
				'<i class="fa fa-chevron-right"></i>',
			],
			dots: true,
			thumbs: true,
			thumbsPrerendered: true,
			items: 1
		} );
	}

	/**
	 * 8. Homepage
	 */
	function archiplus_homepage() {
		if ( !( $( 'body' ).hasClass( 'homepage' ) ) ) return false;

		$( '.archiplus-testimonial-carousel' ).owlCarousel( {
			loop: true,
			nav: false,
			dots: true,
			items: 1
		} );

		$( '.archiplus-service-carousel' ).owlCarousel( {
			loop: true,
			nav: false,
			dots: true,
			margin: 0,
			autoWidth: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 4,
				},
				1000: {
					items: 4,
				}
			}
		} );

		$( '.carousel-project' ).owlCarousel( {
			loop: true,
			nav: false,
			dots: false,
			margin: 30,
			items: 2,
			responsive: {
				0: {
					items: 1,
					autoWidth: false,
				},
				600: {
					items: 2,
					autoWidth: true,
				},
				1000: {
					items: 2,
					autoWidth: true,
				}
			}
		} );

		$( '.archiplus-slider-content' ).owlCarousel( {
			loop: true,
			nav: true,
			dots: false,
			margin: 0,
			items: 1,
			navText: [
				'<i class="icon-arrow-left"></i>',
				'<i class="icon-arrow-right"></i>'
			]
		} );
	}

	/**
	 * 9. Homepage Two
	 */
	function archiplus_homepage_two() {
		if ( !( $( 'body' ).hasClass( 'home-two' ) ) ) return false;

		$( '.archiplus-testimonial2-carousel' ).owlCarousel( {
			loop: true,
			nav: true,
			navText: [
				'<i class="icon-arrow-left"></i>',
				'<i class="icon-arrow-right"></i>'
			],
			dots: false,
			items: 2,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2,
				}
			}
		} );
		$( '.home-slider' ).owlCarousel( {
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			animateOut: 'slideOutUp',
			animateIn: 'slideInUp'
		} );

		$( '.counter-value' ).each( function() {
			$( this ).counterUp( {
				delay: 10,
				time: 1000
			} );
		} );
	}

	/**
	 * 10. Mobile Menu Style
	 */
	function archiplus_mobile_menu() {
		if ( $( window ).width() > 768 ) return false;

		$( '.open-sub-menu' ).each( function() {
			$( this ).on( 'click', function( e ) {
				e.preventDefault();
				$( this ).next().slideUp( 300 );
				$( this ).text( '+' );
				if ( $( this ).next().is( ':hidden' ) === true ) {
					$( this ).next().slideDown( 300 );
					$( this ).text( '-' );
				}
			} );
		} );

		$( '.mean-link-open' ).each( function() {
			$( this ).on( 'click', function( e ) {
				e.preventDefault();
				$( this ).next().slideUp( 300 );
				$( this ).parent().addClass( 'close-menu' );
				$( this ).parent().removeClass( 'open-menu' );
				if ( $( this ).next().is( ':hidden' ) === true ) {
					$( this ).next().slideDown( 300 );
					$( this ).parent().addClass( 'open-menu' );
					$( this ).parent().removeClass( 'close-menu' );
				}
			} );
		} );
	}

	/**
	 * Fire all function js
	 */
	function archiplus_fire_function_js() {
		archiplus_contact_us_map();
		archiplus_about_us_carousel();
		archiplus_blog_carousel();
		archiplus_service_page();
		archiplus_project_page();
		archiplus_faq_page();
		archiplus_shortcode_page();
		archiplus_homepage();
		archiplus_homepage_two();
		archiplus_mobile_menu();
	}

	archiplus_fire_function_js();
} );