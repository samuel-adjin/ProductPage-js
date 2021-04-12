class Product{
constructor(title,price,stock,description,imageUrl){
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.description = description;
    this.imageUrl = imageUrl;
}

}


class ProductList{

products = [
  new Product(
      "Jordans Sneaker",
      200,"3/5",
      "Men's shoe",
      "https://moneyinc.com/wp-content/uploads/2017/06/Air-Jordan-VI--750x523.jpg"
      ),
      new Product(
        "Wealth men fashion Sneaker",
        220,"5/10",
        "Men's shoe",
        "https://ae01.alicdn.com/kf/Hdd988c4cdcaa4a49aadd922b3bbb53e3C/Sudden-Wealth-Men-s-Fashion-Sneakers-Stylish-Sports-Running-Shoes-Male-Orange-Colorful-Jogging-Shoes-Urban.jpg_Q90.jpg_.webp"
        ),
        new Product(
            "Fashion Sport",
            220,"5/10",
            "Sport Shoes",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/542026/7.jpg?0042"
            ),
            new Product(
                "Graffiti Casual eason",
                220,"5/10",
                "Ladies shoe",
                "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/930626/1.jpg"
                ),
]

render(){
const mainContainer = document.getElementById("main-container");
const productContainer = document.createElement('div');
productContainer.className = "product-container";
for(const prodList of this.products){
    const prods = document.createElement('div');
    prods.className = "products";
    prods.innerHTML =
    `
                <img src="${prodList.imageUrl}" alt="${prodList.title}">
                <div class = "prod-info">
                    <h2>${prodList.title}</h2>
                    <p class ="price">GHS${prodList.price}</p>
                <p>${prodList.description}</p>
                <p>Available:${prodList.stock}</p>
               </div>
                <button>Add to Cart</button>
           
    `;
    productContainer.append(prods);
}
mainContainer.append(productContainer);
}
}
const productList = new ProductList(); 
productList.render();