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
var quotes;
quotes = [
  {
    quote:
      "When the snow falls and the white winds blow, the lone wolf dies but the pack survives.",
    source: "Eddard Stark",
    citation: "Game of Thrones",
  },
  {
    quote: "You don't get respect if you don't deserve it.",
    source: "Snoop Dogg",
    tag: "Rap",
  },
  {
    quote: "The worst thing you can do about a situation is nothing.",
    source: "Ice Cube",
    year: 2016,
  },
  {
    quote: "Not until four",
    source: "Spongebob",
    tag: "Cartoons",
  },
  {
    quote: "Weddings are basically funerals with cake.",
    source: "Rick Sanchez",
  },
];

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
