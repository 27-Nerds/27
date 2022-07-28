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







// Rabbits Physix

function Shape(x, y, world) {
	this.setWorld(world);

	this.setRealSize(47, 66);
	this.setRealPosition(x, y);
	this.createElement();
	this.createPhysicsBody();
}

Shape.prototype.createElement = function () {
	this.element = document.createElement("div");
	this.element.style.width = "" + this.getRealWidth() + "px";
	this.element.style.height = "" + this.getRealHeight() + "px";
	this.element.style.position = "absolute";
	this.element.style.left = "0px";
	this.element.style.top = "0px";
	this.element.style["transform-origin"] = "center";
	this.element.style["background-size"] = "cover";
	this.element.style.backgroundImage =
		"url('https://raw.githubusercontent.com/27-Nerds/27/main/assets/images/icons/rabbit.svg')";
	// document.body.appendChild(this.element);
	document.querySelector('.rabbits-area').appendChild(this.element);

}

Shape.prototype.setPosition = function (x, y) {
	this.x = x;
	this.y = y;
};

Shape.prototype.setRealPosition = function (x, y) {
	this.x = x * this.world.zoom;
	this.y = y * this.world.zoom;
}

Shape.prototype.setSize = function (width, height) {
	this.width = width;
	this.height = height;
};

Shape.prototype.setRealSize = function (width, height) {
	this.width = width * this.world.zoom;
	this.height = height * this.world.zoom;

	// if (this.world.aspectRatio < 1) {
	//   this.width = this.width * this.world.aspectRatio;
	//   // this.height = this.height * this.world.aspectRatio;

	// } else {
	//   this.width = this.width / this.world.aspectRatio;
	//   // this.height = this.height / this.world.aspectRatio;
	// }
};

Shape.prototype.setWorld = function (world) {
	this.world = world;
}

Shape.prototype.getRealX = function () {
	return (this.body.position.x / this.world.zoom);

	// return (this.body.position.x / (100 / this.world.boundsX));
	// return Math.round(this.body.bounds.min.x / (100 / this.world.boundsX));
}

Shape.prototype.getRealY = function () {
	return (this.body.position.y / this.world.zoom);

	// return Math.round(this.body.bounds.min.y / (100 / this.world.boundsY));
}

Shape.prototype.getRealWidth = function () {
	let r = (this.width / this.world.zoom);
	// if (this.world.aspectRatio < 1) {
	//   r = r / this.world.aspectRatio;
	// } else {
	//   r = r * this.world.aspectRatio;
	// }
	return r;
}

Shape.prototype.getRealHeight = function () {
	let r = (this.height / this.world.zoom);

	return r;
}

Shape.prototype.animate = function () {
	// this.element.style.left =  "" + this.getRealX() + "px";
	// this.element.style.top =  "" + this.getRealY() + "px";

	this.element.style.transform = "translate( " +
		this.getRealX() +
		"px, " +
		this.getRealY() +
		"px )";
	this.element.style.transform += "rotate( " + this.body.angle + "rad )";
}

Shape.prototype.createPhysicsBody = function () {
	this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height);
}

Shape.prototype.getPhysicsBody = function () {
	return this.body
}



function World(matterWorld, worldBoundsX, worldBoundsY) {
	this.matterWorld = matterWorld;
	this.matterWorld.gravity.scale = 0.0001;
	this.innerSizeX = 100;
	this.innerSizeY = 100;
	this.shapes = [];

	this.composite = Matter.Composite;
	this.setBounds(worldBoundsX, worldBoundsY);
	this.addFlor();
}

World.prototype.setBounds = function (x, y) {
	this.boundsX = x;
	this.boundsY = y;
	this.aspectRatio = this.boundsX / this.boundsY;
	if (this.aspectRatio > 1) { // X > Y
		this.innerSizeX *= this.aspectRatio;
		this.zoom = this.innerSizeX / this.boundsX;

	} else {
		this.innerSizeY *= this.aspectRatio;
		this.zoom = this.innerSizeY / this.boundsY;
	}
};

World.prototype.addFlor = function () {

	// Viewport boundaries

	var ground = Matter.Bodies.rectangle(50, this.innerSizeY - 1.5, 200, 1, {
		isStatic: true,
		friction: 1
	});
	var leftWall = Matter.Bodies.rectangle(-1, 50, 1 * this.zoom, 200, {
		isStatic: true,
		friction: 1
	});
	var rightWall = Matter.Bodies.rectangle(this.innerSizeX - 1, 50, 1 * this.zoom, 200, {
		isStatic: true,
		friction: 1
	});

	this.composite.add(this.matterWorld, [ground, leftWall, rightWall]);

	// Viewport boundaries END


	// Viewport blocking bodies

	viewportDom = document.querySelector('.rabbits-area');

	formDom = document.querySelector('.form-contact-us');

	let formWidth = formDom.offsetWidth / viewportDom.offsetWidth * 100 + (100 * this.zoom);
	let formHeight = formDom.offsetHeight / viewportDom.offsetHeight * (100 + (100 * this.zoom));
	let formLeft = 50;
	let formTop = (formDom.offsetTop + formDom.offsetHeight / 2) / viewportDom.offsetHeight * (100 + (100 * this.zoom));

	var form = Matter.Bodies.rectangle(formLeft, formTop, formWidth, formHeight, {
		isStatic: true,
		friction: 1
	});

	this.composite.add(this.matterWorld, [form]);


	socialLinksDom = document.querySelector('.list-social');

	let socialLinksWidth = socialLinksDom.offsetWidth / viewportDom.offsetWidth * 100 + (100 * this.zoom);
	let socialLinksHeight = socialLinksDom.offsetHeight / viewportDom.offsetHeight * 100;
	let socialLinksLeft = 5;
	let socialLinksTop = (socialLinksDom.offsetTop + socialLinksDom.offsetHeight / 2) / viewportDom.offsetHeight * 100;

	console.log('socialLinksDom.offsetTop: ', socialLinksDom.offsetTop);

	var socialLinks = Matter.Bodies.rectangle(socialLinksLeft, socialLinksTop, socialLinksWidth, socialLinksHeight, {
		isStatic: true,
		friction: 1
	});

	this.composite.add(this.matterWorld, [socialLinks]);

	// add all of the bodies to the world
	// this.composite.add(this.matterWorld, [footerLogo]);

	// Viewport blocking bodies END
}

World.prototype.addBunny = function (x, y) {
	shape = new Shape(x, y, this);
	this.shapes.push(shape);
	this.composite.add(this.matterWorld, shape.getPhysicsBody());
}

World.prototype.animate = function () {
	for (var i = 0, l = this.shapes.length; i < l; i++) {
		this.shapes[i].animate();
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

setTimeout(function () {
	// module aliases
	var Engine = Matter.Engine,
		Render = Matter.Render,
		Runner = Matter.Runner,
		Composite = Matter.Composite;

	// create an engine
	var engine = Engine.create();



	var render = Render.create({
		element: document.getElementById("debug"),
		engine: engine,
		options: {
			width: 100,
			height: 100,
			background: '#fafafa',
			wireframeBackground: '#222',
			// hasBounds: false,
			hasBounds: true,
			enabled: true,
			wireframes: true,
			showSleeping: true,
			showDebug: false,
			showBroadphase: false,
			showBounds: false,
			showVelocity: true,
			showCollisions: false,
			showAxes: false,
			showPositions: false,
			showAngleIndicator: false,
			showIds: false,
			showShadows: false
		}
	});




	// run the renderer
	Render.run(render);
	// create runner
	var runner = Runner.create();

	// run the engine
	Runner.run(runner, engine);

	let shapes = [];
	let x = 400;
	let y = 0;


	let bWidth = document.querySelector('.rabbits-area').offsetWidth;
	let bHeight = document.querySelector('.rabbits-area').offsetHeight;
	let world = new World(engine.world, bWidth, bHeight);
	for (let i = 0; i < 30; i++) {
		setTimeout(function () {
			x = getRandomInt(0, bWidth);
			world.addBunny(x, y);
		}, 100 * i);
	}
	document.querySelector('.rabbits-area').addEventListener('click', event => {
		console.log(event);
		world.addBunny(event.x - 20, event.y - 30);
	});

	window.requestAnimationFrame(update);

	function update() {
		world.animate();
		window.requestAnimationFrame(update);
	}

}, 1000);

// Rabbits Physix END