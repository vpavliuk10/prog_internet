function task1() {
    let a = document.getElementById("task1-input").value;
    document.getElementById("task1-result").textContent = a.length;
}

function task2() {
    let a = document.getElementById("task2-input").value;
document.getElementById("task2-result").textContent = `UPPERCASE: ${a.toUpperCase()} | lowercase: ${a.toLowerCase()}`;
}

function task3() {
    let a = document.getElementById("task3-input").value;
    let b = document.getElementById("task3-char").value;
    document.getElementById("task3-result").textContent = a.indexOf(b);
}

function task4() {
    let a = document.getElementById("task4-input").value;
    let b = document.getElementById("task4-char").value;
    if (!b) { document.getElementById("task4-result").textContent = 0; return; }
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            count++;
        }
    }
    document.getElementById("task4-result").textContent = count;
}
