'use strict'

var config = {
  url: "https://ghibliapi.herokuapp.com/films"
}

var route = {
  overview: async function(){

    let data = await api.getData()

    const goodData = api.formatData(data)
    const renderOverview = render.overview(goodData)
  },
  detail: function(){

  }
}


var api = {
  getData: function(){
    return fetch(config.url)
    .then(response => response.json())
    .catch(error => {  console.log(error)  })

  },
  formatData: items => {
    const itemList = items.map(item => {
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


var render = {
  overview: function(movies){
    console.log(movies);

    return movies.forEach(movie => {

      const app = document.getElementById('main')

      const card = document.createElement('article')

      const title = document.createElement('h1')
            title.textContent = movie.title

      const text = document.createElement('p')
            text.textContent = movie.description

            app.appendChild(card)

            card.appendChild(title)
            card.appendChild(text)
    })
  }
}


route.overview()
