module.exports = function (db, app, ObjectID) {
  app.post("/add", (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    product = req.body;
    console.log(product)
    const collection = db.collection("products");

    collection.find({ id: product.id }).count((err, count) => {
      console.log(count);
      if (count == 0) {
        collection.insertOne(product, (err, dbres) => {
          if (err) throw err;
          //send back to client number of items instered and no error message
          res.send(true);
        });
      } else {
        //On Error send back error message
        res.send(false);
      }
    });
  });

  app.get('/lists', function (req, res) {

    const collection = db.collection('products');
    collection.find({}).toArray((err, data) => {

      res.send(data);
    })
  })

  app.post("/delete", (req, res) => {

    if (!req.body) {
      return res.sendStatus(400);
    }
    console.log(req.body);
    console.log("sdfsdfsdfsdfdsf")
    const collection = db.collection('products');
    productid = req.body.id;
    var objectid = new ObjectID(productid);


    collection.deleteOne({ _id: objectid }, (err, docs) => {
      collection.find({}).toArray((err, data) => {
        res.send(data);
        console.log(data);
      })
    })
  })

  app.post("/getItem", (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }


    product = req.body.id
    console.log(req.body);


    const collection = db.collection("products");
    var objectId = new ObjectID(product);
    collection.find({ _id: objectId }).limit(1).toArray((err, data) => {

      res.send(data);
    });



  })

  app.post("/update", (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }


    product = req.body
    console.log(product)
    console.log("asdlkfnweof")


    const collection = db.collection("products");
    var objectId = new ObjectID(product._id);
    collection.updateOne(
      { _id: objectId },
      { $set: { name: product.name, units: product.units, price: product.price, description: product.description } },
      () => {
        res.send(true);
      }
    );



  })
};
