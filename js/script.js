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
    year:""
  },
  {
    quote:"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2009"
  },
  {
    quote:"I'm not superstitious, but I am a little stitious.",
    source: "Michael Scott",
    citation:"The Office",
    year:""
  },
  {
    quote:"I love inside jokes. I hope to be a part of one someday.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2006"
  },
  {
    quote:"I feel like all my kids grew up and then they married each other. It’s every parent’s dream.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2013"
  },
  {
    quote:"And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    source: "Michael Scott",
    citation:"The Office",
    year:"2009"
  },
  {
    quote:"I… Declare…. Bankruptcy!",
    source: "Michael Scott",
    citation:"The Office",
    year:"2007"
  }  
]


/***
 * `getRandomQuote` function
 * gets random number and returns random quote from the quotes array
***/
function getRandomQuote(){
  let rdmNum = Math.floor(Math.random() * quotes.length);
  return quotes[rdmNum];
}


/***
 * `printQuote` function
 * calls getRandomQuote assigns quote properties to html variable
 * if statements check for optional properites and append spans to 
 * html
 * returns html
***/
function printQuote(){
  let rdmQuote = getRandomQuote();
  let html = `<p class="quote">${rdmQuote.quote}</p>
  <p class="source">${rdmQuote.source}`
  if (rdmQuote.citation && rdmQuote.year){
    html += `<span class="citation">${rdmQuote.citation}</span>
    <span class="year">${rdmQuote.year}</span>
    </p>`;
  }else if (rdmQuote.citation){
    html += `<span class="citation">${rdmQuote.citation}</span>
    </p>`;
  }else if(rdmQuote.source){
    html += `<span class="year">${rdmQuote.year}</span>
    </p>`;
  } else {
    html += `</p>`
  }
  document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * calls printQuote on buttom click
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);