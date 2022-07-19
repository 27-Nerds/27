// Draggable

let draggableElems = document.querySelectorAll('.draggable');
let draggies = []
for ( let i=0; i < draggableElems.length; i++ ) {
	let draggableElem = draggableElems[i];
	let draggie = new Draggabilly( draggableElem, {});
	draggies.push( draggie );
}

// Draggable END

// Zoom for scalable parallaxes

window.addEventListener('resize', function(event){
	// let draggableElems = document.querySelectorAll('.zoom-elements');
	// let draggies = []
	// for ( let i=0; i < draggableElems.length; i++ ) {
	// 	let draggableElem = draggableElems[i];
	// 	draggableElem.style.transform = 'scale(' + event.target.innerWidth / 1920 + ')';
	// }

	if (window.innerWidth < 1200 && window.innerWidth > 520) {
		lax.removeElements(".page-title");
		lax.addElements(".page-title", {
			scrollY: {
				translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
				scale: [[1, 'screenHeight'], [1, 5]]
			}
		});

		lax.removeElements(".esports-word-4");
		lax.addElements(".esports-word-4", {
			scrollY: {
				translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
				translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '40']],
				scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 2.7]],
			},
		});
	} else if (window.innerWidth >= 1200) {
		lax.removeElements(".page-title");
		lax.addElements(".page-title", {
			scrollY: {
				translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
				scale: [[1, 'screenHeight'], [1, 9]]
			}
		});

		lax.removeElements(".esports-word-4");
		lax.addElements(".esports-word-4", {
			scrollY: {
				translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
				translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '40']],
				scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 2.7]],
			},
		});
	} else if (window.innerWidth <= 520) {
		lax.removeElements(".page-title");
		lax.addElements(".page-title", {
			scrollY: {
				translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
				scale: [[1, 'screenHeight'], [1, 2.3]]
			}
		});

		lax.removeElements(".esports-word-4");
	}

});

// Zoom for scalable parallaxes END

// Above the clouds animations

window.scrollTo(0, 0)
window.onload = function () {

	lax.init()

	lax.addDriver(
		"scrollY",
		function () {
			return document.documentElement.scrollTop;
		},
		{
			frameStep: 1,
			inertiaEnabled: true

		}
	);

	if (window.innerWidth < 1200 && window.innerWidth > 520) {
		lax.addElements(".page-title", {
			scrollY: {
				translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
				scale: [[1, 'screenHeight'], [1, 5]]
			}
		});
		lax.addElements(".esports-word-4", {
			scrollY: {
				translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
				translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '40']],
				scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 2.7]],
			},
		});
	} else if (window.innerWidth >= 1200) {
		lax.addElements(".page-title", {
			scrollY: {
				translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
				scale: [[1, 'screenHeight'], [1, 9]]
			}
		});
		lax.addElements(".esports-word-4", {
			scrollY: {
				translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
				translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '40']],
				scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 2.7]],
			},
		});
	} else if (window.innerWidth <= 520) {
		lax.addElements(".page-title", {
			scrollY: {
				translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
				scale: [[1, 'screenHeight'], [1, 2.3]]
			}
		});
	}

	// if ( window.innerWidth > 1199 ) {
	// 	lax.addElements(".page-title", {
	// 		scrollY: {
	// 			translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
	// 			scale: [[1, 'screenHeight'], [1, 9]],
	// 		}
	// 	});
	// } else {
	// 	lax.addElements(".page-title", {
	// 		scrollY: {
	// 			translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
	// 			scale: [[1, 'screenHeight'], [1, 5]],
	// 		}
	// 	});
	// }

	lax.addElements(".scroll-down", {
		scrollY: {
			opacity: [[0, "screenHeight/10"],[1, 0]]
		},
	});


	lax.addElements(".cloud-speed-1", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/2']],
		},
	});
	lax.addElements(".cloud-speed-2", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/4']],
		},
	});
	lax.addElements(".cloud-speed-3", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/6']],
		},
	});


	lax.addElements(".snake-speed-1", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/2']],
			translateX: [[0, 'screenHeight'], [5, '120']],
		},
	});
	lax.addElements(".snake-speed-2", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/3']],
			translateX: [[0, 'screenHeight'], [5, '-20']],
		},
	});
	lax.addElements(".snake-speed-3", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/5']],
			translateX: [[0, 'screenHeight'], [5, '-20']],
		},
	});

	lax.addElements(".coin-speed-1", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/2']],
			translateX: [[0, 'screenHeight'], [5, '120']],
		},
	});
	lax.addElements(".coin-speed-2", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/3']],
			translateX: [[0, 'screenHeight'], [5, '-20']],
		},
	});
	lax.addElements(".coin-speed-3", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/5']],
			translateX: [[0, 'screenHeight'], [5, '-20']],
		},
	});

	lax.addElements(".rabbit-speed-1", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/2']],
			translateX: [[0, 'screenHeight'], [5, '120']],
		},
	});
	lax.addElements(".rabbit-speed-2", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/3']],
			translateX: [[0, 'screenHeight'], [5, '-20']],
		},
	});
	lax.addElements(".rabbit-speed-3", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/5']],
			translateX: [[0, 'screenHeight'], [5, '-20']],
		},
	});


	lax.addElements(".esports-word-1", {
		scrollY: {
			translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
			translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '-550']],
			scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 1.5]],
		},
	});
	lax.addElements(".esports-word-2", {
		scrollY: {
			translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.6']],
			translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '-20']],
			scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 2]],
		},
	});
	lax.addElements(".esports-word-3", {
		scrollY: {
			translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.63']],
			translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '500']],
			scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 1.8]],
		},
	});
	// lax.addElements(".esports-word-4", {
	// 	scrollY: {
	// 		translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
	// 		translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '40']],
	// 		scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 2.7]],
	// 	},
	// });


	lax.addElements(".services-list-item-border", {
		scrollY: {
			translateX: [['elInY', 'elOutY'], [0, '100']],
		},
	});

	// lax.addElements("h2", {
	// 	scrollY: {
	// 		translateX: [['elInY', 'elOutY'], [0, -10], {inertia: 5}],
	// 	},
	// });

	lax.addElements(".board-list-item-name", {
		scrollY: {
			translateY: [['elInY', 'elOutY'], [0, -120]],
		},
	});
	lax.addElements(".board-list-item-position", {
		scrollY: {
			translateY: [['elInY', 'elOutY'], [0, -120]],
		},
	});

}

// Above the clouds animations END


// Board carousel

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide('.splide', {
		// type   : 'loop',
		perPage: 3,
		perMove: 1,
		arrows: true,
		pagination: false,
		gap: '48px',
		fixedWidth: '428px',
		breakpoints: {
			1619: {
				fixedWidth: '324px'

			},
			1024: {
				fixedWidth: '324px',
				perPage: 2
			},
			520: {
				fixedWidth: '251px',
				perPage: 1
			},
		}
	}).mount();
});

// Board carousel END


// Header scroll

window.onscroll = function() {
	stickyHeader();
};

let header = document.querySelector(".header");
let stickyOffsetTop = window.innerHeight * 2;

function stickyHeader() {
	if (window.pageYOffset > stickyOffsetTop) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

// Header scroll END


// Mobile Nav

let mainNav = document.querySelector('.header');
document.querySelector('.toggle-mobile-nav').addEventListener('click', function(){
	mainNav.classList.toggle('show-mobile-nav');
});

// Mobile Nav END