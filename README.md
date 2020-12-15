# Assignment 1 - ReactJS app.

Name: Ziqi Zhou

## Features.

 + Feature 1 - Dynamic and interactive UI
 + Feature 2 - 4 new TMDB endpoints
 + Feature 3 - Extensive data hyperlinking.
 + Feature 4 - React UI libraries: antd design
 + Feature 5 - 3rd party authentication: Firebase
 + Feature 6 - Routing
 + Feature 7 - 2/3 new views
 + Feature 8 - Advanced Web Form processing (useForm).

## Setup requirements (If required).

+ npm i firebase
+ npm i @react-firebase/auth
+ npm install antd --save
+ npm install --save react-alert
+ npm install --save react-alert react-alert-template-basic

## API Data Model.

+ https://api.themoviedb.org/3/movie/${id}/reviews - get the user reviews for a movie.
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies in theatres.
+ https://api.themoviedb.org/3/movie/now_playing - get a list of movies in theatres.
+ https://api.themoviedb.org/3/movie/top_rated - get the top rated movies on TMDb.
+ https://api.themoviedb.org/3/person/popular - get the list of popular people on TMDb.
+ https://api.themoviedb.org/3/person/${id} - get the primary person details by id.
+ https://api.themoviedb.org/3/person/${id}/combined_credits - get the movie and TV credits together in a single response.

## App Design.

### Component catalogue (If required).
![][components]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

>![][MovieList]
>
>Shows the List of different types of movies including popular, upcoming, top-rated and now-playing.
>
>![][Authentication]
>
>Shows the login and sign up functions with firebase authentication.
>
>![][logout]
>
>Shows the logout button used to log out.
>
>![][peopleList]
>
>Shows the popular people list and you can click each image to the personDetail page.
>
>![][personDetail]
>
>Shows the detailed information of one person.
>
>![][SiteHeader]
>
>Shows the drag and drop menu including different movie types.

## Routing.

+ /signout - displays the logout button.
+ /login - displays the firebase login and signup.
+ /movies/now-playing - displays the now-playing movie list.
+ /movies/top-rated - displays the top-rated movie list.
+ /people - displays the popular people list.
+ /people/:id - displays the person details from people list.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink] 
> Clicking a card causes the display of that person's details.

![][homeLink]
>Clicking the 'TMDB' image will return to the popular movie list page.
>
>![][logLink]
>
>Clicking the log in button will display the logout page.
>
>![][externalLink]
>
>Clicking the house icon will display a external website named TMDB.

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Ziqi Zhou

## App Features.

+ Login page - shows the log in and sign up functions by firebase authentication. Input the username and password to log in.

Tests: cypress/integration/login-page.spec.js

![][Authentication]

+ navigation: Display each page jump

Tests: cypress/integration/navigation.spec.js

![][SiteHeader]

+ People List page: Displays the list of people cards.

Tests: cypress/integration/person-page.spec.js

![][peopleList]

+ Person Details page: displays the detailed information of one person.

Tests: cypress/integration/personDetails-page.spec.js

![][personDetail]

## Testing.

Cypress Dashboard URL:  https://dashboard.cypress.io/projects/1oae7d/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).

+ cypress/integration/login-page.spec.js - test when the username is invalid, test when the password is invalid, test both of them are invalid.

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

Code-spliting



List reference material links (articles/blogs).

[components]: ./public/components.png
[Authentication]: ./public/Authentication.png
[logout]: ./public/logout.png
[MovieList]: ./public/MovieList.png
[peopleList]: ./public/peopleList.png
[personDetail]: ./public/personDetail.png
[SiteHeader]: ./public/SiteHeader.png
[cardLink]: ./public/cardLink.png
[logLink]: ./public/logLink.png
[homeLink]: ./public/home.png
[externalLink]: ./public/externalLink.png