 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {

	"use strict";

	$(window).stellar({
		responsive: false,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});

	// Scrollax
	$.Scrollax();

	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.home-slider').owlCarousel({
			center: true,
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    autoplayHoverPause: false,
	    items: 3,
	    dots: true,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:2,
	        nav:false
	      },
	      1000:{
	        items:3,
	        nav:false
	      }
	    }
	   });
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			loop: true,
			items:1,
			margin: 15,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 2
				}
			}
		});
	};
	carousel();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
		verticalFit: true
		},
		zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

//    $('#appointment_date').datepicker({
// 	  'format': 'm/d/yyyy',
// 	  'autoclose': true
// 	});
// 	$('#appointment_time').timepicker();

	var mainNavButton = function() {
		
		$(".main-nav-button").click(function(e) {
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			}
			
			$('html, body').animate({
				scrollTop: $("#"+e.target.parentElement.href.split("#")[1]).offset().top
			}, 10);
		});
	};
	mainNavButton();

	var requstQuoteButton = function() {
		$(".requst_quote_button").click(function(e) {
			Swal.mixin({
				showCancelButton: true,
				progressSteps: ['1', '2', '3']
				}).queue([
				{
					title: 'Name',
					text: 'What is your name ?',
					input: 'text',
					confirmButtonText: 'Next &rarr;',
				},
				{
					title: 'Email',
					text: 'What is your email ?',
					input: 'text',
					confirmButtonText: 'Next &rarr;',
				},
				{
					title: 'Message',
					text: 'Anything to say ?',
					input: 'textarea',
					confirmButtonText: 'Send message',
				}
				]).then((data) => {

					Swal.fire({
						title: 'Your Details',
						html: `
							<pre><code>Name: ${data.value[0]}</code></pre>
							<pre><code>Email: ${data.value[1]}</code></pre>
							<pre><code>Message: ${data.value[2]}</code></pre>
						`,
						confirmButtonText: 'Send',
						showCancelButton: true,
						showLoaderOnConfirm: true,
						allowOutsideClick: false,
						preConfirm: function() {
							return new Promise(function(resolve, reject) {
								var myHeaders = new Headers();
								myHeaders.append("Content-Type", "application/json");
								myHeaders.append("Access-Control-Allow-Origin","*");
								
								var raw = JSON.stringify({"value1":data.value[0],"value2":data.value[1],"value3":data.value[2]});
								
								var requestOptions = {
								method: 'POST',
								headers: myHeaders,
								body: raw,
								redirect: 'follow'
								};
								
								fetch('https://cors-anywhere.herokuapp.com/'+"https://maker.ifttt.com/trigger/san_contact/with/key/pleVTXq4xOi2yf98yaOY_QkFv01X9JH_2gmol3W53_9", requestOptions)
								.then(response => response.text())
								.then(result => {
									Swal.fire(
										"Success",
										'Message sent !',
										'success'
									)
								})
								.catch(error => {
									Swal.fire(
										"Failed",
										"Failed to send message !",
										'error'
									)
								});
						
							});
						}
					})
				})
		})
	};
	requstQuoteButton();

	var contactUsButton = function() {
		$("#contact_us_button").click(function(e) {
			e.preventDefault();

			var name = $("#contact_us_name").val()
			var email = $("#contact_us_email").val()
			var message = $("#contact_us_message").val()

			if(email == '') {
				Swal.fire(
					"Error",
					"Enter a valid email !",
					'error'
				)
			} else {
				Swal.fire({
				title: 'Your Details',
				html: `
					<pre><code>Name: ${name}</code></pre>
					<pre><code>Email: ${email}</code></pre>
					<pre><code>Message: ${message}</code></pre>
				`,
				confirmButtonText: 'Send',
				showCancelButton: true,
				showLoaderOnConfirm: true,
				allowOutsideClick: false,
				preConfirm: function() {
					return new Promise(function(resolve, reject) {
						var myHeaders = new Headers();
						myHeaders.append("Content-Type", "application/json");
						myHeaders.append("Access-Control-Allow-Origin","*");
						
						var raw = JSON.stringify({"value1":name,"value2":email,"value3":message});
						
						var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: raw,
						redirect: 'follow'
						};
						
						fetch('https://cors-anywhere.herokuapp.com/'+"https://maker.ifttt.com/trigger/san_contact/with/key/pleVTXq4xOi2yf98yaOY_QkFv01X9JH_2gmol3W53_9", requestOptions)
						.then(response => response.text())
						.then(result => {
							Swal.fire(
								"Success",
								'Message sent !',
								'success'
							)
						})
						.catch(error => {
							Swal.fire(
								"Failed",
								"Failed to send message !",
								'error'
							)
						});
				
					});
				}
			})
				
			}
		})
	};
	contactUsButton();

});

