// Is saved to:
// db: foodcheck
// collection: businesses

const BusinessModel = require("./models/Business");

BusinessModel.create({
  "business_id": "123",
  "name": "Charred Steaks Hollywood",
  "address": "123 Main St",
  "city": "New York City",
  "stars": 4,
  "is_open": 1,
  "categories": ["Casual", "American"],
  "food_check_score": 50,
  "dollar_sign": 3,
  "review_count": 900
});