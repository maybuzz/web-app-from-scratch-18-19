'use strict'

const url = 'https://ghibliapi.herokuapp.com/films'
const app = document.getElementById('main')

fetch(url)
.then((resp) => resp.json())
.then(function(data) {

  let movies = data

  return movies.map(function(movie) {
    console.log(movie)

    const card = document.createElement('article')

    const title = document.createElement('h1')
          title.textContent = movie.title

    const text = document.createElement('p')
          text.textContent = movie.description

    app.appendChild(card)

    card.appendChild(title)
    card.appendChild(text)

  })
})

.catch(function(error) {
    console.log(error)
})

// var request = new XMLHttpRequest();
// var url = 'https://ghibliapi.herokuapp.com/films'
// var app = document.getElementById('main')
//
// request.open('GET', url, true)
//
// request.onload = function () {
//
//   var data = JSON.parse(this.response)
//
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       const card = document.createElement('article')
//
//       const title = document.createElement('h1')
//       title.textContent = movie.title
//
//       const detail = document.createElement('a')
//       detail.textContent = "detail pagina"
//
//       const text = document.createElement('p')
//       text.textContent = movie.description
//
//       app.appendChild(card)
//
//       card.appendChild(title)
//       card.appendChild(text)
//
//     })
//   } else {
//     console.log('error')
//   }
// }
//
// request.send()
