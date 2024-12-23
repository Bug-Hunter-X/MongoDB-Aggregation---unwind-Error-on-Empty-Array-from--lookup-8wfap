```javascript
// Assuming 'users' is your collection
db.users.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "purchasedProducts"
    }
  },
  {
    $unwind: "$purchasedProducts" //This will cause an error if a user has not purchased any products
  }
]);
```