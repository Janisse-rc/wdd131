const oldTemples = temples.filter( temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
});

createTempleCard(oldTemples);