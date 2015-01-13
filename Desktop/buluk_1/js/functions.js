$(function() {
	smoothScroll();
	scrollToTop();
	galleryBelt();
	takeAlbum();
	openExp();
	showEmail();
});


	//Camera slider


	jQuery(function(){
			
			jQuery('#camera_wrap_1').camera({
				height: '37%',
				pagination: false,
				thumbnails: false,
				navigation: true,
				hover: false,
				loader: 'bar',
				playPause: false
			});

		});




	//Smooth-Scroll 

	function smoothScroll() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') 
	    	== this.pathname.replace(/^\//,'') 
	    	&& location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	     
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
	    x}
	  });
	}

	//Scroll-Top 


	function scrollToTop() {
		$('.scroll-up').click(function() {
			$('body, hatml').animate({
				scrollTop: '0px'
			},500);
		});

		$(window).scroll(function(){
			if( $(this).scrollTop() < 70){
				$('.scroll-up').fadeOut(300);
			}else{
				$('.scroll-up').fadeIn(300);
			}
		});
	}
			


	//Experiences

	function clickExperience(){
		$('.exp-unit').click(function() {
			$('.info-container').slideDown(100);
		});

		$('.place-close').click(function() {
			$('.info-container').hide();
		});
	}


	function openExp() {

		clickExperience();

		$('.exp-unit').click(function() {
			var $this = $(this),
			placeTitle = $this.find('strong').text(),
			placeInfo = $this.data('content'),
			placeHTML = 'html/experiences/' + placeInfo;


			$('.place-event-title').text(placeTitle);
			$('.place-load').load(placeHTML);

		});
	}


	//Gallery Slide 

	function galleryBelt() {
		$('.thumb-unit').click(function() {
			$('.gallery-belt').css('left','-100%');
			$('.gallery-container').show();
		});


		$('.gallery-return').click(function() {
			$('.gallery-belt').css('left','0%');
			$('.gallery-container').hide(300);
		});
	}


	function takeAlbum() {
		$('.thumb-unit').click(function() {
			var $this = $(this),
				newTitle =  $this.find('strong').text(),
				newFolder = $this.data('content'),
				newHTML = 'gallery/'+ newFolder;


				$('.gallery-load').load(newHTML);
				$('.gallery-event-title').text(newTitle);


		});
	}



	//Email section


	function showEmail() {
		$('.color-mail').click(function() {
			$('.contact-email form').slideDown();
			$('#mail-active-color').css('background-color','rgba(241, 197, 20, 1)');
			$('#mail-active-color span').css('color','rgba(255,255,255,1)');								
		});
	}


	function hideEmail() {
		var emailClick = $('.color-mail').click();
		
		if (true) {};
	}




