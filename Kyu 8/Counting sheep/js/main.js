
function countSheeps(arrayOfSheep) {
  let counter = 0
arrayOfSheep.forEach(element => {if(element === true){counter = counter + 1}})
  return counter
}
