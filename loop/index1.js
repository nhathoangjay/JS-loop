const arr = [1, 2, 3, 4, 5];
const increasingArray = [1, 2, 3, 4, 5];
function inramanhinh(arr) { //cau a//
    for (i = 0; i<arr.length; i++) {
        console.log("phần tử thứ", i+1,":", arr[i])
    }
    
}
inramanhinh(arr)
function tong(arr) { //cau b//
    let tong = 0;
    for (i = 0;i<arr.length;i++) {
        tong= tong +arr[i]
    }
    return tong
}
console.log("tong la", tong(arr))
function lonnhatbenhat(arr) { // cau c//
    let lonnhat = arr[0]
    let benhat = arr[arr.length-1]
    for (i = 0; i<arr.length;i++) {
        if (arr[i] > lonnhat) {
            lonnhat = arr[i]
        }
    }
    for (i=arr.length-1; i>=0;i--) {
        if (arr[i] < benhat) {
            benhat = arr[i]
        }
    }
    return "số bé nhất là " + benhat + " số lớn nhất là " +lonnhat
}
console.log(lonnhatbenhat(arr))

function trungbinhcong(arr) { //cau d//
    return tong(arr)/arr.length
}
console.log("trung bình cộng là", trungbinhcong(arr))


// function daonguoc(arr) { //cau e//
//     const reversed = arr.reverse()
//     return reversed
// }

// console.log(daonguoc(arr))

function solanxuathien(x) { // cau f//
    let xuathien = 0
    for (let i = 0;i<arr.length;i++) {
      if (x==arr[i]) {
        xuathien++
       }
    }
    return "phần tử " + x + " xuất hiện "  + xuathien + " lần" 
}
for (i = 0;i <arr.length;i++) {
    console.log(solanxuathien(arr[i]))
}


// function themphantu(arr) { // cau g//
//     arr.unshift(177);
//     return arr
// } 
// console.log(themphantu(arr))


function isIncreasing(x) {
    for (let i = 1; i < x.length; i++) {
      if (x[i] <= x[i - 1]) {
        return false; 
      }
    }
    return true;
  }

  
  console.log(isIncreasing(arr));  