let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < color.length; i++) {
    let suffix;

    if (i === 0) suffix = "st";
    else if (i === 1) suffix = "nd";
    else if (i === 2) suffix = "rd";
    else suffix = "th";

    console.log((i + 1) + suffix + " choice is " + color[i] + ".");
}
