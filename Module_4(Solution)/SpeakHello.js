// Speak Goodbye Script

(function(window){
    helloSpeaker = {};
    var speakWord = "Hello";
        helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
        }
        window.helloSpeaker = helloSpeaker;
})(window);

// Module 4 Solution by RelaxingStorm (Devesh V. Kamath)