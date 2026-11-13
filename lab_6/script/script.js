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

function task5() {
    let a = document.getElementById("task5-input").value;
    let result = "";
    for (let i = 0; i < a.length; i += 2) {
        if (i + 1 < a.length) {
            result += a[i + 1] + a[i];
        } else {
            result += a[i];
        }
    }
    document.getElementById("task5-result").textContent = result;
}

function task6() {
    let a = document.getElementById("task6-input").value.toLowerCase();
    let spamWords = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте"];
    let isSpam = spamWords.some(word => a.includes(word));
    document.getElementById("task6-result").textContent = isSpam;
}

function task7() {
    let a = document.getElementById("task7-input").value;
    let maxLength = parseInt(document.getElementById("task7-length").value);
    let result = "";
    if (a.length < maxLength) {
        result = a;
    } else {
        result = a.substring(0, maxLength - 3) + "...";
    }
    document.getElementById("task7-result").textContent = result;
}