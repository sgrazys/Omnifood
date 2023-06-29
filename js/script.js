///////////////////////////////////////////////////////////
// Set current year
const yearDOM = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearDOM.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const headerDOM = document.querySelector('.header');
const btnNavDOM = document.querySelector('.btn-mobile-nav');

btnNavDOM.addEventListener('click', function () {
	headerDOM.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation (how to do it with JS)

const allLinksDOM = document.querySelectorAll('a:link');

allLinksDOM.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		const href = link.getAttribute('href');

		// Scroll back to top
		if (href === '#')
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});

		// Scroll to section
		if (href !== '#' && href.startsWith('#')) {
			const elementDOM = document.querySelector(href);
			elementDOM.scrollIntoView({ behavior: 'smooth' });
		}

		// Close mobile nav afte the link was clicked
		if (link.classList.contains('main-nav-link')) {
			headerDOM.classList.toggle('nav-open');
		}
	});
});

///////////////////////////////////////////////////////////
// Sticky NAV

const sectionHeroDOM = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);
		if (!ent.isIntersecting) {
			document.body.classList.add('sticky');
		}
		if (ent.isIntersecting) {
			document.body.classList.remove('sticky');
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: '-80px',
	}
);
obs.observe(sectionHeroDOM);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	const flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	document.body.appendChild(flex);
	const isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
