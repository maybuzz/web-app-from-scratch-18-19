import { router } from '/src/js/modules/router.js'
import { render } from '/src/js/modules/render.js'
import { api } from '/src/js/modules/api.js'

export const routes = {
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
