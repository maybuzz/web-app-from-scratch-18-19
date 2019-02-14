'use strict'

// config url
var config = {
  url: "https://ghibliapi.herokuapp.com/films"
}

// routes
var route = {
  overview: async function(){

    let data = await api.getData()

    const myData = api.formatData(data)
    const renderOverview = render.overview(myData)
  },
  detail: function(){

  }
}

// data
var api = {
  getData: function(){
    return fetch(config.url)
    .then(response => response.json())
    .catch(error => {  console.log(error)  })

  },
  formatData: function(myData){
    const itemList = myData.map(item => {
      let format = {
        id: item.id,
        title: item.title,
        description: item.description,
        date: item.release_date,
        rtScore: item.rt_score,
        director: item.director,
        producer: item.producer
      }
      return format
    })
    return itemList
  }
}

// render
var render = {
  overview: movies => {

    return movies.forEach(movie => {

      const app = document.getElementById('main')

      const card = document.createElement('article')

      const title = document.createElement('h1')
            title.textContent = movie.title

      const text = document.createElement('p')
            text.textContent = movie.description

      const year = document.createElement('p')
            year.textContent = movie.date

      const score = document.createElement('p')
            score.textContent = movie.rtScore

            app.appendChild(card)

            card.appendChild(title)
            card.appendChild(text)
            card.appendChild(year)
            card.appendChild(score)
    })
  },
  detail: function(){

  }
}


route.overview()
