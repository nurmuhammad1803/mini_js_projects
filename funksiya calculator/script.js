for (var i; i = Infinity; i++) {
  var num1 = +prompt('Birinchi sonni kiriting')
  if (num1) {
    var amal = prompt('Amalni kiriting: + qo`shish,  - ayirish,  * ko`paytirish, / bo`lish,  % qoldiq chiqarish')
    if (amal === '+') {
      var num2 = +prompt('Ikkinchi sonni kiriting')
      if (num2) {
        function plus(a, b) {
          var p = a + b
          return p
        }
        var javobPlus = (plus(num1, num2))
        if (javobPlus > 0) {
          alert('Javobingiz ' + javobPlus + ' - bu musbat son')
          break
        } else if (javobPlus < 0) {
          alert('Javobingiz ' + javobPlus + ' - bu manfiy son')
          break
        } else if (javobPlus === 0) {
          alert('Javob - 0ga teng')
          break
        } else {
          alert('Error')
        }
      }else{
        alert('Ikkinchi sonni to`g`ri kiriting!')
      }
    } else if (amal === '-') {
      var num2 = +prompt('Ikkinchi sonni kiriting')
      if (num2) {
        function plus(a, b) {
          var m = a - b
          return m
        }
        var javobMinus = (plus(num1, num2))
        if (javobMinus > 0) {
          alert('Javobingiz ' + javobMinus + ' bu musbat son')
          break
        } else if (javobMinus < 0) {
          alert('Javobingiz ' + javobMinus + ' - bu manfiy son')
          break
        } else if (javobMinus === 0) {
          alert('Javob - 0ga teng')
          break
        } else {
          alert('Error')
        }
      }else{
        alert('Ikkinchi sonni to`g`ri kiriting!')
      }
    } else if (amal === '*') {
      var num2 = +prompt('Ikkinchi sonni kiriting')
      if (num2) {
        function plus(a, b) {
          var k = a * b
          return k
        }
        var javobK = (plus(num1, num2))
        if (javobK > 0) {
          alert('Javobingiz ' + javobK + ' bu musbat son')
          break
        } else if (javobK < 0) {
          alert('Javobingiz ' + javobK + ' - bu manfiy son')
          break
        } else if (javobK === 0) {
          alert('Javob - 0 ga teng')
          break
        } else {
          alert('Error')
        }
      }else{
        alert('Ikkinchi sonni to`g`ri kiriting!')
      }
    } else if (amal === '/') {
      var num2 = +prompt('Ikkinchi sonni kiriting')
      if (num2) {
        function plus(a, b) {
          var bl = a / b
          return bl
        }
        var javobBl = (plus(num1, num2))
        if (javobBl > 0) {
          alert('Javobingiz ' + javobBl + ' bu musbat son')
          break
        } else if (javobBl < 0) {
          alert('Javobingiz ' + javobBl + ' - bu manfiy son')
          break
        } else if (b === 0) {
          alert('0 ga bo`lish mumkin emas!!!')
        } else {
          alert('Siz xato buyruq kiritdingiz!')
        }
      }else{
        alert('Ikkinchi sonni to`g`ri kiriting!')
      }
    } else if (amal === '%') {
      var num2 = +prompt('Ikkinchi sonni kiriting')
      if (num2) {
        function plus(a, b) {
          var q = a % b
          return q
        }
        var javobQ = (plus(num1, num2))
        alert('Qoldiq ' + javobQ)
        break
      }else{
        alert('Ikkinchi sonni to`g`ri kiriting!')
      }
    } else {
      alert('Amal noto`g`ri')
    }
  } else {
    alert('Birinchi sonni to`g`ri kiriting!')
  }
}
