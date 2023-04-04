import { db } from "./index.js"

const candy3 = {
    name: "Chocorramo",
    UnitPrice: 3.99,
    size: "10 oz",
    color: "dark",
    inventory: 20,
    productNumber: 3
}

db.collection('products').add(candy2)
     .then((doc) => {
         console.log("added doc: " + doc.id)
     })
     .catch(err => console.log(err))


