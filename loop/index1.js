let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
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
    let benhat = arr[0]
    for (i = 0; i<arr.length;i++) {
        if (arr[i] > lonnhat) {
            lonnhat = arr[i]
        }
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

function ascending(arr) { //cau k + i//
    let ascendingarr = arr.sort((a, b) => a - b);
    return ascendingarr


}
console.log(ascending(arr))

function descending(arr) {
    let descendingarr = arr.sort((a, b) => b - a);
    return descendingarr
}
console.log(descending(arr))

function sochan(arr) { //cau m//
    let chan = []
    for(i = 0;i<arr.length;i++) {
        if (arr[i]%2==0) {
            chan.push(arr[i])
        }
    }
    return chan
}
function sole(arr) { //cau n//
    let le = []
    for(i = 0;i<arr.length;i++) {
        if (arr[i]%2!=0) {
            le.push(arr[i])
        }
    }
    return le

}
console.log(sochan(arr))
console.log(sole(arr))
