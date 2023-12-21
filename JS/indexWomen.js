const softs = [
    {
        "id": "1",
        "title": "Лонгслив",
        "vendor_code": "111",
        "description": "50% шерсть, 50% ПАН",
        "price": 2350,
        "img": "./img/LongslivW.jpg"
    },
    {
        "id": "2",
        "title": "Футболка",
        "vendor_code": "222",
        "description": "50% шерсть, 50% ПАН",
        "price": 2120,
        "img": "./img/T-shortW.jpg"
    },
    {
        "id": "3",
        "title": "Комплект термобелья",
        "vendor_code": "222",
        "description": "50% шерсть, 50% ПАН",
        "price": 4980,
        "img": "./img/Women.jpg"
    }
]
async function getResponce() {
    const content = softs;
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 280px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text">${content[key].description}.<br> Цена <p class="card-text font-weight-bold price">${content[key].price}</p> р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" min="0" value="0"></p>
        </li>                `
    }
}
getResponce()