# Studio Ghibli API

![Studio Ghibli website](website.png)

## Table of contents
1. [Introduction](#Introduction)
2. [API](#API)
3. [Concept](#Concept)
4. [Hick-ups](#Hick-ups)
5. [To-do](#To-do)
6. [Resources](#Resources)

## Introduction
For this course I chose to work with the Studio Ghibli API. [Studio Ghibli](https://nl.wikipedia.org/wiki/Studio_Ghibli) (株式会社スタジオジブリ) is a Japanese film studio responsible for a lot of anime-movies. Spirited away (2001) is my personal favorite and has been since it came out. This was the main reason I wanted to use this API.

## Concepts
Initially I wanted to use the moviedb API to create a tool for users to browse movies depending on the running time. Using my app users would be able to decide how much time they wanted to spend watching a movie. I found it difficult to think of some limitations (I wouldn't be able to render all the movies ever made) so I started looking for others.

Then I came across this API, and it was love on first sight. I want to show users what Studio Ghibli is and try to tell the stories behind the movies. Users will be able to scroll through time and see the RT score of the movie. These will also be the sort and filter options.

### Design
For the design I'd like to try some sort of horizontal scroll, something like a timeline. Every movie has it's own characters that I'd like to use to tell a story. I could show what characters play in the movies, but I have to set up another request.

## Hick-ups
I struggled a bit with the API connection. At first I tried using a XMLHttpRequest, this worked but I wanted to set it up again using promises. While I was looking for an example I came across the fetch() example. This looked doable, so I gave it a shot. It worked! And I did it myself.

I still want to try using promises only. But I might do this later. This will work for now.

## To-do
- [x] Find API   
- [x] Connect to API
- [x] API connection using fetch()
- [ ] API connection using promises    
- [x] Show data in HTML (overzicht pagina)
- [ ] Show RT score in HTML   
- [ ] Detail page   
- [x] CSS styling   
- [ ] CSS styling using BEM   
- [ ] Horizontal scroll (timeline)
- [ ] Request list of people
- [ ] Implement movie player

## Resources
- [Studio Ghibli API films](https://ghibliapi.herokuapp.com/films)
- [API people](https://ghibliapi.herokuapp.com/people/)  
- [API documentation](https://ghibliapi.herokuapp.com/#)   
- [Studio Ghibli web app example](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/)   
- [Fetch example](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)   

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
