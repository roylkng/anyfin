Pre-requisites
Requires mongodb running locally
Requres node vesion 8 or above.

Steps to run the app

1) Run backend server
#go to anyfin directory
$ cd anyfin
# install backend dependecies
$ npm i
# start server
$ npm start

2) Run front end client
# go to client directory
& cd anyfin_client
# install frontend dependecies
$ npm i
# start server
$ npm start


Future Changes
Implement bucket based request limiter rather than moving window.
Database queries should moved to data service layer and countries details can be stored locally.
Services & controllers were not required but can be structured with the rising complexity of code.
Front-end appearance and user experience can be improved significantly.
There is no register user API, app creates a default user when server starts with username: "julia" , and password: "123"
