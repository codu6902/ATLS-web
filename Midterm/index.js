let facts = [
  ["For Emma, Forever Ago", "July 8, 2007", "37 Minutes 14 Seconds", "'It's as if he's trying to inhabit the in-between spaces separating musical expression and private rumination, exposing his regrets without relinquishing them. His emotional exorcism proves even more intense for being so tentative."],
  ["Bon Iver", "June 17, 2011", "39 Minutes 25 Seconds", "'Bon Iver is about flow, from one scene and arrangement and song and memory and word into the next-- each distinct but connected-- all leading to 'Beth/Rest.' On the way there, the music moves like a river, every bend both unpredictable and inevitable as it carves sound and emotion out of silence.'"],
  ["22 A Million", "September 30, 2016", "34 Minutes 10 Seconds", "'But 22, A Million sounds only like itself. There are precedents for all of Vernon’s moves deep in the histories of rock‘n’roll and rhythm and blues and electronic music—and, more immediately, on newer records by West, Frank Ocean, James Blake, Chance the Rapper, Francis and the Lights, and Radiohead. But this particular amalgamation is so twitchy and idiosyncratic it feels truly singular. Its searching is bottomless.'"],
  ["I,I", "August 9, 2019", "39 Minutes 24 Seconds", "' 'Sunlight feels good now don’t it,' Vernon sings. There’s no great symbolism in the track, no yearning, no enveloping echoes. What emerges is a solace that has eluded Vernon on past Bon Iver releases. “I don’t have a leaving plan,” he sings, maybe because there’s nowhere else he needs to go.'"],
];

function changeAlbum(day, dayIdx){
  console.log(typeof (dayIdx));
  var albumFacts = document.getElementById("albumFacts");
  albumFacts.innerHTML = "";

  for (var i = 0; i < 4; i++) {
    albumFacts.innerHTML += "<li>" + facts[dayIdx][i] + "</li>";
  }
}

document.getElementById("zero").addEventListener("click",changeEmma)
function changeEmma(){
  document.body.style.backgroundColor = "#AEAB7C";
}
document.getElementById("one").addEventListener("click",changeBonIver)
function changeBonIver(){
  document.body.style.backgroundColor = "#9DB7B2";
}
document.getElementById("two").addEventListener("click",change22)
function change22(){
  document.body.style.backgroundColor = "#9F8326";
}
document.getElementById("three").addEventListener("click",changeI)
function changeI(){
  document.body.style.backgroundColor = "#D54729";
}
