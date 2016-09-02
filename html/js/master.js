/* VENDOR SCRIPTS */ 
$(document).ready(function() {

	window.sr = ScrollReveal();

	$('.grid').imagesLoaded(function() {

	    $('.grid').masonry({
	      itemSelector: '.grid-item',
	      columnWidth: '.grid-sizer',
	      percentPosition: true,
	      gutter: 15,
	    });

	    sr.reveal('.grid-item', {
	      duration: 1000,
	      scale: 1,
	      distance: '100px',
	      mobile: false,
	      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
	    }, 300);

    });

	sr.reveal('.reveal', {
	    duration: 500,
	    distance: '100px',
	    scale: 1,
	    mobile: false,
	    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });

    sr.reveal('.sequence', {
	    duration: 1000,
	    distance: '100px',
	    scale: 1,
	    mobile: false,
	    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    }, 300);

});

/* MENU */
(function() {

	var Menu = (function() {
		var burger = document.querySelector('.burger');
		var menu = document.querySelector('.menu');
		var menuList = document.querySelector('.menu__list');
		var menuItemsNav = document.querySelectorAll('.menu__item--nav');
		var logo = document.querySelector('.logo');

		var active = false;

		var toggleMenu = function() {
			if (!active) {
				menu.classList.add('menu--active');
				menuList.classList.add('menu__list--active');
				burger.classList.add('burger--close');
				logo.classList.add('logo--active');
				for (var i = 0, ii = menuItemsNav.length; i < ii; i++) {
					menuItemsNav[i].classList.add('menu__item--nav--active');
				}

				active = true;
			} else {
				menu.classList.remove('menu--active');
        		menuList.classList.remove('menu__list--active');
				burger.classList.remove('burger--close');
				logo.classList.remove('logo--active');
				for (var i = 0, ii = menuItemsNav.length; i < ii; i++) {
          			menuItemsNav[i].classList.remove('menu__item--nav--active');
        		}

				active = false;
			}
		};

		var bindActions = function() {
			burger.addEventListener('click', toggleMenu, false);
			menu.addEventListener('click', toggleMenu, false);
			for (var i = 0, ii = menuItemsNav.length; i < ii; i++) {
					menuItemsNav[i].addEventListener('click', toggleMenu, false);
				}
		};

		var init = function() {
			bindActions();
		};

		return {
			init: init
		};

	}());

	Menu.init();

} ());

/* HIDE HERO HACK */
(function() {

	var $hero = $('.hero__fixed'),
		hero_height = $('.hero__fixed').height();

	function hideHero() {
		var scroll_top = $(window).scrollTop();

		if ( scroll_top >= hero_height + 80) {
			$hero.addClass('is--hidden');
		} else {
			$hero.removeClass('is--hidden');
		}

	}

	$(window).scroll(hideHero);

}());

/* DAYS CALLOUT CYCLE */ 
(function() {
	
	var date = new Date();
	var day = new Array(7);

	day[0] = "Resting";
	day[1] = "wake up!";
	day[2] = "hm Tacos";
	day[3] = "Humpday";
	day[4] = "Hurrah!";
	day[5] = "TGIF!";
	day[6] = "Chillin";

	var quote = day[date.getDay()];
	document.getElementById("hero__intro").innerHTML = quote;

}());