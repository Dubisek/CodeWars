// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that





var humanYearsCatYearsDogYears = function(humanYears) {
    let hage = humanYears
    let cage = 0
    let dage = 0
    
      if (humanYears === 1) { cage = 15} else if ( humanYears === 2) { cage = 24} else {cage = (humanYears - 2)*4+24 }
      if (humanYears === 1) { dage = 15} else if ( humanYears === 2) { dage = 24} else {dage = (humanYears - 2)*5+24 }
      
      return [hage,cage,dage];
    }
    


    // Other noteworthy solutions

    var humanYearsCatYearsDogYears = function(y) {
      if (y == 1) return [1, 15, 15]
      if (y == 2) return [2, 24, 24]
      return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
    }