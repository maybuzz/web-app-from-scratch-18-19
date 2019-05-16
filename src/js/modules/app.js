import { router } from '/src/js/modules/router.js'

export const app = {
  init: () => {
    router.handle()
    router.hash()
  },
  config: {
    url: 'https://ghibliapi.herokuapp.com/films/'
  }
}
