import { router } from '/js/router.js'
import { api } from '/js/api.js'

const routes = {
  overview: () => {

    render.onload()

    api.getData()
    .then((allData) => {
        const cleanData = api.formatData(allData)
        const renderOverview = render.overview(cleanData)
      })
      .catch((err) => { console.warn(err); render.error('data error') })
  },
  detail: (id) => {

    render.onload()

    const renderDetail = render.detail(id)

  }
}

export default { routes }
