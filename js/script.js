/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
      quote: "It is the possibility of having a dream come true that makes life interesting",
      source: "Paulo Coelho",
      citation: "The Alchemist",
      year: 1988
  },
  {
      quote: "The way to get started is to quit talking and begin doing.",
      source: "Walt Disney"
  },
  {
      quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      source: "Steve Jobs"
  },
  {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      source: "Eleanor Roosevelt"
  },
  {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      source: "Oprah Winfrey"
  },
  {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      source: "James Cameron"
  },
  {
      quote: "Life is what happens when you're busy making other plans.",
      source: "John Lennon"
  },
  {
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      source: "Mother Teresa"
  },
  {
      quote: "When you reach the end of your rope, tie a knot in it and hang on.",
      source: "Franklin D. Roosevelt"
  },
  {
      quote: "Always remember that you are absolutely unique. Just like everyone else.",
      source: "Margaret Mead"
  },
  {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      source: "Robert Louis Stevenson"
  },
  {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      source: "Eleanor Roosevelt"
  },
  {
      quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      source: "Benjamin Franklin"
  },
  {
      quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      source: "Helen Keller"
  },
  {
      quote: "It is during our darkest moments that we must focus to see the light.",
      source: "Aristotle"
  },
  {
      quote: "Whoever is happy will make others happy too.",
      source: "Anne Frank"
  },
  {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      source: "Ralph Waldo Emerson",
      citation: 'Ryan Luttrell',
      year: 2020
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  const randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote(){
  const quoteObject = getRandomQuote();
  const html = `
    <p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}
    
    
    </p>
  `;
  if (quoteObject.length === 3){
    html = `
    <p class="quote">${quoteObject.quote}</p>
    <p class="source"> ${quoteObject.source}
      <span class="citation"> ${quoteObject.citation} </span>
    </p>
    `
  } else if (quoteObject.length === 4){
    html = `
    <p class="quote">${quoteObject.quote}</p>
    <p class="source"> ${quoteObject.source}
      <span class="citation"> ${quoteObject.citation} </span>
      <span class="year"> ${quoteObject.year} </span>
    </p>
    `
  };
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);