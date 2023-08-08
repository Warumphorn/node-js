const express = require('express');
const axios = require('axios');
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const PORT = 5000;

/**************************************************************************/
//GET
app.get("/", function (request, response) {
    response.send("Hello World")
})

//GET
app.get("/users", async (request, response) => {

    const users = await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((ddd) => {
            return ddd.data
        })

    response.send(users)
})
/**************************************************************************/
//PUT
app.put("/product/update", function (req, response) {
    const { id, title } = req.body

    fetch('https://dummyjson.com/products/' + id, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title
        })
    })
        .then(res => res.json())
        .then(res => response.json(res));
})
/**************************************************************************/
//POST
app.post("/product/add", (request, response) => {

    //Data BODY JSON TEST
    // {
    //     "title": "iPhone 15",
    //     "description": "An apple mobile which is nothing like apple",
    //     "price": 549,
    //     "discountPercentage": 12.96,
    //     "rating": 4.69,
    //     "stock": 94,
    //     "brand": "Apple",
    //     "category": "smartphones",
    //     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    //     "images": [
    //         "https://i.dummyjson.com/data/products/1/1.jpg",
    //         "https://i.dummyjson.com/data/products/1/2.jpg",
    //         "https://i.dummyjson.com/data/products/1/3.jpg",
    //         "https://i.dummyjson.com/data/products/1/4.jpg",
    //         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    //     ]
    // }
    
    const payload = request.body

    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
})
    .then(res => res.json())
    .then(res => response.json(res));

})
/**************************************************************************/
//DELETE
app.delete("/product/delete", (request, response) => {
    const { id } = request.body

    fetch('https://dummyjson.com/products/' + id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => response.json(res));
})
/**************************************************************************/
//START THE APPLICATION
app.listen(PORT, () => {
    console.log("This App is running on port : " + PORT);
})