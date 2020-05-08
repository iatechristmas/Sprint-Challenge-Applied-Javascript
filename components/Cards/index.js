// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

const newArticle = (attrs) => {

    const { headline, authorPhoto, authorName } = attrs

    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthorContainer = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardAuthor = document.createElement('span')

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthorContainer)
    cardAuthorContainer.appendChild(cardImgContainer)
    cardImgContainer.appendChild(cardImg)
    cardAuthorContainer.appendChild(cardAuthor)

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthorContainer.classList.add('author')
    cardImgContainer.classList.add('img-container')

    cardHeadline.textContent = headline
    cardImg.src = authorPhoto
    cardAuthor.textContent = authorName

    return card

}

const getHeadline = () => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {

            response.data.articles.javascript.forEach(item => {
                const article = newArticle(item)
                cardsContainer.appendChild(article)
            })
            response.data.articles.bootstrap.forEach(item => {
                const article = newArticle(item)
                cardsContainer.appendChild(article)
            })

            response.data.articles.technology.forEach(item => {
                const article = newArticle(item)
                cardsContainer.appendChild(article)
            })

            response.data.articles.jquery.forEach(item => {
                const article = newArticle(item)
                cardsContainer.appendChild(article)
            })

            response.data.articles.node.forEach(item => {
                const article = newArticle(item)
                cardsContainer.appendChild(article)
            })
            // newArray = response.data.articles
            // for (let i = 0; i < newArray.length; i++) {
            //     console.log('hi')
            // }
            // const keys = Object.entries(response.data.articles)
            // console.log(keys[1])
            // keys.forEach(element => {
            //     element.forEach(topic => {
            //         // newCard = newArticle(topic)
            //         // cardsContainer.appendChild(newCard)
            //         console.log(topic)
            //     })
            // })
            // for (var property in response.data.articles) {
            //     console.log(property)
            //     for (var thing in property) {
            //         console.log(thing)
            //     }
            // }
            // console.log(newArray)
            // for (let i = 0; i < response.length; i++) {
            //     console.log('Im working')
            // }
            // response.data.articles.forEach(element => {
            //     console.log(element)
            // });
            // console.log(response.data.articles)
            // response.data.articles.forEach(element => {

            //     console.log(element)
            // });
        })
}

getHeadline()