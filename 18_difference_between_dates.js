function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let difference = Math.abs(d2 - d1);

    return difference / (1000 * 60 * 60 * 24);
}

console.log(dateDifference("2026-01-01", "2026-01-10")); // 9
