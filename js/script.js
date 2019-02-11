var eventTypeGreeting = "What type of event are you attending?"
var tempFahrGreeting = "What is the temperature in Fahrenheit?"

var eventType  = prompt(eventTypeGreeting);
var tempFahr = prompt(tempFahrGreeting);
var result;
var eventPrompt;
var tempFarhPrompt;

if (eventType === 'casual'){
    eventPrompt = 'something comfy'
}else if(eventType === 'semi-formal'){
    eventPrompt = 'a polo'
}else if(eventType === 'formal'){
    eventPrompt = 'a suit'
}else {
    result = "Format Error, please enter a different event type. Choose casual, semi-formal, or formal."
}

if (tempFahr >= 130){
    tempFarhPrompt = 'stay inside so you don\'t melt'
}else if(tempFahr > 70 && tempFahr <= 130){
    tempFarhPrompt = 'no jacket'
}else if(tempFahr >= 54 && tempFahr <= 70){
    tempFarhPrompt = 'a jacket'
}else if(tempFahr > -40 && tempFahr < 54){
    tempFarhPrompt = 'a coat'
}else if(tempFahr <= -40){
    tempFarhPrompt = 'stay inside so you don\'t freeze to death'
}else {
    result = 'Format Error, please enter a correct temperature.'
}

if (result === 'Format Error, please enter a different event type. Choose casual, semi-formal, or formal.' 
    || result === 'Format Error, please enter a correct temperature.'){
    null
}else {
    result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + 
        ' event, you should wear ' + eventPrompt + ' and ' + tempFarhPrompt + '.'
}

console.log(result);