function calculateAge(dob) {
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
         today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

console.log(calculateAge("2000-05-10"));
