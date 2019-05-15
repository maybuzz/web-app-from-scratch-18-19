const app = {
  init: () => {
    router.handle()
    router.hash()
  },
  config: {
    url: `https://ghibliapi.herokuapp.com/films/`
  }
}

export { app }
