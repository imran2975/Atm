let container = document.querySelector(".container")

function continueTran() {
    container.innerHTML = `
    <div id="end">
        <h2>Thank You for your Feedback, we'll get back to you.
        <button onclick="refresh()">Refresh</button>
    </div>
    `
}