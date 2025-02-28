function shout(String) {
    return String.toUpperCase();
}


function whisper(String) {
    return String.toLowerCase();
};

function logShout (String) {
    console.log(String.toUpperCase());
}
 
function logWhisper (String) {
    console.log(String.toLowerCase());

}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  