
let data = 
[
    {
      "id": "1923",
      "name": "Tas Pria Ransel Distro Original",
      "price": 100000,
      "price_before_disc": 165000,
      "stuff": {
        "image_url": "https://s2.bukalapak.com/img/2584349902/small/Tas_Pria_Ransel__Distro_Original_Bandung________________tas_.jpg",
        "stock": 4
      },
      "store": {
        "id": 129,
        "name": "Kobeo Store"
      },
      "category": {
      	"id": 1,
      	"name": "Asessoris Pria"
      }
    },
]


    const prod = data.map(item => item)

// var price = productList() 
console.log(prod)