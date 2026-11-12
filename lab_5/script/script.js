let s = "dwbyu@mail.ua";
let r = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
let a = s.match(r);

console.log("--- ЗАВДАННЯ 1 ---");
if (a) {
    for (let i = 0; i < a.length; i++) {
        console.log("a[" + i + "] = " + a[i]);
    }
} else {
    console.log("Збігів не знайдено");
}

const validateBtn = document.getElementById("validateBtn");

validateBtn.addEventListener("click", function() {
    
    
    const regexEmail = /^.+@cnu\.edu\.ua$/i;
    const regexFullName = /^([А-ЯA-ZҐЄІЇ][а-яa-zґєії]+)\s+([А-ЯA-ZҐЄІЇ]+)$/;
    const regexLogin = /^[a-zA-Z0-9]+$/;
    const regexPassword = /^(?=.*[a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9])(?=.*\d)(?=.*[_\-!@#$%^&*]).{8,}$/;
    const regexZip = /^\d{5}$/;

    const fields = [
        { id: "email", regex: regexEmail, errorMsg: "Має бути @cnu.edu.ua" },
        { id: "fullname", regex: regexFullName, errorMsg: "Формат: Ім'я ПРІЗВИЩЕ" },
        { id: "login", regex: regexLogin, errorMsg: "Тільки латинські літери і цифри" },
        { id: "password", regex: regexPassword, errorMsg: "Мін. 8 символів (буква, цифра, спецсимвол)" },
        { id: "zip", regex: regexZip, errorMsg: "Повинно бути рівно 5 цифр" }
    ];

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const groupElement = document.getElementById("group-" + field.id);
        const value = inputElement.value.trim();

        const oldFeedback = groupElement.querySelectorAll(".feedback-icon, .feedback-error");
        oldFeedback.forEach(el => el.remove());

        if (field.regex.test(value)) {
            inputElement.classList.remove("invalid");
            inputElement.classList.add("valid");

            const icon = document.createElement("span");
            icon.className = "feedback-icon";
            icon.innerHTML = "✔";
            groupElement.appendChild(icon);
        } else {
            inputElement.classList.remove("valid");
            inputElement.classList.add("invalid");

            const errorSpan = document.createElement("span");
            errorSpan.className = "feedback-error";
            errorSpan.innerText = field.errorMsg;
            groupElement.appendChild(errorSpan);
        }
    });
});