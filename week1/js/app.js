'use strict'

const url = 'https://ghibliapi.herokuapp.com/films'
const app = document.getElementById('main')

fetch(url)
.then(response => response.json())
.then(movies => {

  let content = ''

  movies.forEach(movie => {
    content += `<article class="hs">
    <a href="${movie.id}" target="_blank"><h1>${movie.title}</h1></a>
    <p>${movie.description}</p>
    </article>`
  })

  app.innerHTML = content

})
.catch(error => {
    console.log(error)
})
