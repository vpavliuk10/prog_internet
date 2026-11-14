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