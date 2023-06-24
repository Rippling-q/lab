function ShowDetail(showId) {
    let detail = document.getElementById(showId);
    if (detail.style.maxHeight) {
        detail.style.maxHeight = null;
    } else {
        detail.style.maxHeight = detail.scrollHeight + "px";
    }
}