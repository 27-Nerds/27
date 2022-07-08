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
	console.log(event.target.innerWidth);
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
		{ frameStep: 1, inertiaEnabled: false }
	);

	lax.addElements(".scroll-down", {
		scrollY: {
			opacity: [[0, "screenHeight/10"],[1, 0]]
		},
	});


	lax.addElements(".page-title", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
			scale: [[1, 'screenHeight'], [1, 9]],
		}
	});


	lax.addElements(".cloud-speed-1", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/2']],
		},
	});
	lax.addElements(".cloud-speed-2", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/3']],
		},
	});
	lax.addElements(".cloud-speed-3", {
		scrollY: {
			translateY: [[0, 'screenHeight'], [5, '-screenHeight/5']],
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
	lax.addElements(".esports-word-4", {
		scrollY: {
			translateY: [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
			translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '40']],
			scale: [['screenHeight*2', 'screenHeight*2.75'], [1, 2.7]],
		},
	});

}

// Above the clouds animations END



// $(document).ready(function () {

	// Links

	// $('a').on("click", function (e) {
	// 	if ($(this).attr('href') == '') {
	// 		e.preventDefault();
	// 	} else {
	// 		return true;
	// 	}
	// });

	// Links END

// });
