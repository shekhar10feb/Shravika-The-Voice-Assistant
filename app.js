// elements 

const startBtn =  document.querySelector("#start");
const stopBtn  =  document.querySelector("#stop");
const speakBtn =  document.querySelector("#speak");

// speech recognition setup 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// sr start 
recognition.onstart = function () {
    console.log("vr active");
}

// sr result 
recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();

    if(transcript.includes("hello shravika")) {
        readOut("hello sir");
        // console.log("hello sir");
    }
    if(transcript.includes("open youtube")) {
        readOut("opening youtube, sir");
        window.open("https://www.youtube.com");
        // console.log("hello sir");
    }
    if(transcript.includes("open google")) {
        readOut("opening google, sir");
        window.open("https://www.google.com");
        // console.log("hello sir");
    }
    if(transcript.includes("introduce yourself" || "tell me about yourself")) {
        readOut("hello, sir. i am shravika, the voice assistant, version 2.1. , made by shekhar ranjan. Mr. Ranjan is still working on this.");
    }
    if(transcript.includes("tell me about mars manufacturer")) {
        readOut("mars manufacturer is a certified company, which manufactures led-based products like led bulbs, lamps, panel lights, concealed lights, tubelights and many more, which fulfill your concerned needs. For more details, please visit www.marsmanufsacturers.com. Thank you.");
    }
    if(transcript.includes("open mars manufacturer")) {
        readOut("opening mars manufacturer official website, sir");
        window.open("https://www.marsmanufacturers.com");
        // console.log("hello sir");
    }
    if(transcript.includes("are bhai, shekhar bhaiya ki shadi ke baare me to batao.")) {
        readOut("ha, shekhar bhaiya ki shaadi twenty-one may ko hone waali hai aur prabhat bhaiya ki shaadi november-december me hogi. kripya dono shaadi mein jarur aaye.");
    }

    // readOut(transcript);

    // console.log(transcript);
    // console.log(event);
}

// sr stop 
recognition.onend = function () {
    
    console.log("vr deactivate");
}

// sr continuous 
// recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});

// Shravika speech 
function readOut(message) {
    const speech = new SpeechSynthesisUtterance();

    //Getting different vioces
    // const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    // speech.voice = allVoices[36];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speaking out");
}

// example
speakBtn.addEventListener("click", () => {
    readOut("Hi, Monty Sir! Mai hu Shravika, apki Voice Assistant.");
});

// window.onload = function() {
//     readOut(" ");
// }