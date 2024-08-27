function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
