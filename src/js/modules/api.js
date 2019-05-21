import app from '/src/js/modules/app.js'

const api = {
  getData: () => {
    console.log("api: get data")
    return fetch(app.config.url)
    .then((response) => { return response.json() })
    .catch((err) => { console.warn(err)
      .error('api error') })
  },
  getDetail: (id) => {
    console.log("api: get detail")
    return fetch(app.config.url + id)
    .then((response) => { return response.json() })
    .catch((err) => { console.warn(err)
      .error('api error') })
  },
  getPeople: () => {
    return fetch(app.config.people)
    .then((response) => { return response.json() })
    .catch((err) => { console.warn(err)
      .error('api error') })
  },
  formatData: (data) => {
    console.log("api: format data")
    const itemList = Object.entries(data).sort((a, b) => {

      const format = {
        id: data.id,
        title: data.title,
        description: data.description,
        date: data.release_date,
        rtScore: data.rt_score,
        director: data.director,
        producer: data.producer
      }

      return format

    })
      return itemList
  },
  formatPeople: (people) => {
    const characterList = people.map((person) => {

      const format = {
        id: person.id,
        name: person.name,
        gender: person.gender,
        age: person.age,
        eyes: person.eye_color,
        hair: person.hair_color,
        url: person.url
      }

      window.localStorage.setItem('people-'+person.id,JSON.stringify(format))

      return format

    })
  }
}

export default api
