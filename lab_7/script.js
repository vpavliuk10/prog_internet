const timeObj = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    updateFromCurrent() {
        const now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    },
    addSeconds(secToAdd) {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + Number(secToAdd);
        totalSeconds = (totalSeconds % 86400 + 86400) % 86400; 
        
        this.hours = Math.floor(totalSeconds / 3600);
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
    },
    toString() {
        return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
    }
};

function runTask1() {
    timeObj.updateFromCurrent();
    let sec = document.getElementById("seconds-input").value;
    timeObj.addSeconds(sec);
    document.getElementById("task1-result").textContent = `Новий час: ${timeObj.toString()}`;
}

function showCurrentTime() {
    const now = new Date();
    const currentTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    let timeEl = document.getElementById("current-time");
    if (timeEl) {
        timeEl.textContent = currentTimeStr;
    }
}

showCurrentTime();

function runTask2_1() {
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    const now = new Date();
    const dateStr = `Дата: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року`;
    const dayStr = `День тижня: ${days[now.getDay()]}`;
    const timeStr = `Час: ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    document.getElementById("task2_1-result").innerHTML = `${dateStr}<br>${dayStr}<br>${timeStr}`;
}

function runTask2_2() {
    let year = document.getElementById("year-input").value;
    let month = document.getElementById("month-input").value;
    if (!year || month === "") {
        document.getElementById("task2_2-result").textContent = "Будь ласка, введіть рік та місяць.";
        return;
    }
    let lastDay = new Date(year, Number(month), 0).getDate();
    document.getElementById("task2_2-result").textContent = `Останній день місяця: ${lastDay}`;
}

function runTask2_3() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let secondsPassed = Math.floor((now - startOfYear) / 1000);
    let secondsLeft = Math.floor((nextDay - now) / 1000);

    document.getElementById("task2_3-result").textContent = `Секунд, що пройшли з початку дня: ${secondsPassed}<br>Секунд, що залишилось до кінця дня: ${secondsLeft}`;
}
