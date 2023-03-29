//  import the tools we need from firebase admin 
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//  import our credentials from a secret file 
import { credentials } from "./credentials.js";

//  connect to our firebase project 
initializeApp({
    credential:cert(credentials)
});

//  connect to firestore database
const db = getFirestore();

//  add a product to our products collection
const candy2 = {
    name: "Twix",
    UnitPrice: 2.99,
    size: "12 oz",
    color: "gold",
    inventory: 288,
    productNumber: 2
}

//How to add a document to firestore
// db.collection('products').add(candy2)
//     .then((doc) => {
//         console.log("added doc: " + doc.id)
//     })
//     .catch(err => console.log(err))


//How to read a document from Firestore:
db.collection('products').doc('fGAuwNTN2IpcDBISTVYa').get()
    .then(doc => {
        console.log(doc.data());
    })
    .catch(err => console.log(err))
    //.catch(console.log)  the above line does the same


//How to get a whole collection:
db.collection('products').get()
    .then(collection => {
        const productList = collection.docs.map(doc=> doc.data());
        console.table(productList)
    })
    .catch(console.log)

//How to delete a document from Firestore:
db.collection('products').doc('fGAuwNTN2IpcDBISTVYa').delete()
    .then(doc => {
        console.log(doc.data());
    })
    .catch(err => console.log(err))
