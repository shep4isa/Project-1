/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `Quotes array
 * array of objects with properties quote, source, citation, and year
***/
const quotes = [
  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    source: "Michael Scott",
    citation:"",
    year:"",
    episode: "",
  },
  {
    quote:"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2009",
    episode: "The Duel",
  },
  {
    quote:"I'm not superstitious, but I am a little stitious.",
    source: "Michael Scott",
    citation:"The Office",
    year:"",
    episode: "Fun Run",
  },
  {
    quote:"I love inside jokes. I hope to be a part of one someday.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2006",
    episode: "",
  },
  {
    quote:"I feel like all my kids grew up and then they married each other. It’s every parent’s dream.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2013",
    episode: "The Finale",
  },
  {
    quote:"And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2009",
    episode: "",
  },
  {
    quote:"I… Declare…. Bankruptcy!",
    source: "Michael Scott",
    citation:"The Office",
    year:"2007",
    episode: "",
  }  
]


/***
 * `getRandomQuote` function
 * gets a random number between zero and length of quotes and returns random quote from the quotes array
***/
function getRandomQuote(){
  let rdmNum = Math.floor(Math.random() * quotes.length);
  return quotes[rdmNum];
}

/***
 * `getRandomRGB` function
 * returns a random number between 0 andd 255 
***/
function getRandomRGB(){
  return Math.floor(Math.random()*255);
}


/***
 * `printQuote` function
 * calls getRandomQuote assigns quote properties to html variable
 * if statements check for optional properites and append spans to 
 * html
 * calls getRandomRGB assigns random rgb color to body background color
 * returns html
***/
function printQuote(){
  let rdmQuote = getRandomQuote();
  let r = getRandomRGB();
  let g = getRandomRGB();
  let b = getRandomRGB();
  let html = `<p class="quote">${rdmQuote.quote}</p>
  <p class="source">${rdmQuote.source}`
  if (rdmQuote.citation ){
    html += `<span class="citation">${rdmQuote.citation}</span>`;
  }
  if (rdmQuote.year){
    html += `<span class="year">${rdmQuote.year}</span>`;
  }
  if(rdmQuote.episode){
    html += `<span class="year">${rdmQuote.episode }</span>`;
  } 
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html; 
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}


/***
 * click event listener for the print quote button
 * calls printQuote on buttom click
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * Recalls printQuote every 10 seconds
 */
setInterval(printQuote, 10000);