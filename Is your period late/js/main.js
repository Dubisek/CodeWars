
function periodIsLate(last, today, cycleLength) {
    let diff = 0
    diff = today - last
    diff = diff / (1000 * 3600 * 24)
    
    return diff > cycleLength ? true : false
    
    
    
    
  }