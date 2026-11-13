function task1() {
    let a = document.getElementById("task1-input").value;
    document.getElementById("task1-result").textContent = a.length;
}

function task2() {
    let a = document.getElementById("task2-input").value;
    document.getElementById("task2-result").textContent = `UPPERCASE: ${a.toUpperCase()} | lowercase: ${a.toLowerCase()}`;
}
