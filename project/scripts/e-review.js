let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 0;

} else {
    reviewCount = Number(reviewCount);
}

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = reviewCount;