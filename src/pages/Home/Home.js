import React from 'react';
import './Home.css';

import TopSlider from '../../components/TopSlider/TopSlider.js';

import ProductCat from '../../components/ProductCat/ProductCat';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import DealsOfTheDay from '../../components/DealsOfTheDay/DealsOfTheDay';
import LatestProduct from '../../components/LatestProduct/LatestProduct';
import ZoneSection from '../../components/ZoneSection/ZoneSection';



function Home() {
    const products = [
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/ipad.jpg",
            productPrice: '450',
            productRating: 2,
            
        },
        {
            name: "Headphones",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/headphone.jpg",
            productPrice: '450',
            productRating: 3,

            
        },
        {
            name: "Macbook pro",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/macbook-air.jpg",
            productPrice: '450',
            productRating: 5,

            
        },
        {
            name: "Nikon DSLR",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/nikon.jpg",
            productPrice: '450',
            productRating: 2.5,

            
        },
        {
            name: "Macbook air",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/play-station.jpg",
            productPrice: '450',
            productRating: 4,

            
        },
        {
            name: "Headphones",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/macbook-pro.jpg",
            productPrice: '450',
            productRating: 3.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/ipad.jpg",
            productPrice: '450',
            productRating: 4.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/headphone.jpg",
            productPrice: '450',
            productRating: 1.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/ipad.jpg",
            productPrice: '450',
            productRating: 2.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/macbook-pro.jpg",
            productPrice: '450',
            productRating: 5,

            
        },
    ]


    const productCategory = [
        {
            name: "Headphones",
            categoryImg: "https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png",
            
            
        },
        {
            name: "Earpodes",
            categoryImg: "https://www-file.huawei.com/-/media/corp2020/home/cbg/0602/freebuds_4_cn_m.jpg",
            

            
        },
        {
            name: "Makeup",
            categoryImg: "https://thumbs.dreamstime.com/b/makeup-cosmetics-tools-background-beauty-products-facial-package-lipstick-eyeshadow-white-bac-top-view-copy-space-132830726.jpg",
            

            
        },
        {
            name: "Shirts",
            categoryImg: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
            

            
        },
        {
            name: "Jackets",
            categoryImg: "https://5.imimg.com/data5/ZZ/XU/AL/ANDROID-96118818/product-jpeg-500x500.jpg",
            

            
        },
        {
            name: "Fridge",
            categoryImg: "https://5.imimg.com/data5/CU/CF/LT/SELLER-2694128/whirlpool-refrigerator-71197-500x500.jpg",
            

            
        },
        {
            name: "Television",
            categoryImg: "https://media.croma.com/image/upload/v1605294014/Croma%20Assets/Entertainment/Television/Images/8942371504158.png",
            

            
        },
        {
            name: "Mobiles",
            categoryImg: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144763",
            

            
        },
        {
            name: "Shoes",
            categoryImg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            

            
        },
        {
            name: "Mixer & Juicer",
            categoryImg: "https://ecommercephotographyindia.com/assets/img/gallery/kitchenware-product-photography.jpg",
            

            
        },
    ]


    const zoneproducts = [
        {
            name: "Headphones",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686363/1617033161786.png?imwidth=140&impolicy=hq",
            
            
        },
        {
            name: "Speakers",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686365/1617033051027.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "Keyboards",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686367/1617033189360.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "Mobile Charges",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686368/1617033340249.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "hard Disks",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686369/1617033346657.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "Mobile Cables",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686370/1617033083769.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "Pendrives",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686371/1617033089841.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "Memory Cards",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686373/1617033104293.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "Screen Guards",
            categoryImg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            

            
        },
        {
            name: "Routers",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686374/1617033381560.png?imwidth=140&impolicy=hq",
            

            
        },
        {
            name: "Gamming Controllers",
            categoryImg: "https://assetscdn1.paytm.com/images/catalog/view_item/686375/1617033117510.png?imwidth=140&impolicy=hq",
            

            
        },
    ]
    return (
        <div className="home">
            
            
            <div className="main__section">
            
            <TopSlider />
            

            </div>

            <div className="productcateogry__section">
            
            <ProductCat productCategory={productCategory} />
            
            <DealsOfTheDay />


            <ProductCarousel title="Electronics Bestsellers" products={products} />

            


            


            <LatestProduct products={products} />

            <ProductCarousel title="Best Seller Mobile" products={products} />

            <ZoneSection zoneproducts={zoneproducts} />

            <ProductCarousel title="Home Essentials" products={products} />
            </div>

            
            
                
            
        </div>
    )
}

export default Home
