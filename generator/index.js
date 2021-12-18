const quote = document.getElementById('quote');

console.log(name);

const getQuote = () => {
    fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = data.content;
        })

    fetch('https://random.imagecdn.app/1600/1000')
        .then((res) => {
            let url = res.url;
            document.getElementById('pic2').src=url;            
        })
};

quote.addEventListener('click', () => getQuote());

getQuote();
