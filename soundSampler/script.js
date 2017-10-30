init();

		var createAudio = function(){
			window.newAudioA = new Audio();
			newAudioA.src = 'sounds/drums.wav';

			window.newAudioB = new Audio();
			newAudioB.src = 'sounds/guitar.wav';

			// window.newAudioC = new Audio();
			// newAudioC.src = 'c.wav';
		}();
	
	
	function init(){
		var playButton = document.getElementById('drums');
		playButton.addEventListener('click', playAudioA, false);

		var playButton = document.getElementById('guitar');
		playButton.addEventListener('click', playAudioB, false);

		// var playButton = document.getElementById('box3');
		// playButton.addEventListener('click', playAudioC, false);
	}

	
	function playAudioA() {
		newAudioA.play()
	}
	function playAudioB() {
		newAudioB.play()
	}
	// function playAudioC() {
	// 	newAudioC.play()
	// }


	

