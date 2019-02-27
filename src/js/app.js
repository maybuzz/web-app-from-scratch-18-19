(() => {

  var app = {
    init: () => {
      console.log("app: init")
      router.hash()
      router.handle()
    },
    config: {
      url: `https://ghibliapi.herokuapp.com/films/`
    }
  }

  var routes = {
    overview: async () =>{

      console.log("routes: overview")

      // let data = await api.getData()
      // storage.store(data)
      // render.overview(storage.getData())

      let data = await api.getData()

      const myData = api.formatData(data)
      const renderOverview = render.overview(myData)

    },
    detail: async id => {

      console.log("routes: detail")

      let newData = await api.getData(id)
      const renderDetail = render.detail(id)

      const movieData = JSON.parse(localStorage.getItem("movieData"))

    }
  }

  // NOG NIET AF
  var router = {
    handle: () => {
      let hash = window.location.hash.split("#")[1]
      if (window.localStorage.getItem("movie-"+hash)) {
        console.log("router: handle for " + this)
        routes.detail(hash)
      } else {
        window.location.hash = ""
        routes.overview()
      }
    },
    hash: () => {
      window.addEventListener("hashchange", () => {
        let movieID = window.location.hash.substr(1)
        const clearAll = clear.clearView()
        const detail = render.detail(movieID)
      })
    }
  }

  var api = {
    getData: () => {
      console.log("api: getData")
      return fetch(app.config.url)
      .then(response => response.json())
      .catch(error => { console.log(error) })
    },
    formatData: myData => {
      console.log("api: formatData")
      // const itemList = myData.map(item => {
      //   let format = {
      //     id: item.id,
      //     title: item.title,
      //     description: item.description,
      //     date: item.release_date,
      //     rtScore: item.rt_score,
      //     director: item.director,
      //     producer: item.producer,
      //     url: item.url
      //   }
      //   return format
      // })
      // localStorage.setItem("movieData", JSON.stringify(itemList))
      // console.log(JSON.parse(localStorage.getItem("movieData")))
      // return itemList
      const itemList = myData.map(item =>{
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
        window.localStorage.setItem('movie-'+item.id,JSON.stringify(format))
      })
    }
  }

  // NOG NIET AF
  var storage = {
    setLocal: () => {
      window.localStorage.getItem('hash')
    }
  }

  // NOG NIET AF
  // NOG NIET AF
  var utilities = {
    sortByYear: () => {
      console.log("sort by year")
      // data uit localStorage halen
      // nieuwe array maken, gesorteerd op jaar
    },
    sortByRTScore: () => {
      console.log("sort by RT score")
      // data uit localStorage halen
      // nieuwe array maken, gesorteerd op RT score
    }
  }

  var clear = {
    clearView: () => {
      console.log("clear: getData")
      const app = document.getElementById('main')

      while (app.firstChild) {
          app.removeChild(app.firstChild)
      }
    }
  }

  var render = {
    overview: movies => {
      console.log("render: overview")
      movies = Object.keys(window.localStorage).filter(v => v.startsWith('movie-'))
      return movies.forEach(movie => {
        data = JSON.parse(window.localStorage.getItem(movie))
        const app = document.getElementById('main')

        const card = document.createElement('article')

        const title = document.createElement('h1')
              title.textContent = data.title

        const link = document.createElement('a')
              link.setAttribute('href', '#' + data.id)

        const text = document.createElement('p')
              text.setAttribute('class', 'text')
              data.description = data.description
              text.textContent = `${data.description}...`

              app.appendChild(link)
              link.appendChild(card)

              card.appendChild(title)
              card.appendChild(text)
      })
    },
    detail: movieID => {
      console.log("render: detail")

      const movieData = JSON.parse(localStorage.getItem("movieData"))

      var filter = movieData.filter(movie => { return movie.id == movieID })

      const app = document.getElementById('main')

      const section = document.createElement('section')

      const link = document.createElement('a')
            link.setAttribute('href', '/src')
            link.textContent = "terug naar overzicht"

      const title = document.createElement('h1')
            title.setAttribute('class', 'title')
            title.textContent = filter[0].title

      const heading1 = document.createElement('h3')
            heading1.textContent = "director"

      const heading2 = document.createElement('h3')
            heading2.textContent = "producer"

      const heading3 = document.createElement('h3')
            heading3.textContent = "rotten tomatoes"

      const text = document.createElement('p')
            text.setAttribute('class', 'text')
            text.textContent = filter[0].description

      const director = document.createElement('p')
            director.setAttribute('class', 'director')
            director.textContent = filter[0].director

      const producer = document.createElement('p')
            producer.setAttribute('class', 'producer')
            producer.textContent = filter[0].producer

      const year = document.createElement('p')
            year.setAttribute('class', 'year')
            year.textContent = filter[0].date

      const score = document.createElement('p')
            score.setAttribute('class', 'score')
            score.textContent = filter[0].rtScore


            app.appendChild(section)

            section.appendChild(link)
            section.appendChild(title)
            section.appendChild(text)
            section.appendChild(year)
            section.appendChild(heading3)
            section.appendChild(score)
            section.appendChild(heading1)
            section.appendChild(director)
            section.appendChild(heading2)
            section.appendChild(producer)

    }
  }
  app.init()

})()
