//set up a function to run when the window is loaded
//grab the button and wait for a click
function init() {
	var button = document.getElementById('quizButton');
	button.onclick = checkQuiz;
}
//get the results when the button is clicked
function checkQuiz() {
	//confirm that the button was clicked
	//alert('Button was clicked!');
	//create a variable to store the user's house
	var question1;
	var question2;
	var question3;
    var question4;
    var question5;
    var question6;
    var question7;
    var question8;
    var question9;
    var question10;
	var free;
	var electronics;
	var kids;
	var stress;
	var smart;
	var kill;
	var least;
	var help;

    // The input stuff

	//get the input data as an array
	var input1 = document.getElementsByName('question1');
	//loop through all the possible inputs (the radio buttons)
	for (var a=0; a < input1.length; a++) {
		//see if one of the buttons is selected
		if (input1[a].checked) {
			//if it is save the house name
			question1 = input1[a].value;	
		}

	}

    var input2 = document.getElementsByName('question2');
	//loop through all the possible inputs (the radio buttons)
	for (var b=0; b < input2.length; b++) {
		//see if one of the buttons is selected
		if (input2[b].checked) {
			//if it is save the house name
			question2 = input2[b].value;
		}
	}

    var input3 = document.getElementsByName('question3');
	//loop through all the possible inputs (the radio buttons)
	for (var c=0; c < input3.length; c++) {
		//see if one of the buttons is selected
		if (input3[c].checked) {
			//if it is save the house name
			question3 = input3[c].value;
		}
	}

    var input4 = document.getElementsByName('question4');
	//loop through all the possible inputs (the radio buttons)
	for (var d=0; d < input4.length; d++) {
		//see if one of the buttons is selected
		if (input4[d].checked) {
			//if it is save the house name
			question4 = input4[d].value;
		}
	}
    
    var input5 = document.getElementsByName('question5');
	//loop through all the possible inputs (the radio buttons)
	for (var e=0; e < input5.length; e++) {
		//see if one of the buttons is selected
		if (input5[e].checked) {
			//if it is save the house name
			question5 = input5[e].value;
		}
	}
    
    var input6 = document.getElementsByName('question6');
	//loop through all the possible inputs (the radio buttons)
	for (var f=0; f < input6.length; f++) {
		//see if one of the buttons is selected
		if (input6[f].checked) {
			//if it is save the house name
			question6 = input6[f].value;
		}
	}
    
    var input7 = document.getElementsByName('question7');
	//loop through all the possible inputs (the radio buttons)
	for (var g=0; g < input7.length; g++) {
		//see if one of the buttons is selected
		if (input6[g].checked) {
			//if it is save the house name
			question7 = input7[g].value;
		}
	}
    
    
    var input8 = document.getElementsByName('question8');
	//loop through all the possible inputs (the radio buttons)
	for (var h=0; h < input8.length; h++) {
		//see if one of the buttons is selected
		if (input8[h].checked) {
			//if it is save the house name
			question8 = input8[h].value;
		}
	}
    
    var input9 = document.getElementsByName('question9');
	//loop through all the possible inputs (the radio buttons)
	for (var i=0; i < input9.length; i++) {
		//see if one of the buttons is selected
		if (input9[i].checked) {
			//if it is save the house name
			question9 = input9[i].value;
		}
	}
    
    var input10 = document.getElementsByName('question10');
	//loop through all the possible inputs (the radio buttons)
	for (var j=0; j < input10.length; j++) {
		//see if one of the buttons is selected
		if (input10[j].checked) {
			//if it is save the house name
			question10 = input10[j].value;
		}
    }
    
    while (!question1) {
            alert('Please answer question 1');
            var timer = {
        interval: null,
        seconds: 30,

        start: function () {
            var self = this,
                el = document.getElementById('time-to-update');

            el.innerText = this.seconds; // Output initial value

            this.interval = setInterval(function () {
                self.seconds--;

                if (self.seconds == 0) 
                    window.location.reload();

                el.innerText = self.seconds;
            }, 1000);
        },
    stop: function () {
        window.clearInterval(this.interval)
    }
            }
    timer.start();	
}
		while (!question2) {
		alert('Please answer question 2');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

    timer.start();
}
		while (!question3) {
		alert('Please answer question 3');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();	}
    
    		while (!question4) {
		alert('Please answer question 4');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();	}
		while (!question5) {
		alert('Please answer question 5');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}
timer.start();	}
    
    
    		while (!question6) {
		alert('Please answer question 6');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}
timer.start();	}
		while (!question7) {
		alert('Please answer question 7');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();	}
    		while (!question8) {
		alert('Please answer question 8');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();	}
		while (!question9) {
		alert('Please answer question 9');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();	}
	while (!question10) {
		alert('Please answer question 10');
		var timer = {
    interval: null,
    seconds: 30,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();	}

var answers = ['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'];
	
if (document.getElementById('1-1').checked ) {
		{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[1] + '         ' + '<img src = >';}
	}
	
	else if(document.getElementById('2-1').checked  &&  document.getElementById('2-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[2] + '         ' + '<img src = >';}
}

else if(document.getElementById('3-1').checked  &&  document.getElementById('3-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[3] + '         ' + '<img src = >';}
}

else if(document.getElementById('4-1').checked  &&  document.getElementById('4-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[4] + '         ' + '<img src = >';}
}

else if(document.getElementById('5-1').checked  &&  document.getElementById('5-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[5] + '         ' + '<img src = >';}
}

else if(document.getElementById('6-1').checked  &&  document.getElementById('6-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[6] + '         ' + '<img src = >';}
}

else if(document.getElementById('7-1').checked  &&  document.getElementById('7-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[7] + '         ' + '<img src = >';}
}

else if(document.getElementById('8-1').checked  &&  document.getElementById('8-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[8] + '         ' + '<img src = >';}
}

else if(document.getElementById('9-1').checked  &&  document.getElementById('9-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[9] + '         ' + '<img src = >';}
}

else if(document.getElementById('10-1').checked  &&  document.getElementById('10-1').checked )    {
{document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[10] + '         ' + '<img src = >';}
}

else {document.getElementById('subjectParagraph').innerHTML = 'You got:' + answers[0] + '         ' + '<img src = >';}

}


//call the initial function when the window is loaded
window.onload = init;