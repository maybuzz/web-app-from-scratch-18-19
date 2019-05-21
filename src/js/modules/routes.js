import router from '/src/js/modules/router.js'
import render from '/src/js/modules/render.js'
import api from '/src/js/modules/api.js'

const routes = {
  overview: () => {
    console.log("routes: get overview")

    render.onload()

    api.getData()
    .then((allData) => {
        const renderOverview = render.overview(allData)
      })
      .catch((err) => {
        console.warn(err)
        render.error('data error')
      })

  },
  detail: (url) => {

    console.log("routes: get detail")

    render.onload()

    api.getDetail(url)
    .then((allData) => {
        const cleanData = api.formatData(allData)
        const renderDetail = render.detail(cleanData)
      })
      .catch((err) => {
        console.warn(err)
        render.error('data error')
      })

  },
  people: (people) => {

    console.log("routes: get people")

    render.onload()

    api.getPeople()
    .then((allPeople) => {
        const cleanData = api.formatPeople(allPeople)
        const renderPeople = render.people(cleanData)
      })
      .catch((err) => {
        console.warn(err)
        render.error('data error')
      })
  }
}

export default routes
