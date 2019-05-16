import router from '/src/js/modules/router.js'
import routes from '/src/js/modules/routes.js'

const render = {
  overview: (movies) => {
    console.log('render: overview')

    if(document.getElementById('spinner') != undefined){
      document.getElementById('spinner').remove()
    }

    movies = Object.keys(window.localStorage).filter((v) => v.startsWith('movie-'))

    return movies.forEach((movie) => {

      var data = JSON.parse(window.localStorage.getItem(movie))

      const app = document.getElementById('main')

      const card = document.createElement('article')

      const title = document.createElement('h1')
            title.textContent = data.title

      const link = document.createElement('a')
            link.setAttribute('href', '#' + data.id)

      const text = document.createElement('p')
            text.setAttribute('class', 'text')
            data.description = data.description
            data.description = data.description.substring(0, 200)
            text.textContent = `${data.description}...`

            app.appendChild(link)
            link.appendChild(card)

            card.appendChild(title)
            card.appendChild(text)
    })
  },
  detail: (movieID) => {
    console.log('render: detail')

    const app = document.getElementById('main')

    while (app.firstChild) {
        app.removeChild(app.firstChild)
    }

    if(document.getElementById('spinner') != undefined){
      document.getElementById('spinner').remove()
    }

    const movieData = JSON.parse(localStorage.getItem('movie-'+movieID))

    if (movieData === null) {
      render.error('id undefined')
      return
    }

    const section = document.createElement('section')

    const link = document.createElement('a')
          link.setAttribute('href', '/src')
          link.textContent = 'terug naar overzicht'

    const title = document.createElement('h1')
          title.setAttribute('class', 'title')
          title.textContent = movieData.title

    const heading1 = document.createElement('h3')
          heading1.textContent = 'director'

    const heading2 = document.createElement('h3')
          heading2.textContent = 'producer'

    const heading3 = document.createElement('h3')
          heading3.textContent = 'rotten tomatoes'

    const text = document.createElement('p')
          text.setAttribute('class', 'text')
          text.textContent = movieData.description

    const director = document.createElement('p')
          director.setAttribute('class', 'director')
          director.textContent = movieData.director

    const producer = document.createElement('p')
          producer.setAttribute('class', 'producer')
          producer.textContent = movieData.producer

    const year = document.createElement('p')
          year.setAttribute('class', 'year')
          year.textContent = movieData.date

    const score = document.createElement('p')
          score.setAttribute('class', 'score')
          score.textContent = movieData.rtScore


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

  },
  onload: () => {

    const app = document.getElementById('main')

    const spinner = document.createElement('div')
          spinner.setAttribute('id', 'spinner')

    const bounce1 = document.createElement('div')
          bounce1.setAttribute('class', 'double-bounce1')

    const bounce2 = document.createElement('div')
          bounce2.setAttribute('class', 'double-bounce2')

          app.appendChild(spinner)

          spinner.appendChild(bounce1)
          spinner.appendChild(bounce2)

  },
  error: (err) => {
    console.warn('application err: ',err)

    if(document.getElementById('spinner') != undefined){
      document.getElementById('spinner').remove()
    }

    const app = document.getElementById('main')

    const section = document.createElement('section')

    const link = document.createElement('a')
          link.setAttribute('href', '/src')
          link.textContent = 'terug naar overzicht'

    const title = document.createElement('h1')
          title.setAttribute('class', 'error')
          title.textContent = 'error'

    const text = document.createElement('p')
          text.setAttribute('class', 'text')
          text.textContent = 'Oops... something went wrong'


          app.appendChild(section)

          section.appendChild(title)
          section.appendChild(text)
          section.appendChild(link)
  }
}

export default render
