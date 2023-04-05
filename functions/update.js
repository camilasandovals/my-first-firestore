import { db } from '../dbConnect.js';

//How to update a document in Firestore:
db.collection('products').doc('K0Ufld574Z095oRHommu').update({
    inventory: 5,
    customerFavorite: true //if the property does not exist 
})

