const product=[
    {
        id:0,
        image:'../assets/Com1.png',
        title:'Flash: Who remembers wally?',
        price:250,
    },
    {
        id:1,
        image:'../assets/Com2.png',
        title:'INVINCIBLE',
        price:250,
    },
    {
        id:2,
        image:'../assets/Com3.png',
        title:'The AMAJING Spiderman Vol:800',
        price:250,
    },
    {
        id:3,
        image:'../assets/Com3-2.png',
        title:'Fantastic Four',
        price:250,
    },
    {
        id:4,
        image:'../assets/Com5.png',
        title:'Jewjitsu Kaisen Ch:85',
        price:250,
    },
    {
        id:5,
        image:'../assets/Com6.png',
        title:'One Piss Vol 96',
        price:300,
    },
    {
        id:6,
        image:'../assets/Exile.jpg',
        title:'Exlie',
        price:500,
    },
    {
        id:7,
        image:'../assets/Sherlock.jpg',
        title:'Sherlock Holmes',
        price:500,
    },
    {
        id:8,
        image:'../assets/Cartel.jpg',
        title:'Cartel',
        price:500,
    },
    {
        id:9,
        image:'../assets/Whirlpool.jpg',
        title:'Whirlpool',
        price:500,
    },
    {
        id:10,
        image:'../assets/MurderOnOrientExpress.jpg',
        title:'Murder On Orient',
        price:500,
    },
    {
        id:11,
        image:'../assets/JekyllAndHyde.jpg',
        title:'Strange Case of Dr Jekyll and Mr Hyde',
        price:500,
    },
    {
        id:12,
        image:'../assets/Izdihar_Daughters.png',
        title:'Daughters of Izdihar',
        price:600,

    },
    {
        id:13,
        image:'../assets/Lord_Rings.png',
        title:'Lord of the Rings',
        price:600,
        
    },
    {
        id:14,
        image:'../assets/Fant_Beasts.png',
        title:'Fantastic Beasts and Where to Find Them',
        price:600,
        
    },
    {
        id:15,
        image:'../assets/Harry_Potter.png',
        title:'Harry Potter: Chamber of Secrets',
        price:600,
        
    },
    {
        id:16,
        image:'../assets/Lost_Moment.png',
        title:'Lost in the Moment and Found',
        price:600,
        
    },
    {
        id:17,
        image:'../assets/Stolen_Heir.png',
        title:'The Stolen Heir',
        price:600,
        
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