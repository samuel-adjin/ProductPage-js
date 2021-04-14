class Product {
    constructor(title, price, stock, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imageUrl = imageUrl;
    }

}


class ProductList {

    products = [
        new Product(
            "Jordans Sneaker",
            200, "3/5",
            "Men's shoe",
            "https://moneyinc.com/wp-content/uploads/2017/06/Air-Jordan-VI--750x523.jpg"
        ),
        new Product(
            "Wealth men fashion Sneaker",
            220, "1/4",
            "Men's shoe",
            "https://ae01.alicdn.com/kf/Hdd988c4cdcaa4a49aadd922b3bbb53e3C/Sudden-Wealth-Men-s-Fashion-Sneakers-Stylish-Sports-Running-Shoes-Male-Orange-Colorful-Jogging-Shoes-Urban.jpg_Q90.jpg_.webp"
        ),
        new Product(
            "Fashion Sport",
            320, "5/10",
            "Sport Shoes",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/542026/7.jpg?0042"
        ),
        new Product(
            "Graffiti Casual eason",
            180, "2/7",
            "Ladies shoe",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/930626/1.jpg"
        ),
    ]
    render() {
        const mainContainer = document.getElementById("main-container");
        const productContainer = document.createElement('div');
        const navBar = document.createElement('div');
        navBar.className = "navBar";
        const total = document.createElement('div');
        total.className = "total";

        total.innerHTML =
            `
<h3 >TOTAL: GHS <span id ="amount">${0}</span></h3>


`
        navBar.innerHTML =
            `
<h3><a href="#">New Arrivals</a></h3>
            <h3><a href="#">Women's</a></h3>
            <h3><a href="#">Men's</a></h3>
            <div class="bag">
                <h3 id="cart">Cart</h3>
                <div class="cartCount">0</div>
                </div>
`   ;
        console.log(total)
        mainContainer.append(navBar);
        mainContainer.append(total);


        productContainer.className = "product-container";
        for (const prodList of this.products) {
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
                <button class="btn1">Add to Cart</button>
                <button class="btn2">Remove</button>
               
           
    `;
            productContainer.append(prods);
        }
        mainContainer.append(productContainer);
    }
}
addCart = [];
let totalOutput = 0;
class ShoppingCart {
    show() {

        const total = document.querySelector(".total");
        const button = document.querySelectorAll(".btn1");
        const removebtn = document.querySelectorAll(".btn2");

        const display = () => {
            total.style.display = "block";

        }
        const cart = new ProductList();
        for (let i = 0; i < button.length; i++) {
            document.querySelectorAll(".btn2")[i].addEventListener("click", function () {
                if (removebtn[i]) {
                    const cartAdd = document.querySelector(".cartCount");
                    removebtn[i].style.display = "none";
                    cartAdd.innerText = addCart.length - 1;
                    button[i].disabled = false;
                    button[i].style.backgroundColor = "#161d6f";
                    button[i].innerText = "Add to cart";
                    const prod = new ProductList();

                    const a = prod.products[i];
                    totalOutput = totalOutput - prod.products[i].price;
                    const b = document.querySelector("#amount");
                    b.innerText = totalOutput;
                    addCart.splice(removebtn[i], 1);
                    console.log(i);
                    console.log(addCart);
                    console.log(removebtn[i], i);


                }
            });

            document.querySelectorAll(".btn1")[i].addEventListener("click", function () {
                total.style.display = "block";

                if (button[i]) {
                    const prod = new ProductList();
                    const a = prod.products[i];
                    addCart.push(a);
                    console.log(addCart);
                    const cartAdd = document.querySelector(".cartCount");
                    button[i].style.backgroundColor = "gray";
                    button[i].innerText = "Added"
                    button[i].disabled = true;
                    removebtn[i].style.display = "block";
                    cartAdd.innerText = addCart.length;

                    totalOutput = prod.products[i].price + totalOutput;
                    const b = document.querySelector("#amount");
                    b.innerText = totalOutput;
                }


            });




        }
    }
}



class Cart {
    cartItems() {
        const mainContainer = document.getElementById("main-container");
        const bag = document.querySelector(".bag");
        const cart = bag.children[0];

        const showCart = document.createElement("div");
        showCart.className = "layer";
        showCart.innerHTML =
            `
            <div class="cart-container">
            <div class="cart-title">
               <div class="cart-style">
                <h2 id="cart-title">My Cart</h2>
               </div>
               <div class="items-container">
                   <div class="img-container">
                        <img src="red1.jpg" alt="">
                   </div>
                   <div class="cart-desc">
                       <h3>Title</h3>
                        <p>price</p>
                        <p>Description</p>
    
                   </div>
    
               </div>
    
            </div>
        </div>
            `;

        mainContainer.append(showCart);
        cart.addEventListener("click", function () {

            showCart.style.display = "block";
            console.log(showCart);

        })
    }
}




const productList = new ProductList();
productList.render();
const showTotal = new ShoppingCart();
showTotal.show();
const cart = new Cart();
// cart.cartItems();


