class ProductManager {
    constructor() {
        this.products = []
        this.id = 1
    }

    addProduct(product) {
        let findCode = (this.products.find((ele) => ele.code === product.code))
        if (findCode) {
            return "Papito el producto que querés agregar ya se encuentra cargado, o hay uno con el mismo código"
        }

        if (product.title && product.desc && product.price && product.thumbnail && product.code && product.stock) {
            product.id = this.id
            this.id++
            this.products.push(product)
            console.log(product)
            return "Producto cargado pa ;)"
        } else {
            return "Pa te faltan campos por llenar"
        }
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        let findProduct = this.products.find(ele => ele.id === id)
        if(!findProduct){
            return "No hay ningun producto con esa id"
        }
        return findProduct
        }
    }



const productManager = new ProductManager();

let product1 = {
    title: "Esponja",
    price: 15,
    desc: "Esponja de mano",
    thumbnail: "thumbnail.com",
    code: "a123",
    stock: 99
}
let product2 = {
    title: "Gaseosa",
    price: 152,
    desc: "Gaseosa coca cola",
    thumbnail: "thumbnail.com",
    code: "a1234",
    stock: 992
}

console.log(productManager.addProduct(product1))

console.log(productManager.addProduct(product2))


console.log(productManager.getProductById(1))

