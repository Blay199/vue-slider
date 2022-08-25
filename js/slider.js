// console.log('slider')

const slides = [
	'https://live.staticflickr.com/65535/50521479107_5255f145f6_k.jpg',
	'https://live.staticflickr.com/65535/50521478982_d805e93175_k.jpg',
	'https://live.staticflickr.com/65535/50521301516_5eb4dd60fa_o.jpg',
	'https://live.staticflickr.com/65535/50521402886_019851263d_k.jpg',
	'https://live.staticflickr.com/65535/50520577188_6d3d326df6_k.jpg',
]

const app = new Vue({

	el: '#root',
	data: {
		slides,
		currentIndex: 0,
	},

	methods: {
		resetTimer() {
		  clearInterval(interval);
		},
		restartTimer() {
		  interval = setInterval(this.nextSlide, 3000);
		},
		nextSlide() {
		  if (this.currentIndex < slides.length - 1) {
			this.currentIndex++;
		  } else {
			this.currentIndex = 0;
		  }
		  this.resetTimer();
		  this.restartTimer();
		},
		prevSlide() {
		  if (this.currentIndex > 0) {
			this.currentIndex--;
		  } else {
			this.currentIndex = slides.length - 1;
		  }
		  this.resetTimer();
		  this.restartTimer();
		},
	  },
	  created() {
		interval = setInterval(this.nextSlide, 3000);
	  },
});