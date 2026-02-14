//time

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


createProductOptions(products);
//Display is controlled by page-specific JS files.

function createProductOptions(productList) {

    const select = document.querySelector("#product");      //Select my <select> element

    productList.forEach((product) => {
        const option = document.createElement("option");   //Creates an option element

        option.value = product.id;      //Sets value properly
        option.textContent = product.name;      //Shows product name

        select.appendChild(option);     //Adds it inside the select
    });
}