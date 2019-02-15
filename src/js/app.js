(() => {

  window.addEventListener("hashchange", () => {
    let id = window.location.hash.substr(1)
    const getDetail = route.detail(id)
  })

  // config url
  var config = {
    overview: `https://ghibliapi.herokuapp.com/films/`
  }

  // routes
  var route = {
    overview: async function(){

      let data = await api.getData()

      const myData = api.formatData(data)
      const renderOverview = render.overview(myData)

    },
    detail: async function(id){

      let newData = await api.getDetail(id)
      const renderDetail = render.detail(id)

      const movieData = JSON.parse(localStorage.getItem("movieData"))

      movieData.forEach(movie => {
        console.log("movie: ", movie);
      })
    }
  }

  // data
  var api = {
    getData: function(){
      return fetch(config.overview)
      .then(response => response.json())
      .catch(error => { console.log(error) })

    },

    // wegwerken, id gwn achter url plakken
    getDetail: function(id) {
      return fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
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
          producer: item.producer,
          url: item.url
        }
        return format
      })
      localStorage.setItem("movieData", JSON.stringify(itemList))
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

        const link = document.createElement('a')
              link.setAttribute('href', '#' + movie.id)

        const text = document.createElement('p')
              text.textContent = movie.description

              app.appendChild(link)
              link.appendChild(card)

              card.appendChild(title)
              card.appendChild(text)
      })
    },
    detail: function(movie) {

      const app = document.getElementById('detail')

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

            // card.appendChild(title)
            // card.appendChild(text)
            card.appendChild(year)
            card.appendChild(score)

    }
  }

  // app.init()
  route.overview()

  // obj app aanmaken
    // if statement url check of overview of detail
  // storage obj maken

  // diagrams volgorde router api

  // git kraken

})()
