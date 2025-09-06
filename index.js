const express = require("express");
const cors = require("cors");  // import CORS
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  // enable CORS for all routes

const dealers = [
  { id: 1, productId: 1, name: "Dealer A", price: 1000 },
  { id: 2, productId: 1, name: "Dealer B", price: 950 },
  { id: 3, productId: 2, name: "Dealer C", price: 500 }
];

app.get("/dealers", (req, res) => {
  res.json(dealers);
});

app.listen(PORT, () => {
  console.log(`Dealer Pricing service running on port ${PORT}`);
});
