import { db } from '../dbConnect.js'

//How we really get to get a whole collection:
db.collection('products').get()
    .then(collection => {
        const productList = collection.docs.map(doc=> ({...doc.data(), id: doc.id}));
        console.table(productList)
    })
    .catch(console.log)


// //How to get a whole collection:
// db.collection('products').get()
//     .then(collection => {
//         const productList = collection.docs.map(doc=> doc.data());
//         console.table(productList)
//     })
//     .catch(console.log)