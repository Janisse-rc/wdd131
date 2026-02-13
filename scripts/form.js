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


createTempleCard(products);
//Display is controlled by page-specific JS files.

function createTempleCard(productList) {
    document.querySelector(".res-grid").innerHTML = "";

    productList.forEach((product) => {
        let card = document.createElement("option");

        card.innerHTML = `<option value = " "></option> ${product.name}`;
        
        option.setAttribute("value", `${product.name}`)
        
        document.querySelector(".res-grid").appendChild(select);
    });
}
