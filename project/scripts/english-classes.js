//time

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;
//Display the menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})


const products = [
    {
        id: "sevenam",
        name: "M - F / 7 a.m. - 10:30 a.m.",
        averagerating: 4.5
    },
    {
        id: "tenam",
        name: "M - F / 10 a.m. - 1:30 p.m.",
        averagerating: 4.7
    },
    {
        id: "fourpm",
        name: "M - F / 4 p.m. - 7:30 p.m.",
        averagerating: 3.5
    },
    {
        id: "senpm",
        name: "Saturdays / 7 p.m. - 10:30 p.m.",
        averagerating: 3.9
    },
    {
        id: "nineam",
        name: "Saturdays / 9 a.m. - 12:30 p.m.",
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