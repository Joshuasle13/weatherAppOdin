const author = document.getElementById("author");
const quote = document.getElementById("quote");

async function getQuote() {
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    mode: "cors",
    headers: { "X-Api-Key": "n6zLsRYmjuZjDnUU0e5O4A==C8Zfkahux1gfRim7" },
  });

  const quoteInfo = await response.json();
  console.log(quoteInfo);
  quote.innerText = quoteInfo[0].quote;
  author.innerText = "-" + quoteInfo[0].author;
}

export { getQuote };
