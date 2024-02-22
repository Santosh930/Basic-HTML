const { MongoClient } = require('mongodb');
const mongodb=require('mongodb');
console.log(mongodb);

// Connection URI
const uri = 'mongodb://localhost:27017'; // Default MongoDB URI

// Database Name
const dbName = 'node'; // Change this to your database name

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB server');
    
    // Select the database
    const db = client.db(dbName);
    
    // Do something with the database (e.g., perform CRUD operations)
    // For example, you can insert a document into a collection
    const collection = db.collection('santosh');
    await collection.insertOne({ name: 'santosh' });
    
    // Close the connection when done
    await client.close();
    console.log('Connection to MongoDB server closed');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// // Call the connectDB function
connectDB();


//insert Many




//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   const { MongoClient } = require('mongodb');

// // Connection URI
// const uri = 'mongodb://localhost:27017'; // Default MongoDB URI

// // Database Name
// const dbName = 'w3School'; // Change this to your database name

// // Create a new MongoClient
// const client = new MongoClient(uri);

// // Connect to the MongoDB server
// async function connectDB() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log('Connected to MongoDB server');
    
//     // Select the database
//     const db = client.db(dbName);
    
//     // Do something with the database (e.g., perform CRUD operations)
//     // For example, you can insert a document into a collection
//     const collection = db.collection('santosh');
//     await collection.insertMany(myobj,(err,res)=>{
//       if(err) throw err;
//       console.log(res.insertedCount);
//     });
    
//     // Close the connection when done
//     await client.close();
//     console.log('Connection to MongoDB server closed');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// // // Call the connectDB function
// connectDB();
  

