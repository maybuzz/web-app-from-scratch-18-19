import app from '/src/js/modules/app.js'
import api from '/src/js/modules/api.js'
import routes from '/src/js/modules/routes.js'
import render from '/src/js/modules/render.js'

// router handler and hash
const router = {
  handle: () => {
    let hash = window.location.hash.split('#')[1]

    if (hash) {
      console.log('router: handle for '+hash)
      routes.detail(hash)
    } else if (window.localStorage.getItem('people-'+hash)) {
      console.log('router: handle for people '+hash);
      window.location.hash = ''
      routes.people()
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

      if (movieID){
        router.handle(movieID)
      } else if (window.localStorage.getItem('people-'+window.location.hash.split('#')[1])) {
        
      } else {
        render.error(err)
      }
    })
  }
}

export default router
