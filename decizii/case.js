var date = new Date()
var dayOfWeek = date.getDay()

document.write('Astazi este ')

switch (dayOfWeek) {
    case 1:
        document.write('Luni')
        break;

    case 2:
        document.write('Marti')
        break;
    case 3:
        document.write('Miercuri')
        break;
    case 4:
        document.write('Joi')
        break;
    case 5:
        document.write('Vineri')
        break;
    case 6:
        document.write('Sambata')
        break;
    case 7:
        document.write('Duminica')
        break;



    default:
        document.write('Necunoscuta')
        break;
}
/*
este echivalent cu ce am facut mai sus:
if (dayOfWeek == 1) {
    document.write('Luni')
} else if (dayOfWeek == 2) {
    document.write('Marti')
} else if (dayOfWeek == 3) {
    document.write('Miercuri')
} else if (dayOfWeek == 3) {
    document.write('Joi')
} else if (dayOfWeek == 3) {
    document.write('Vineri')
} else if (dayOfWeek == 6) {
    document.write('Sambata')
} else if (dayOfWeek == 7) {
    document.write('Duminica')
}  
*/