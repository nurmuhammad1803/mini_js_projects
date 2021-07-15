for (var i = 1; i = Infinity; i++) {
  var num1 = +prompt('Birinchi sonni kiriting')
  if (num1) {
    var num2 = +prompt('Ikkinchi sonni kirting')
    if (num2) {
      var num3 = +prompt('Uchinchi sonni kiriting')
      if (num3) {

        if (num1 > num2 && num2 > num3 && num1 > num3) {
          alert(num1 + ' - eng katta son; ' + num2 + ' - o`rtadagi son; ' + num3 + ' - eng kichik son')
        } else if (num1 > num3 && num3 > num2 && num1 > num2) {
          alert(num1 + ' - eng katta son; ' + num3 + ' - o`rtadagi son; ' + num2 + ' - eng kichik son')
        } else if (num2 > num3 && num1 > num3 && num2 > num1) {
          alert(num2 + ' - eng katta son; ' + num1 + ' - o`rtadagi son; ' + num3 + ' - eng kichik son')
        } else if (num2 > num1 && num3 > num1 && num2 > num3) {
          alert(num2 + ' - eng katta son; ' + num3 + ' - o`rtadagi son; ' + num2 + ' - eng kichik son')
        } else if (num3 > num1 && num1 > num2 && num3 > num2) {
          alert(num3 + ' - eng katta son; ' + num1 + ' - o`rtadagi son; ' + num2 + ' - eng kichik son')
        } else if (num3 > num2 && num2 > num1 && num3 > num1) {
          alert(num3 + ' - eng katta son; ' + num2 + ' - o`rtadagi son; ' + num1 + ' - eng kichik son')
        } else if (num1 === num2 && num2 === num3 && num3 === num1) {
          alert('Ular bir-biriga teng')
        } else if (num1 === num2 !== num3 && num3 > num2 && num3 > num1) {
          alert(num1 + ' = ' + num2 + ' ga va ular kichik ' + num3 + ' dan')
        } else if (num1 === num3 !== num2 && num2 > num1 && num2 > num3) {
          alert(num1 + ' = ' + num3 + ' ga va ular kichik ' + num2 + ' dan')
        } else if (num3 === num2 !== num1 && num1 > num2 && num1 > num3) {
          alert(num3 + ' = ' + num2 + ' ga va ular kichik ' + num1 + ' dan')
        } else if (num1 === num2 !== num3 && num3 < num2 && num3 < num1) {
          alert(num1 + ' = ' + num2 + ' ga va ular katta ' + num3 + ' dan')
        } else if (num1 === num3 !== num2 && num2 < num1 && num2 < num3) {
          alert(num1 + ' = ' + num3 + ' ga va ular katta ' + num2 + ' dan')
        } else if (num3 === num2 !== num1 && num1 < num2 && num1 < num3) {
          alert(num3 + ' = ' + num2 + ' ga va ular katta ' + num1 + ' dan')
        } else {
          alert('Bu xato')
        }
        break
      }
    } else {
      alert('Sonni to`g`ri kiriting')
    }
  } else {
    alert('Sonni to`g`ri kiriting')
  }
}