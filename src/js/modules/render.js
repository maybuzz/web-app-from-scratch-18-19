import router from '/src/js/modules/router.js'
import routes from '/src/js/modules/routes.js'

const render = {
  overview: (movies) => {
    console.log('render: overview')

    if(document.getElementById('spinner') != undefined){
      document.getElementById('spinner').remove()
    }

    const btns = document.getElementById('btns')

    const app = document.getElementById('main')

    const btn = document.createElement('a')
          btn.setAttribute('class', 'btn')
          btn.setAttribute('id', 'people')
          btn.textContent = 'characters'

          btns.appendChild(btn)

    btn.addEventListener('click', () => {
      while (app.firstChild) {
          app.removeChild(app.firstChild)
      }
      routes.people()
      btns.removeChild(btn)
    })

    return movies.forEach((movie) => {

      const app = document.getElementById('main')

      const card = document.createElement('article')

      const title = document.createElement('h1')
            title.textContent = movie.title

      const link = document.createElement('a')
            link.setAttribute('href', '#' + movie.id)

      const text = document.createElement('p')
            text.setAttribute('class', 'desc')
            movie.description = movie.description
            movie.description = movie.description.substring(0, 200)
            text.textContent = `${movie.description}...`

            app.appendChild(link)
            link.appendChild(card)

            card.appendChild(title)
            card.appendChild(text)
    })
  },
  people: (people) => {
    console.log('render: people')

    const app = document.getElementById('main')

    if(document.getElementById('spinner') != undefined){
      document.getElementById('spinner').remove()
    }

    const btns = document.getElementById('btns')

    const btn = document.createElement('a')
          btn.setAttribute('class', 'btn')
          btn.setAttribute('id', 'movies')
          btn.textContent = 'movies'

          btns.appendChild(btn)

    btn.addEventListener('click', () => {
      while (app.firstChild) {
          app.removeChild(app.firstChild)
      }
      routes.overview()
      btns.removeChild(btn)

    })

    people = Object.keys(window.localStorage).filter((v) => v.startsWith('people-'))

    return people.forEach((person) => {

      var data = JSON.parse(window.localStorage.getItem(person))

      const app = document.getElementById('main')

      const card = document.createElement('article')

      const name = document.createElement('h1')
            name.textContent = data.name

      const link = document.createElement('a')
            link.setAttribute('href', '#' + data.id)

            app.appendChild(link)
            link.appendChild(card)

            card.appendChild(name)
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

    const section1 = document.createElement('section')
          section1.setAttribute('class', 'left')

    const section2 = document.createElement('section')
          section2.setAttribute('class', 'right')

    const link = document.createElement('a')
          link.setAttribute('href', '/src')
          link.setAttribute('class', 'link')
          link.textContent = 'terug naar overzicht'

    const title = document.createElement('h1')
          title.setAttribute('class', 'title')
          title.textContent = movieID[1][1]

    const heading1 = document.createElement('h3')
          heading1.setAttribute('class', 'heading')
          heading1.textContent = 'director'

    const heading2 = document.createElement('h3')
          heading2.setAttribute('class', 'heading')
          heading2.textContent = 'producer'

    const heading3 = document.createElement('h3')
          heading3.setAttribute('class', 'heading')
          heading3.textContent = 'rotten tomatoes'

    const heading4 = document.createElement('h3')
          heading4.setAttribute('class', 'heading')
          heading4.textContent = 'year'

    const text = document.createElement('p')
          text.setAttribute('class', 'text')
          text.textContent = movieID[2][1]

    const director = document.createElement('p')
          director.setAttribute('class', 'info')
          director.textContent = movieID[3][1]

    const producer = document.createElement('p')
          producer.setAttribute('class', 'info')
          producer.textContent = movieID[4][1]

    const year = document.createElement('p')
          year.setAttribute('class', 'info')
          year.textContent = movieID[5][1]

    const score = document.createElement('p')
          score.setAttribute('class', 'info')
          score.textContent = movieID[6][1]


          app.appendChild(section1)
          app.appendChild(section2)

          section1.appendChild(link)
          section1.appendChild(title)
          section1.appendChild(text)

          section2.appendChild(heading4)
          section2.appendChild(year)
          section2.appendChild(heading1)
          section2.appendChild(director)
          section2.appendChild(heading2)
          section2.appendChild(producer)
          section2.appendChild(heading3)
          section2.appendChild(score)

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

    const sectionErr = document.createElement('section')
          sectionErr.setAttribute('class', 'sectionErr')

    const link = document.createElement('a')
          link.setAttribute('href', '/src')
          link.setAttribute('class', 'link')
          link.textContent = 'terug naar overzicht'

    const title = document.createElement('h1')
          title.setAttribute('class', 'error')
          title.textContent = 'error'

    const text = document.createElement('p')
          text.setAttribute('class', 'textErr')
          text.textContent = 'Oops... something went wrong'


          app.appendChild(sectionErr)

          sectionErr.appendChild(title)
          sectionErr.appendChild(text)
          sectionErr.appendChild(link)
  }
}

export default render
