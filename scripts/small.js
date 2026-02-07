const smallTemples = temples.filter(temple => {

    return temple.area < 10000;
});


console.log(smallTemples);  //temporary debugging helper, we can see it in Devtools

createTempleCard(smallTemples);
