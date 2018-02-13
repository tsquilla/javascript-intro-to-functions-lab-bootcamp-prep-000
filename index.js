function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  
}
function logWhisper(string) {
  console.log(string.toLowerCase())
  
}
function sayHiToGradma(string) {
  var lowercase = "I can't hear you"
  lowercase === string.toLowerCase() // true
  return "I can't hear you!"
}
