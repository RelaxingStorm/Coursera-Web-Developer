// Speak Hello Script

(function(window){
    byeSpeaker = {};
    var speakWord = "Good Bye";
        byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
        }
        window.byeSpeaker = byeSpeaker;
})(window);

// Module 4 Solution by RelaxingStorm (Devesh V. Kamath)