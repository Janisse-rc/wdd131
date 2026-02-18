let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 0;

} else {
    reviewCount = Number(reviewCount);
}

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = reviewCount;

let review = document.createElement("p");
review.innerHTML = `<span class = "reviewCount">Submission Number:</span> ${reviewCount}`;
document.querySelector(".res-grid").appendChild(review);