const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  try {
    console.log(`Fetching restaurants with cuisine: ${req.params.cuisine}`);
    const restaurants = await Restaurant.find({
      cuisine: { $regex: new RegExp(req.params.cuisine, "i") }
    });
    console.log('Restaurants fetched:', restaurants);
    if (restaurants.length === 0) {
      return res.status(404).json({ message: "No restaurants found for this cuisine." });
    }
    res.json(restaurants);
  } catch (err) {
    console.error('Error fetching restaurants by cuisine:', err.message);
    res.status(500).json({ error: err.message });
  }
});

router.get("/restaurants", async (req, res) => {
  try {
    console.log('Fetching all restaurants or sorted by restaurant_id');
    const sortOrder = req.query.sortBy === "DESC" ? -1 : 1;
    const restaurants = await Restaurant.find({}, { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 })
                                        .sort({ restaurant_id: sortOrder });
    console.log('Restaurants fetched:', restaurants);
    if (restaurants.length === 0) {
      return res.status(404).json({ message: "No restaurants found." });
    }
    res.json(restaurants);
  } catch (err) {
    console.error('Error fetching restaurants:', err.message);
    res.status(500).json({ error: err.message });
  }
});

router.get("/restaurants/Delicatessen", async (req, res) => {
  try {
    console.log('Fetching restaurants with cuisine Delicatessen and city not Brooklyn');
    const restaurants = await Restaurant.find(
      { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
      { _id: 0, cuisine: 1, name: 1, city: 1 }
    ).sort({ name: 1 });
    console.log('Restaurants fetched:', restaurants);
    if (restaurants.length === 0) {
      return res.status(404).json({ message: "No Delicatessen restaurants found." });
    }
    res.json(restaurants);
  } catch (err) {
    console.error('Error fetching Delicatessen restaurants:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
