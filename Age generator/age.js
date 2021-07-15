var yourAge = +prompt('Yoshingizni kiriting: ')

if (yourAge <= 10) {
  console.log('Salom kichkintoy')
  console.log(yourAge)
} else if (10 < yourAge < 18) {
  console.log('Salom brat')
  console.log(yourAge)
} else if (18 < yourAge < 110) {
  console.log('Salom amaki')
  console.log(yourAge)
} else {
  console.log('Salom kashshey')
  console.log(yourAge)
}


// yourAge <= 10 ? alert('Salom kichkintoy') : alert('Salom brat')
// 10 < yourAge <= 18 ? alert('Salom brat') : alert('Salom amaki')
// 18 < yourAge <= 110 ? alert('Salom amaki') : alert('Salom kashshey')