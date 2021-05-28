require('dotenv').config();
const Product = require('./app/models/product');
const mongoose = require('mongoose');
const {LoremIpsum} = require('lorem-ipsum');


const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

function generateNumber(n){
    return parseInt(Math.random()*n);
}

const generateRandomProducts = (number)=>{
    let category = ['fashion', 'mobile and tablets', 'consumer electronics', 'books', 'baby products', 'grocerries', 'home furnishings', 'jewelry'];
    const categories = category.length;
    let products = [];
    for (let i=0;i<number;i++){
        products.push({
            name: lorem.generateWords(generateNumber(3)+1),
            description: lorem.generateSentences(generateNumber(3)+1),
            category: category[generateNumber(categories)],
            price: (generateNumber(100)+1)*50 - 1
        });
    }
    Product.insertMany(products).then(_=>{
        console.log("Products saved");
    }).catch(error=>{
        console.log(error);
    })
}

const deleteProducts = ()=>{
    Product.deleteMany({}).then(_=>console.log("Deleted")).catch(console.log);
}

mongoose.connect(process.env.DB_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(_=>{
    deleteProducts();
    generateRandomProducts(100);
})
.catch(console.log);