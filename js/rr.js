    //what happens first
    function init() {
        var roundText = "Round ";
        var roundNumber = 1;
        var pulls = 0;
        var livestext = "Lives: ";
        const button = document.getElementById('button');
        var check = false;

        //Player 1
        var p1name = "Player 1";
        var p1lives = 4;

        //Player 2
        var p2name = "Player 2";
        var p2lives = 4;

        //Player 3
        var p3name = "Player 3";
        var p3lives = 4;

        //Player 4
        var p4name = "Player 4";
        var p4lives = 4;

        //Player 5
        var p5name = "Player 5";
        var p5lives = 4;

        //Player 6
        var p6name = "Player 6";
        var p6lives = 4;



        function updateText() {
            //Assigns previous variables to html
            document.getElementById("round").innerHTML = roundText + roundNumber;

            document.getElementById("p1status").innerHTML = livestext + p1lives;
            document.getElementById("p2status").innerHTML = livestext + p2lives;
            document.getElementById("p3status").innerHTML = livestext + p3lives;
            document.getElementById("p4status").innerHTML = livestext + p4lives;
            document.getElementById("p5status").innerHTML = livestext + p5lives;
            document.getElementById("p6status").innerHTML = livestext + p6lives;
        }

        function updateNames() {
            document.getElementById("p1name").value = p1name;
            document.getElementById("p2name").value = p2name;
            document.getElementById("p3name").value = p3name;
            document.getElementById("p4name").value = p4name;
            document.getElementById("p5name").value = p5name;
            document.getElementById("p6name").value = p6name;
        }


        //Part that does stuff
        button.onclick = pullTrigger;
        //actually declares the info
        updateText();

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        }

        function pullTrigger() {
            //keeps track of button presses in console
            //console.log(("pull#: "), pulls);
            //adds 1 to pull count
            pulls += 1;
            //actually gets a random number and also tracks in console
            var ranum = getRandomInt(1, 60);
            var rabool = getRandomInt(1, 6);
            console.log(("pull#: "), pulls, ("Check: "), check, ("random#: "), ranum);
            if (rabool == 1) { check == true; }
            //decided if u got shot
            if (check == true || pulls == 6) { shoot(); }

            //what to do if u got shot
            function shoot() {
                console.log("hit");
                //ends current round
                roundNumber += 1;

                //takes away one life from victim
                if (ranum >= 1 && ranum <= 10) {
                    p1lives -= 1;
                }

                if (ranum >= 11 && ranum <= 20) {
                    p2lives -= 1;
                }

                if (ranum >= 21 && ranum <= 30) {
                    p3lives -= 1;
                }

                if (ranum >= 31 && ranum <= 40) {
                    p4lives -= 1;
                }

                if (ranum >= 41 && ranum <= 50) {
                    p5lives -= 1;
                }

                if (ranum >= 51 && ranum <= 60) {
                    p6lives -= 1;
                }

                //refreshes the text to match
                updateText();

                //gives the screen a little seizure for user feedback
                setTimeout(() => { document.getElementById("body").style.background = "red"; }, 0);
                setTimeout(() => { document.getElementById("button").style.pointerEvents = "none" }, 0);
                setTimeout(() => { alert("you ded"); }, 5);
                setTimeout(() => { document.getElementById("body").style.background = "black"; }, 2000);
                setTimeout(() => { document.getElementById("button").style.pointerEvents = "all" }, 2000);

                //Determines loser
                if (p1lives == 0) {
                    alert("P1 Loses");
                    dead();
                }

                if (p2lives == 0) {
                    alert("P2 Loses");
                    dead();
                }

                if (p3lives == 0) {
                    alert("P3 Loses");
                    dead();
                }

                if (p4lives == 0) {
                    alert("P4 Loses");
                    dead();
                }

                if (p5lives == 0) {
                    alert("P5 Loses");
                    dead();
                }

                if (p6lives == 0) {
                    alert("P6 Loses");
                    dead();
                }

                //resets the pull number for new round
                pulls = 0;

                //what do when round ends
                function dead() {
                    location.reload();
                }
            }
        }
    }
    //tells the site to load init first
    window.onload = init;