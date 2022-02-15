var date = new Date()
var hour = date.getHours()
 
// Operator TERNAR
hour < 12 ? document.write('A.M.') : document.write ('P.M.')
// solutia 2
var timeOfDay = hour < 12 ? 'A.M.' : 'P.M.'
docum .write(timeOfDay)


/* 
este echivalent cu cu operator Ternar
if (hour < 12) {

    document.write('A.M.')
}else {
    document.write('P.M.')
}
*/
