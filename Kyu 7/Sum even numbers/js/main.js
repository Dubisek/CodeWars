function sumEvenNumbers(input) {
    let counter = 0
    input.forEach(element => {if(element%2===0){counter = counter + element} })
    return counter
  }
  