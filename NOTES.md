# Full Stack Notes App Excercise

This is the video that i was following [tutorial](https://youtu.be/2MoSzSlAuNk?si=fABQMOea7Awv0shh)
I don't fully grasp all of what i am doing here but it will be good to reference later on. It would be good to design my own full stack website with data visualization and a postgreSQl database.

# App

The app itself is pretty self explanitory. Its a TS app and most of the information for setting that up is in my other JS project ironicly... i will get around to organizing my repos.

# Backend 

This is what i do not fully understand but i will do my best to lay out the steps

1. Create the backend api for the app with `npm init` and `npm i ...` a bunch some stuff
- nodemon - for hotreloading (you will have to put this `"start": "npx nodemon"`) into the scripts section of the package.json for this to work
- typeescript - i think this might be for compiler stuff?
- ts-node - types for node
- cors - thi
- prisma - this talks to the database without SQL commands
- express - creates api end-endpoints to handle requests
- cors - helps with browser cors issues?

by default mariadb does not have access to the databases, you have to run mariadb with `sudo mariadb -u root -p`

to open a databse type `USE databaseName;`
to show all the tables `SHOW TABLES;`
to show contents of table `SELECT * FROM tableName`
to add entry to table ` INSERT INTO tableName (column1,column2,...) VALUES (value1,value2,...)`

you can use `curl` to make api calls but it sounds like postman is a better option

*If we used postgre then we would be using a common stack PERN, for PostgreSQL - Express - React - Node*


