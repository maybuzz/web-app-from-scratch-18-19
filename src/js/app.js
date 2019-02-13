'use strict'

fetch('https://ghibliapi.herokuapp.com/films')
.then(response => response.json())
.then(movies => {

  const app = document.getElementById('main')
  let content = ''

  movies.forEach(movie => {
    content += `<article class="container">
    <a class="link" href="${movie.id}"><h1 class="title">${movie.title}</h1></a>
    <p class="description">${movie.description}</p>
    </article>`
  })

  app.innerHTML = content

})
.catch(error => {
    console.log(error)
})
