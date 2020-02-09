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
Database queries should moved to data service layer and contrues details can be stored locally.
Service controllers were not required but can be deployed with the rising complexity of code.
Front-end appearance and user experience can be improved significantly.
