/*An array of objects detailing quotes, sources, citationss and years*/
const quotes = [
  {
      quote: "It is the possibility of having a dream come true that makes life interesting",
      source: "Paulo Coelho",
      citation: "The Alchemist",
      year: 1988
  },
  {
      quote: "The way to get started is to quit talking and begin doing.",
      source: "Walt Disney",
      tags: "The greats"
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
  }
];

/*This function will generate a random number and select an object from the quotes array*/

function getRandomQuote(){
  const randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

/*This function gathers all of the necessary details from the quote object and displays them on the screen*/

function printQuote(){
  const quoteObject = getRandomQuote();
//The let variable holds the minimum necessary data to be displayed on the page
  let html = `
    <p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}
  `;
//This checks to see if there is a citation property in the object and adds it to the original html string
  if (quoteObject.citation !== undefined){
    let citation = `
    <span class="citation"> ${quoteObject.citation} </span>
    `;
    html = `${html} ${citation}`;
  } 
//This checks to see if there is a year property in the quotes object and adds it to the html string
  if (quoteObject.year !== undefined){
    let year = `
    <span class="citation"> ${quoteObject.year} </span>
    `;
    html = `${html} ${year}`;
  } 
  if (quoteObject.tags !== undefined){
    let tags = `
    <span class="tags"> ${quoteObject.tags} </span>
    `;
    html = `${html} ${tags}`;
  } 
  html += `</p>`;

//This takes the full string found in the html variable and displays in on the page in the proper format
  document.getElementById('quote-box').innerHTML = html; 
//This calls the background function to change the background to a random colour everytime the quote changes
  document.body.style.backgroundColor = background();
}
//This function will randomly create and rgb value to change the colour of the background
function background() {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

//This combines all of the value to creat a string that house the rgb value for a random colour
return `rgb(${red}, ${green}, ${blue})`
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
setInterval(printQuote, 10000);
document.getElementById('load-quote').addEventListener("click", printQuote, false);