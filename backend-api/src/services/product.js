const fs = require('fs')

const readProducts = () => {

    const products = fs.readFileSync(__dirname + '/../database/products.json')
    return JSON.parse(products)
}

const readProduct = (id) => {
    const products = readProducts();
    const product = products.filter((p) => p.id == id);
    return product;
}

const createProduct = (product) => {
    const products = readProducts();
    const lastId = products[products.length -1].id

    products.push({
        id: lastId + 1,
        ...product
    })
    fs.writeFileSync(__dirname + '/../database/products.json', JSON.stringify(products))
}

const productExists = (id) => {
    const products = readProducts();
    const product = products.filter((p) => p.id == id);
    if (product.length == 0 )
    return false
    else return true;
}

const deleteProduct = (id) => {
    const products = readProducts();
    const product = products.filter((p) => p.id != id);
    console.log(product)
    fs.writeFileSync(__dirname + '/../database/products.json', JSON.stringify(product))
}



const updateProduct = (id, newProduct) => {
    const products = readProducts();
    const product = products.filter((p) => p.id == id)[0];
    product.price = newProduct.price;
    product.name = newProduct.name;
    product.description = newProduct.description;

    fs.writeFileSync(__dirname + '/../database/products.json', JSON.stringify(products))
}

module.exports = {
    readProducts,
    readProduct,
    createProduct,
    productExists,
    deleteProduct,
    updateProduct
}