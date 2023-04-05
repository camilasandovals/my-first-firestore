import { db } from '../dbConnect.js'

//How to read a document from Firestore:
db.collection('products').doc('K0Ufld574Z095oRHommu').get()
    .then(doc => {
        console.log(doc.data());
    })
    .catch(err => console.log(err))
    //.catch(console.log)  the above line does the same
