import app from '/src/js/modules/app.js'
import routes from '/src/js/modules/routes.js'
import render from '/src/js/modules/render.js'

// router handler and hash
const router = {
  handle: () => {
    let hash = window.location.hash.split('#')[1]

    if (window.localStorage.getItem('movie-'+hash)) {
      console.log('router: handle for '+hash)
      routes.detail(hash)
    } else {
      console.log('router: handle for overview' );
      window.location.hash = ''
      routes.overview()
    }
  },
  // hash change control
  // hash + id = back to handle, hash + invalid id = error
  hash: () => {
    window.addEventListener('hashchange', () => {

      let movieID = window.location.hash.substr(1)
      if (window.localStorage.getItem('movie-'+window.location.hash.split('#')[1])){
        router.handle(movieID)
      } else {
        render.detail(movieID)
      }
    })
  }
}

export default router
