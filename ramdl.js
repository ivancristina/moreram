function log() {
    $('#navhome').removeClass('active');
	$('#navlog').addClass('active');
    $('#log').collapse('show');
	$('#main').collapse('hide');
}

function home() {
	$('#navhome').addClass('active');
    $('#navlog').removeClass('active');
	$('#log').collapse('hide');
	$('#main').collapse('show');
}

function fr(){
	window.chosen = 4;
	dl();
}

function et(){
	window.chosen = 8;
	dl();
}

function sx(){
	window.chosen = 16;
	var r = confirm("Adding 16Gb on a smartphone is dangerous. If you are using one click cancel, othwerwise continue.");
	if (r == true) {
		dl();
	} else {
		alert("You pressed Cancel. Aborting!");
	}
}

function dl() {
    $('#amounts').collapse('hide');
    $('#dlbox').collapse('show');
	bar();
	window.document.title = "RAM upgraded";
}

(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

function bar(){

	var bar = new ProgressBar.Circle(ramdl, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#333', width: 1 },
	  to: { color: '#aaa', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
		  window.document.title = "Installation: " + value + "%";
	    }

	  }
	});
	bar.text.style.fontSize = '2rem';
	bar.animate(0.1);
	console.log (`- Initializing memory platform...`);

	// Detect RAM
	setTimeout(function () {
		bar.animate(0.15);
		document.getElementById("status").innerHTML = "	Gathering device informations";
		console.log (`- Gathering device informations`);
		console.log ("- Running on "+navigator.userAgent);
	}, 3000);
	
	// Detect RAM
	setTimeout(function () {
	    bar.animate(0.25);
		const memory = navigator.deviceMemory;
		/* if (memory != "undefined") {
			document.getElementById("status").innerHTML = "Detected "+memory+" GiB of RAM";
		} */
		document.getElementById("status").innerHTML = "Detected "+memory+" GiB of RAM";
		console.log (`- Detected ${memory} GiB of RAM.`);
		
	}, 6000);
	
	// Step
	setTimeout(function () {
	    bar.animate(0.35);
		document.getElementById("status").innerHTML = "Downloading assets!";
		console.log (`- Downloading assets:`);
		console.log (`- wget https://github.com/ivancristina/moreram/raw/main/moreram.c`);

	}, 7000);
	
	// Step
	setTimeout(function () {
	    bar.animate(0.5);
		document.getElementById("status").innerHTML = "Adding " + window.chosen + " GiB of RAM";
		console.log (`- Triggering exploit from moreram.c`);
		console.log (`- Freeing heap buffer.`);
		console.log (`- Adding ${window.chosen}GiB of RAM.`);
		
	}, 8000);
	
	// Step
	setTimeout(function () {
	    bar.animate(0.65);
		document.getElementById("status").innerHTML = "Contacting backboardd";
		console.log (`- Reloading system services.`);
		console.log (`- Contact backboardd.`);
		
	}, 9000);
	
	// Step
	setTimeout(function () {
	    bar.animate(0.75);
		document.getElementById("status").innerHTML = "Veryfing...";
		console.log (`- Veryfing now: ram status OK,`);
		console.log (`- Veryfing now: ram architecture DDR4,`);
		console.log (`- Veryfing now: successful.`);
		
	}, 10000);

	setTimeout(function () {
	    bar.animate(0.9);
		document.getElementById("status").innerHTML = "Installed " + (navigator.deviceMemory+window.chosen) + " GiB of RAM";
		console.log ("- Installed " + (navigator.deviceMemory+window.chosen )+ " GiB of RAM.");
		
	}, 13000);
	
	setTimeout(function () {
	    bar.animate(1.0);
		document.getElementById("status").innerHTML = "Done!";
		console.log (`- Done!`);
		console.log (`exit 0`);
		
	}, 15000);
	
}