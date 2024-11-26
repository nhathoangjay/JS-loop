let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
function isIncreasing(x) {
    for (let i = 1; i < x.length; i++) {
      if (x[i] <= x[i - 1]) {
        return false; 
      }
    }
    return true;
  }

  
 if (isIncreasing(arr)) {
    console.log("tăng dần")
 } else {
    console.log("ko tăng dần")
 }