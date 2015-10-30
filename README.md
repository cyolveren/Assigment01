# Assignment-1-Example

Example for Assignment 1 of data flowing through from Mongo to UI

###To get this up and running:

1. Import the `data.json` file, located in the data_sample folder, into mongo.
  * cd into the data_sample directory: `cd data_sample`

2. Use the following command at the command line prompt (not in the mongo shell):
  * `mongoimport --db graph-data-db --collection graph-data-collection --type json --file data.json --jsonArray`

4. Start the Mongo Daemon:
   * `mongod --smallfiles`

5. Check to make sure you have data:
  * Start the mongo shell client by typing `mongo` at the command prompt
  * Type `use graph-data-db`
  * Type `db['graph-data-collection'].find({}).pretty()`
  * Now you will know if you have data :-)

6.  Next `cd ..` to get out of the data_sample directory

7. Run `npm install`

8. Run `npm start`

9. Select `Preview Running Application`
  * And voila, you should see a line graph!
