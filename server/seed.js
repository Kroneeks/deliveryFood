const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productsCollection = client
      .db("food-ordering")
      .collection("products");
    const categoriesCollection = client
      .db("food-ordering")
      .collection("categories");

    productsCollection.drop();
    let categories = ["breakfast", "lunch", "dinner", "drinks"].map(
      (category) => {
        return { name: category };
      }
    );
    await categoriesCollection.insertMany(categories);

    let imageUrls = [
      "https://res.cloudinary.com/dk3k7h7oi/image/upload/v1658767417/carbonara_xds5oq.png",
      "https://res.cloudinary.com/dk3k7h7oi/image/upload/v1658767417/Meat__Cheese_small_yy1czd.png",
      "https://res.cloudinary.com/dk3k7h7oi/image/upload/v1658767417/4_sezona_259x259_byd4lk.png",
      "https://res.cloudinary.com/dk3k7h7oi/image/upload/v1658767417/myunkhenskaya_small_sw5arq.png",
      "https://res.cloudinary.com/dk3k7h7oi/image/upload/v1658767417/Beef_BBQ_small-min_svombr.png",
    ];

    let products = [];
    for (let i = 0; i < 10; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageUrl: _.sample(imageUrls),
      };
      products.push(newProduct);
    }
    await productsCollection.insertMany(products);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
