function updateReviewCount() {
    const params = new URLSearchParams(window.location.search);

    if (params.has("product") && params.has("rating")) {
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCount++;

        localStorage.setItem("reviewCount", reviewCount);

        window.history.replaceState({}, document.title, window.location.pathname);

        console.log(`Total Reviews Stored: ${reviewCount}`);
    }
}
updateReviewCount();