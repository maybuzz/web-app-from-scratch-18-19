import { app } from '/src/js/modules/app.js'

export const api = {
  getData: () => {
    return fetch(app.config.url)
    .then((response) => { return response.json() })
    .catch((err) => { console.warn(err)
      .error('api error') })
  },
  formatData: (data) => {
    const itemList = data.map((item) => {

      const format = {
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

      return format

    })
  }
}
