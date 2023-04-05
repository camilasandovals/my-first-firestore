import { db } from "../dbConnect.js"

const candy3 = {
    name: "Chocorramo",
    UnitPrice: 3.99,
    size: "10 oz",
    color: "dark",
    inventory: 20,
    productNumber: 3
}

db.collection('products').add(candy3)
     .then((doc) => {
         console.log("added doc: " + doc.id)
     })
     .catch(err => console.log(err))


