const storeAnalysis=(store)=>{
    store.forEach(product => {
           console.log("Name: ",product.name,"Rating:" , product.rating);
    });
    const minPriceProduct=store.reduce((minProduct,product)=>
    product.price < minProduct.price? product: minProduct,store[0]);
    console.log("Product with the min price", minPriceProduct.name)
}
var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}
];
storeAnalysis(store);