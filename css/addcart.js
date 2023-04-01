const product=[
    {
        id:0,
        image:'carnation_bouquet.jpg',
        title:'Carnation Bouquet',
        price:999,
    },
    {
        id:1,
        image:'daffodil_bouquet.jpg',
        title:'Daffodil Bouquet',
        price:999,
    },
    {
        id:2,
        image:'freesia_bouquet.jpg',
        title:'Fressia Bouquet',
        price:999,
    },
    {
        id:3,
        image:'hyacinth_bouquet.jpg',
        title:'Hyacinth Bouquet',
        price:999,
    },
    {
        id:4,
        image:'anemone_bouquet.jpg',
        title:'Anemone Bouquet',
        price:999,
    },
    {
        id:5,
        image:'daffodil_bouquet.jpg',
        title:'Daffodil Bouquet',
        price:999,
    },
    {
        id:6,
        image:'peruvian_bouquet.jpg',
        title:'Peruvian Bouquet',
        price:999,
    },
    {
        id:7,
        image:'marigold_bouquet.jpg',
        title:'marigold Bouquet',
        price:999,
    },
    {
        id:8,
        image:'purpleGladiolus_bouquet.jpg',
        title:'Purple Gladiolus Bouquet',
        price:999,
    },
    {
        id:9,
        image:'marigold_bouquet.jpg',
        title:'Marigold Bouquet',
        price:999,
    },
    {
        id:10,
        image:'amenone_single.jpeg',
        title:'Anemone Single',
        price:99,
    },
    {
        id:11,
        image:'carnation_single.jpeg',
        title:'carnation Single',
        price:99,
    },
    {
        id:12,
        image:'daffodil_single.jpg',
        title:'daffodil Single',
        price:999,

    },
    {
        id:13,
        image:'fressia_single.jpg',
        title:'freesia Single',
        price:999,
        
    },
    {
        id:14,
        image:'hycanith_single.jpg',
        title:'Hyacinth Single',
        price:999,
        
    },
    {
        id:15,
        image:'peruvian_single.png',
        title:'Peruvian Single',
        price:999,
        
    },
    {
        id:16,
        image:'marigold.jpeg.jpg',
        title:'Marigold Single',
        price:999,
        
    },
    {
        id:17,
        image:'purple_single.jpeg',
        title:'Purple Gladiolus ',
        price:999,
        
    },
    {
        id:18,
        image:'sun_single.jpg',
        title:'Sunflower Single',
        price:999,
        
    },
    {
        id:19,
        image:'purple_single.jpeg',
        title:'Purple Gladiolus ',
        price:999,
        
    },
    {
        id:20,
        image:'sapling 1.jpg',
        title:'Sapling 1',
        price:999,
        
    },
    {
        id:21,
        image:'Sapling 2.jpg',
        title:'Sapling 2 ',
        price:999,
        
    },
    {
        id:22,
        image:'sapling 3.jpg',
        title:'Sapling 3',
        price:999,
        
    },
    {
        id:23,
        image:'sapling 4.jpg',
        title:'Sapling 4',
        price:999,
        
    },
    {
        id:24,
        image:'sapling 5.PNG',
        title:'Sapling 5',
        price:999,
        
    },
    {
        id:25,
        image:'sapling 6.png',
        title:'Sapling 6',
        price:999,
        
    },
];
const catagories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=catagories.map((item)=>
    {
        var {image,title,price}=item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <image class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

var cart=[];

function addtocart(a)
{
    cart.push({...catagories[a]})
    displaycart();
}

function delElement(a)
{
    cart.splice(a,1);
    displaycart();
}

function displaycart(a)
{
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    document.getElementById("total").innerHTML="$ "+0+" .00";
    if(cart.length==0)
    {
        document.getElementById('cartItem').innerHTML="Your cart is empty";
    }
    else
    {
        document.getElementById('cartItem').innerHTML=cart.map((items)=>
        {
            var {image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+" .00";
            return(
                `<div class='cart-item'>
                <div class='row-image'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<p style='font-size:10px;' onclick='delElement("+(j++)+")'>Clear</p></div>"
            );
        }).join('');
    }
}