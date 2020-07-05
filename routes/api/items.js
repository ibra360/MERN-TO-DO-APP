const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

// Get api/ itemc...Public...to get all items

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => console.log(err));
});

// post api/ itemc...Public...to post a item

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

// delete api/items/:id ...Public...to delete a item

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ sucess: true })))
    .catch((err) => console.log(err));
});

module.exports = router;
