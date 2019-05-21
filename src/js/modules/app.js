import router from '/src/js/modules/router.js'
import api from '/src/js/modules/api.js'

const app = {
  init: () => {
    router.handle()
    router.hash()
  },
  config: {
    url: 'https://ghibliapi.herokuapp.com/films/',
    people: 'https://ghibliapi.herokuapp.com/people/'
  }
}

export default app
