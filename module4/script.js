/*
Solution of assignment 4:

Expected output:

Hello Yaakov
Good Bye vikash
Good Bye Tapu
Good Bye Jason
Hello Paul
Hello Akash
Hello Larry
Hello Paula
Hello Rohit
Good Bye Ram
*/

(function() {
    var names = ["Yaakov", "vikash", "Tapu", "Jason", "Paul", "Akash", "Larry", "Paula", "Rohit", "Ram"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
