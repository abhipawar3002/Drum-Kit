document.addEventListener("DOMContentLoaded", function () {
    function Tom1() {
        let audio = new Audio('Sound/Tom1.mp3');
        audio.play();
    }
    let sound1 = document.querySelector('.a');
    sound1.onclick = Tom1;

    function Tom2() {
        let audio = new Audio('Sound/Tom2.mp3');
        audio.play();      
    }
    let sound2 = document.querySelector('.s');
    sound2.onclick = Tom2;

    function Tom3() {
        let audio = new Audio('Sound/Tom3.mp3');
        audio.play();      
    }
    let sound3 = document.querySelector('.d');
    sound3.onclick = Tom3;

    function Hi_Hat() {
        let audio = new Audio('Sound/Hi-Hat.mp3');
        audio.play();      
    }
    let sound4 = document.querySelector('.f');
    sound4.onclick = Hi_Hat;

    function Snare_Drum() {
        let audio = new Audio('Sound/Snare-drum.mp3');
        audio.play();      
    }
    let sound5 = document.querySelector('.g');
    sound5.onclick = Snare_Drum;

    function Bass() {
        let audio = new Audio('Sound/Bass.mp3');
        audio.play();      
    }
    let sound6 = document.querySelector('.h');
    sound6.onclick = Bass;

    function Crash() {
        let audio = new Audio('Sound/Crash.mp3');
        audio.play();      
    }
    let sound7 = document.querySelector('.j');
    sound7.onclick = Crash;

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a' || event.key === 'A') {
            Tom1();
        }
        else if (event.key === 's' || event.key === 'S') {
            Tom2();
        }
        else if (event.key === 'd' || event.key === 'D') {
            Tom3();
        }
        else if (event.key === 'f' || event.key === 'F') {
            Hi_Hat();
        }
        else if (event.key === 'g' || event.key === 'G') {
            Snare_Drum();
        }
        else if (event.key === 'h' || event.key === 'H') {
            Bass();
        }
        else if (event.key === 'j' || event.key === 'J') {
            Crash();
        }
        
    });
});
