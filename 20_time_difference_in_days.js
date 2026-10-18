function getDaysDifference(date1, date2) {
    let firstDate = new Date(date1);
    let secondDate = new Date(date2);
    let difference = Math.abs(secondDate - firstDate);

    return Math.floor(difference / (1000 * 60 * 60 * 24));
}

console.log(getDaysDifference("2026-01-01", "2026-02-01")); // 31
