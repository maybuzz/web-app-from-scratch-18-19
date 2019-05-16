import router from '/src/js/modules/router.js'

const app = {
  init: () => {
    router.handle()
    router.hash()
  },
  config: {
    url: 'https://ghibliapi.herokuapp.com/films/'
  }
}

export default app
