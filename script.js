const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];
// Show loading Function
 function loading()
 {
    loader.hidden = false ;
    quoteContainer.hidden = true; 
 }

 // hide loading 
  function complete()
  {
    quoteContainer.hidden = false ;
    loader.hidden = true;

  }
//Show New Quote Function
function newQuote(){
    loading(); 
    //pick a Random Quote from apiQute Array
    const quote =apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author feild is blank and replace it with 'unknown'
    if (!quote.author){
        authorText.textContent = 'uknown'
    } else {
    authorText.textContent =  quote.author;
}
//check Quote lengh to delterming length 
if (quote.text. length > 120)
{
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');
}
//set Quote and hide loader
    quoteText.textContent = quote.text;
    complete();
}

//Get Quotes from API
async function getQuotes(){
    loading(); 
     const  apiUrl='https://type.fit/api/quotes';
     try{
        const response=await fetch(apiUrl);
     //apiQuotes is a Global Veriable
        apiQuotes=await response.json();
        newQuote();

       }catch(error){
     //catch error Here!
    }
}

// post on Facebook 
function facebookQuote ()
{
    const facebookUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(facebookUrl, '_blank');
} 
//Event listeners 
newQuoteBtn.addEventListener('click',newQuote);
facebookBtn.addEventListener('click',facebookQuote);


//on Load 
getQuotes();
