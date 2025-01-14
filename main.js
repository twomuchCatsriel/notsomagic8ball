const button = document.getElementById("shake")

const possibleResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definetly",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

button.onclick = function(){
    let random = Math.floor(Math.random() * possibleResponses.length);
    document.getElementById("balls").innerHTML = possibleResponses[random];
}
