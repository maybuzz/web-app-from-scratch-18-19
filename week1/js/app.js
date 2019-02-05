'use strict'

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('error');
  }
}

request.send();

// 'use strict'
//
// var request = new XMLHttpRequest()
// var url = 'https://ghibliapi.herokuapp.com/films'
//
// request.open('GET', url, true)
//
// request.addEventListener("load", data())
//
// function data () {
//
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       console.log(movie.title)
//     });
//   } else {
//     console.log('error')
//   }
// }
//
// request.send()
