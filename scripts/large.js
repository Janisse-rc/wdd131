const largeTemples = temples.filter(temple => {

    return temple.area > 90000;
});


console.log(largeTemples);  //temporary debugging helper, we can see it in Devtools

createTempleCard(largeTemples);
