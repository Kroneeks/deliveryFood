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
      "https://png.pngtree.com/png-clipart/20210808/original/pngtree-big-pizza-png-png-image_6611417.png",
      "https://png.pngtree.com/png-clipart/20210725/original/pngtree-a-big-chicken-pizza--png-png-image_6552825.jpg",
      "https://png.pngtree.com/png-clipart/20220616/original/pngtree-yummy-big-pizza-png-png-image_8071221.png",
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
