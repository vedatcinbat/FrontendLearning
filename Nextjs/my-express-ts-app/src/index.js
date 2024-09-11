const express = require("express");

const app = express();

// add json body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  res.status(200).json(users);
});

app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Apple', price: 1.2 },
        { id: 2, name: 'Banana', price: 0.8 },
        { id: 3, name: 'Watermelon', price: 4.5 },
        { id: 4, name: 'Orange', price: 1.0 },
    ];

    res.status(200).json(products);
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
