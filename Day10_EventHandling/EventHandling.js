const button1 = document.getElementById('change-text-button')
const paragraph = document.getElementById('text-paragraph')


button1.addEventListener("click", () => {
    paragraph.textContent = "This is the updated paragrah text content"
})