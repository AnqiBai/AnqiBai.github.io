document.addEventListener('play', function(e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
            audios[i].currentTime = 0;
        } else {
           audios[i].currentTime = 0;
        }
    }
    e.target.play();
}, true);

/*I am pround of this function. */
///////////////////////////////////////////////
function myPlay(myAudio){
   if (!myAudio.paused) {
            myAudio.pause();
            myAudio.currentTime = 0;
        }
        myAudio.play();
}
//////////////////////////////////////////////
$(document).bind('keypress', function(event) {

    // 1
    if (event.which === 49 && !(event.shiftKey)) {
        $('#B1').mouseover();
        var audio = document.getElementById("audioB1");
        myPlay(audio);

    }

    // 2
    if (event.which === 50 && !(event.shiftKey)) {
        $('#C2').mouseover();
        var audio = document.getElementById("audioC2");
        myPlay(audio);
    }

    // 3
    if (event.which === 51 && !(event.shiftKey)) {
        $('#D2').mouseover();
        var audio = document.getElementById("audioD2");
        myPlay(audio);
    }

    // 4
    if (event.which === 52 && !(event.shiftKey)) {
        $('#E2').mouseover();
        var audio = document.getElementById("audioE2");
        myPlay(audio);
    }

    // 5
    if (event.which === 53 && !(event.shiftKey)) {
        $('#F2').mouseover();
        var audio = document.getElementById("audioF2");
        myPlay(audio);
    }

    // 6
    if (event.which === 54 && !(event.shiftKey)) {
        $('#G2').mouseover();
        var audio = document.getElementById("audioG2");
        myPlay(audio);
    }

    // 7
    if (event.which === 55 && !(event.shiftKey)) {
        $('#A2').mouseover();
        var audio = document.getElementById("audioA2");
        myPlay(audio);
    }

    // 8
    if (event.which === 56 && !(event.shiftKey)) {
        $('#B2').mouseover();
        var audio = document.getElementById("audioB2");
        myPlay(audio);
    }

    // 9
    if (event.which === 57 && !(event.shiftKey)) {
        $('#C3').mouseover();
        var audio = document.getElementById("audioC3");
        myPlay(audio);
    }

    // 0
    if (event.which === 48 && !(event.shiftKey)) {
        $('#D3').mouseover();
        var audio = document.getElementById("audioD3");
        myPlay(audio);
    }

    // q
    if (event.which === 113 && !(event.shiftKey)) {
        $('#E3').mouseover();
        var audio = document.getElementById("audioE3");
        myPlay(audio);
    }

    // w
    if (event.which === 119 && !(event.shiftKey)) {
        $('#F3').mouseover();
        var audio = document.getElementById("audioF3");
        myPlay(audio);
    }

    // e
    if (event.which === 101 && !(event.shiftKey)) {
        $('#G3').mouseover();
        var audio = document.getElementById("audioG3");
        myPlay(audio);
    }

    // r
    if (event.which === 114 && !(event.shiftKey)) {
        $('#A3').mouseover();
        var audio = document.getElementById("audioA3");
        myPlay(audio);
    }

    // t
    if (event.which === 116 && !(event.shiftKey)) {
        $('#B3').mouseover();
        var audio = document.getElementById("audioB3");
        myPlay(audio);
    }

    // y
    if (event.which === 121 && !(event.shiftKey)) {
        $('#C4').mouseover();
        var audio = document.getElementById("audioC4");
        myPlay(audio);
    }

    // u
    if (event.which === 117 && !(event.shiftKey)) {
        $('#D4').mouseover();
        var audio = document.getElementById("audioD4");
        myPlay(audio);
    }

    // i 
    if (event.which === 105 && !(event.shiftKey)) {
        $('#E4').mouseover();
        var audio = document.getElementById("audioE4");
        myPlay(audio);
    }

    // o 
    if (event.which === 111 && !(event.shiftKey)) {
        $('#F4').mouseover();
        var audio = document.getElementById("audioF4");
        myPlay(audio);
    }

    // p 
    if (event.which === 112 && !(event.shiftKey)) {
        $('#G4').mouseover();
        var audio = document.getElementById("audioG4");
        myPlay(audio);
    }

    // a 
    if (event.which === 97 && !(event.shiftKey)) {
        $('#A4').mouseover();
        var audio = document.getElementById("audioA4");
        myPlay(audio);
    }

    // s 
    if (event.which === 115 && !(event.shiftKey)) {
        $('#B4').mouseover();
        var audio = document.getElementById("audioB4");
        myPlay(audio);
    }

    // d 
    if (event.which === 100 && !(event.shiftKey)) {
        $('#C5').mouseover();
        var audio = document.getElementById("audioC5");
        myPlay(audio);
    }

    // f 
    if (event.which === 102 && !(event.shiftKey)) {
        $('#D5').mouseover();
        var audio = document.getElementById("audioD5");
       myPlay(audio);
    }

    // g 
    if (event.which === 103 && !(event.shiftKey)) {
        $('#E5').mouseover();
        var audio = document.getElementById("audioE5");
        myPlay(audio);
    }

    // h 
    if (event.which === 104 && !(event.shiftKey)) {
        $('#F5').mouseover();
        var audio = document.getElementById("audioF5");
        myPlay(audio);
    }

    // j 
    if (event.which === 106 && !(event.shiftKey)) {
        $('#G5').mouseover();
        var audio = document.getElementById("audioG5");
        myPlay(audio);
    }

    // k 
    if (event.which === 107 && !(event.shiftKey)) {
        $('#A5').mouseover();
        var audio = document.getElementById("audioA5");
        myPlay(audio);
    }

    // l 
    if (event.which === 108 && !(event.shiftKey)) {
        $('#B5').mouseover();
        var audio = document.getElementById("audioB5");
        myPlay(audio);
    }

    // z 
    if (event.which === 122 && !(event.shiftKey)) {
        $('#C6').mouseover();
        var audio = document.getElementById("audioC6");
        myPlay(audio);
    }

    // x 
    if (event.which === 120 && !(event.shiftKey)) {
        $('#D6').mouseover();
        var audio = document.getElementById("audioD6");
        myPlay(audio);
    }

    // c 
    if (event.which === 99 && !(event.shiftKey)) {
        $('#E6').mouseover();
        var audio = document.getElementById("audioE6");
        myPlay(audio);
    }

    // v 
    if (event.which === 118 && !(event.shiftKey)) {
        $('#F6').mouseover();
        var audio = document.getElementById("audioF6");
        myPlay(audio);
    }

    // b 
    if (event.which === 98 && !(event.shiftKey)) {
        $('#G6').mouseover();
        var audio = document.getElementById("audioG6");
        myPlay(audio);
    }

    // n 
    if (event.which === 110 && !(event.shiftKey)) {
        $('#A6').mouseover();
        var audio = document.getElementById("audioA6");
        myPlay(audio);
    }

    // m 
    if (event.which === 109 && !(event.shiftKey)) {
        $('#B6').mouseover();
        var audio = document.getElementById("audioB6");
        myPlay(audio);
    }

    // S2 === @ 
    if (event.which === 64 && event.shiftKey) {
        $('#Db2').mouseover();
        var audio = document.getElementById("audioDb2");
        myPlay(audio);
    }

    // S3 === # 
    if (event.which === 35 && event.shiftKey) {
        $('#Eb2').mouseover();
        var audio = document.getElementById("audioEb2");
        myPlay(audio);
    }

    // S5 === % 
    if (event.which === 37 && event.shiftKey) {
        $('#Gb2').mouseover();
        var audio = document.getElementById("audioGb2");
        myPlay(audio);
    }

    // S6 === ^ 
    if (event.which === 94 && event.shiftKey) {
        $('#Ab2').mouseover();
        var audio = document.getElementById("audioAb2");
        myPlay(audio);
    }

    // S7 === & 
    if (event.which === 38 && event.shiftKey) {
        $('#Bb2').mouseover();
        var audio = document.getElementById("audioBb2");
       myPlay(audio);
    }

    // S9 === ( 
    if (event.which === 40 && event.shiftKey) {
        $('#Db3').mouseover();
        var audio = document.getElementById("audioDb3");
        myPlay(audio);
    }

    // S0 === ) 
    if (event.which === 41 && event.shiftKey) {
        $('#Eb3').mouseover();
        var audio = document.getElementById("audioEb3");
        myPlay(audio);
    }

    // Sw === W 
    if (event.which === 87 && event.shiftKey) {
        $('#Gb3').mouseover();
        var audio = document.getElementById("audioGb3");
        myPlay(audio);
    }

    // Se === E 
    if (event.which === 69 && event.shiftKey) {
        $('#Ab3').mouseover();
        var audio = document.getElementById("audioAb3");
        myPlay(audio);
    }

    // Sr === R 
    if (event.which === 82 && event.shiftKey) {
        $('#Bb3').mouseover();
        var audio = document.getElementById("audioBb3");
        myPlay(audio);
    }

    // Sy === Y 
    if (event.which === 89 && event.shiftKey) {
        $('#Db4').mouseover();
        var audio = document.getElementById("audioDb4");
        myPlay(audio);
    }

    // Su === U 
    if (event.which === 85 && event.shiftKey) {
        $('#Eb4').mouseover();
        var audio = document.getElementById("audioEb4");
       myPlay(audio);
    }

    // So === O 
    if (event.which === 79 && event.shiftKey) {
        $('#Gb4').mouseover();
        var audio = document.getElementById("audioGb4");
        myPlay(audio);
    }

    // Sp === P 
    if (event.which === 80 && event.shiftKey) {
        $('#Ab4').mouseover();
        var audio = document.getElementById("audioAb4");
        myPlay(audio);
    }

    // Sa === A 
    if (event.which === 65 && event.shiftKey) {
        $('#Bb4').mouseover();
        var audio = document.getElementById("audioBb4");
       myPlay(audio);
    }

    // Sd === D 
    if (event.which === 68 && event.shiftKey) {
        $('#Db5').mouseover();
        var audio = document.getElementById("audioDb5");
        myPlay(audio);
    }

    // Sf === F 
    if (event.which === 70 && event.shiftKey) {
        $('#Eb5').mouseover();
        var audio = document.getElementById("audioEb5");
        myPlay(audio);
    }

    // Sh === H 
    if (event.which === 72 && event.shiftKey) {
        $('#Gb5').mouseover();
        var audio = document.getElementById("audioGb5");
       myPlay(audio);
    }

    // Sj === J 
    if (event.which === 74 && event.shiftKey) {
        $('#Ab5').mouseover();
        var audio = document.getElementById("audioAb5");
        myPlay(audio);
    }

    // Sk === K 
    if (event.which === 75 && event.shiftKey) {
        $('#Bb5').mouseover();
        var audio = document.getElementById("audioBb5");
        myPlay(audio);
    }

    // Sz === Z 
    if (event.which === 90 && event.shiftKey) {
        $('#Db6').mouseover();
        var audio = document.getElementById("audioDb6");
        myPlay(audio);
    }

    // Sx === X 
    if (event.which === 88 && event.shiftKey) {
        $('#Eb6').mouseover();
        var audio = document.getElementById("audioEb6");
        myPlay(audio);
    }

    // Sc === V
    if (event.which === 86 && event.shiftKey) {
        $('#Gb6').mouseover();
        var audio = document.getElementById("audioGb6");
       myPlay(audio);
    }

    // Sb === B 
    if (event.which === 66 && event.shiftKey) {
        $('#Ab6').mouseover();
        var audio = document.getElementById("audioAb6");
       myPlay(audio);
    }

    // Sn === N 
    if (event.which === 78 && event.shiftKey) {
        $('#Bb6').mouseover();
        var audio = document.getElementById("audioBb6");
        myPlay(audio);
    }
});

$(document).ready(function() {

    $('.pianoKey').click(
        function(event) {
            // alert(event.target.id);
            console.log(event.target.id);
            var audioName = "audio" + event.target.id;
            var audio = document.getElementById(audioName);
            myPlay(audio);
        });

    $('#pianoImage').mapster({
        singleSelect: false,
        render_highlight: {
            altImage: 'piano/pictures/piano3.JPG'
        },

        fill: true,
        altImage: 'piano/pictures/pianoKB.jpg',
        fillOpacity: 0.8,
    });

});
