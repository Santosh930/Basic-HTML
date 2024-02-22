// Import the required modules
const mysql = require('mysql2');
// const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', // Change this if your database is hosted elsewhere
  user: 'root',      // Your MySQL username
  password: 'Sain.123@',  // Your MySQL password
  database: 'node' // Your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Example query: Select all users from the 'santosh' table
// var sql = "INSERT INTO santosh (id,fname, lname) VALUES ?";
//   var values = [
//     [5,'John', 'Highway 71'],
//     [6,'Peter', 'Lowstreet 4'],
//     [7,'Amy', 'Apple st 652'],
//     [8,'Hannah', 'Mountain 21'],
//     [9,'Michael', 'Valley 345'],
//     [10,'Sandy', 'Ocean blvd 2'],
//     [11,'Betty', 'Green Grass 1'],
//     [12,'Richard', 'Sky st 331'],
//     [13,'Susan', 'One way 98'],
//     [14,'Vicky', 'Yellow Garden 2'],
//     [15,'Ben', 'Park Lane 38'],
//     [16,'William', 'Central st 954'],
//     [17,'Chuck', 'Main Road 989'],
//     [18,'Viola', 'Sideway 1633']
//   ];
connection.query("SELECT * FROM santosh limit 5", (err, results) => {
  if (err) {
    console.error('Error executing MySQL query:', err);
    return;
  }
  console.log('Santosh:', results);
});

// Close the connection when done
connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection:', err);
    return;
  }
  console.log('Connection to MySQL database closed');
});
