const express = require('express');
const app = express();

const dealers = [
  {id: 1, name: "Dealer A", productId: 1, price: 1000},
  {id: 2, name: "Dealer B", productId: 1, price: 950},
  {id: 3, name: "Dealer C", productId: 2, price: 500}
];

app.get("/dealers", (req, res) => {
    res.json(dealers);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Dealer Pricing Microservice running");
});
