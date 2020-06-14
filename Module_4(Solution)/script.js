// Script of loops.

(function () {
    var names = ['Devesh', 'Johnny', 'Vivek', 'Jignesh', 'Atharva', 'Jack', 'Rishi'];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } 
        else {
            helloSpeaker.speak(names[i]);
        }
    }
})();

// Module 4 Solution by RelaxingStorm (Devesh V. Kamath)