import axios from "axios";
const Card = (article) => {

  const cardWrap = document.createElement("div");
  const headline = document.createElement("div");
  const authorWrap = document.createElement("div");
  const imgWrap = document.createElement("div");
  const authorImg = document.createElement("img");
  const nameSpan = document.createElement("span");

  cardWrap.appendChild(headline);
  cardWrap.appendChild(authorWrap);
  authorWrap.appendChild(imgWrap);
  imgWrap.appendChild(authorImg);
  authorWrap.appendChild(nameSpan);

  cardWrap.classList.add("card");
  headline.classList.add("headline");
  authorWrap.classList.add("author");
  imgWrap.classList.add("img-container");
  
  headline.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  nameSpan.textContent = `By ${article.authorName}`;

  nameSpan.addEventListener("click", () => {
    console.log(article.headline);
  })
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardWrap
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    res.data.articles.javascript.forEach(articleObj => {
      const finalCards = (Card(articleObj));
    document.querySelector(selector).appendChild(finalCards);
    })
    res.data.articles.bootstrap.forEach(articleObj => {
      const finalCards = (Card(articleObj));
    document.querySelector(selector).appendChild(finalCards);
    })
    res.data.articles.technology.forEach(articleObj => {
      const finalCards = (Card(articleObj));
    document.querySelector(selector).appendChild(finalCards);
    })
    res.data.articles.jquery.forEach(articleObj => {
      const finalCards = (Card(articleObj));
    document.querySelector(selector).appendChild(finalCards);
    })
    res.data.articles.node.forEach(articleObj => {
      const finalCards = (Card(articleObj));
    document.querySelector(selector).appendChild(finalCards);
    })
  })
  .catch(err => {
    console.error(err);
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
