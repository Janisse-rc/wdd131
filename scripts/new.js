const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
});

createTempleCard(newTemples);