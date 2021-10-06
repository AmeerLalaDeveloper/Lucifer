let url='https://lucifer-quotes.herokuapp.com/v1/quotes';
const author=document.querySelector('.author')
const quote=document.querySelector('.quote')
const random=document.querySelector('.random')
let quotes={};
async function getData(){
    let rand=Math.floor(Math.random()*7);
    url+='/'+rand
    quotes=await(await fetch(url)).json()
    generateQuote()
    
}
window.onload = function() {
  getData();
};

const generateQuote=()=>{
    let randIdx=Math.floor(Math.random()*quotes.length)
    author.innerHTML=quotes[randIdx].author
    quote.innerHTML=quotes[randIdx].quote;
}
random.addEventListener('click',generateQuote)
