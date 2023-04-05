import { db } from '../dbConnect.js';

//How to delete a document from Firestore:
db.collection('products').doc('K0Ufld574Z095oRHommu').delete()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => console.log(err))

    