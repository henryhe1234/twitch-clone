# Management System

## Introduction

Twitch-Clone is a project focus on using React.js, React-router,Redux and RESTful API to achieve data manipulation and transmission between front-end and back-end. It use technique like Redux form so developer can manipulate data in the form and also Google OAuth so user can login with google account. Streaming video use rtmpserver so user can make streaming video in his own channel.Or he can browse other's stream.

## Setup
In back-end
```sh
cd api
npm install
npm start
```
In this way, user create JSON server in back-end
create a new database in elephantSQL

In front-end
```sh
cd client
npm install
npm start

```
In this way, user connect to react and look at the website in browser
## Start the server

Open two terminals, one in `express-back-end`, one in `react-front-end`

In `express-back-end` 

run `npm run go`

In `react-front-end`

run `npm start`

## Log in

In the login page, type `Henry` and you will log in as manager, type `Alice` and you will log in as employee

## Screenshots
!["Screenshot of Manager Mode and group page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.12.37%20PM.png?raw=true)
!["Screenshot of Manager Mode and assign task page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.13.03%20PM.png?raw=true)
!["Screenshot of profile page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.13.24%20PM.png?raw=true)
!["Screenshot of employee page and view task page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.13.46%20PM.png?raw=true)