```javascript
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
    $unwind: {
      path: "$purchasedProducts",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      _id: 1,
      username: 1,
      purchasedProducts: {
        $ifNull: [ "$purchasedProducts", { productName: "None" } ]
      }
    }
  }
]);
```