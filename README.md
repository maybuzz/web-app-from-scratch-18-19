# Web App From Scratch @cmda-minor-web 18-19

## Summary
A single page web app using the Studio Ghibli API. This application has a overview page to show all the movies. The detail page shows more information about movie.

![Studio Ghibli website](/img/website-final.png)

## Table of contents
1. [Live demo](#Live-demo)
2. [Install](#Install)
3. [Features](#Features)
4. [API](#API)
5. [Actor diagram](#Actor-diagram)
6. [Interaction](#Interaction)
8. [To-do](#To-do)
9. [Resources](#Resources)

## Live demo
[Click here](https://maybuzz.github.io/wafs) to see my live demo.

## Install
This project doesn't have ant dependencies. Fork this project and clone it using the terminal. Start a live-server on the src folder to open the application in your browser.

```bash
  # Open your terminal and insert this link to clone this repo to your device
  git clone https://github.com/your-user-name/web-app-from-scratch-18-19/src
```

## Features
- Overview page with a collection of Studio Ghibli movies from the [Studio Ghibli API](https://ghibliapi.herokuapp.com/films)   
- Detail page for each movie   
- Router   
- `textContent` to generate HTML   
- Loading state   
- Error page   

## API
Here I use `fetch` to connect to the API. After fetching the data I return the data in JSON so I can work with the data objects. If something goes wrong (the API is offline) I use `catch` to render the error page and show the error in the console.

```js
  getData: () => {
    return fetch('https://ghibliapi.herokuapp.com/films/')
    .then((response) => { return response.json() })
    .catch((err) => { console.warn(err); render.error('api error') })
  }
```

When the data from the API is collected I use `.map()` to format the data in the correct way. This will make sure my data is structured the way I want it to be and makes it easier to work with the data.

Last but not least I store the formatted data in localStorage using `window.localStorage.setItem()`. I also gave it a prefix `movie-` and add the ID of the movie to every prefix. This way I know exactly which movie to collect from localStorage when I need to.

```js
  formatData: (data) => {

    const itemList = data.map((item) => {

      const format = {
        id: item.id,
        title: item.title,
        description: item.description,
        date: item.release_date,
        rtScore: item.rt_score,
        director: item.director,
        producer: item.producer,
        url: item.url
      }

      return format

      window.localStorage.setItem('movie-'+item.id,JSON.stringify(format))
    })
  }
}
```

## Actor diagram
Here you can see my actor diagram. This contains the main flow of my application. The actors show the object literals and functions I used in my code.
![Actor diagram](/img/actor-final.png)   

## Interaction
Here I used parts of my [actor diagram](#Actor-diagram) and combined these with the interactions of my app. This will tell users everything they need to know about the flow of the app. It shows all the functionalities and how they interact with each other.
![Interaction diagram](/img/interaction-final.png)   

## To-do
- [x] Connect to API   
- [x] Overview page   
- [x] Detail page   
  - [ ] Link to next movie   
- [ ] Add another API call   
- [x] Setup router by yourself   
- [ ] Setup router using routie   
- [x] Use textContent instead of inner HTML
- [ ] Use **template engine**   
- [x] Use object literals
- [ ] Use modules   
- [x] Refactor code   
- [x] States   
  - [x] Error page   
  - [x] Loading state
- [ ] **Actor diagram**   
- [ ] **Interaction diagram**   
- [x] Styling   
- [ ] Extra   
  - [ ] Filter and sort options   
  - [ ] Collection object   

## Resources
- [Studio Ghibli API films](https://ghibliapi.herokuapp.com/films)
- [API list of people](https://ghibliapi.herokuapp.com/people/)  
- [API documentation](https://ghibliapi.herokuapp.com/#)   
- [Studio Ghibli web app example](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/)   
- [Fetch example](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)   

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
