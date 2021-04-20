let x = 0;

while (x < 6) {
    x++;
}
document.write(x + "<br />");



let day_of_week;

switch (day_of_week) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        document.write("Working Days");
        break;
    case 6:
        document.write("Saturday");
        break;
    default:
        document.write("Today is Sunday" + "<br/>");
        break;
}

let i;

do {
    document.write(i);
    i++;
}
while (i < 10);