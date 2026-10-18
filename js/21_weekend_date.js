function getWeekend() {
    let today = new Date();
    let day = today.getDay();

    let saturday = new Date(today);
    saturday.setDate(today.getDate() + (6 - day));

    return saturday;
}

console.log(getWeekend());
