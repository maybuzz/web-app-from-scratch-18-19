// router
var router = {
  overview: function(){
    // stap 2
    console.log('stap 2')
    api.get('overview')
  },
  detail: function(id){}
}

// API
var api = {
  get: function(route){
    // stap 3
    // fetch data from api
    console.log('stap 3')
    this.parse(response)  // this == 'api', is het obj

    render.overview()
  },
  parse: function(response){
    // response omzetten naar data, json.parse etc
    // stap 4
    console.log('stap 4')
    this.store(data)
  },
  store: function(){
    // save data to object/localStorage
    // stap 5
    console.log('stap 5')
    render.overview(data)
  },
  filter: function(){}
}

// render
var render = {
  overview: function(){},
  detail: function(){},
  toggle: function(){}
}

// stap 1
// starting application, loading 'overview page'
console.log('stap 1')
router.overview()
