function processProducts(products) {
    // 1. Use map() to extract the product names
    const productNames = products.map(product => product.name);

    // 2. Use forEach() to log messages based on price
    products.forEach(product => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });

    // Returning the array created by map()
    return productNames;
}
