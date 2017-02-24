

        // Ignore this function
        //
        if(!Array.prototype.equals) {

          // attach the .equals method to Array's prototype to call it on any array
          //
          Array.prototype.equals = function (array) {

            // if the other array is a falsy value, return
            //
            if (!array) {
              return false;
            }

            // compare lengths - can save a lot of time
            //
            if (this.length != array.length) {
              return false;
            }

            for (var i = 0, l = this.length; i < l; i++) {

              // Check if we have nested arrays
              //
              if (this[i] instanceof Array && array[i] instanceof Array) {

                // recurse into the nested arrays
                //
                if (!this[i].equals(array[i])) {
                  return false;
                }
              }
              else if (this[i] != array[i]) {
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                //
                return false;
              }
            }
            return true;
          };

          // Hide method from for-in loops
          //
          Object.defineProperty(Array.prototype, "equals", {enumerable: false});
        }
        //
        // Ignore that function


// Arrays are efficient for random access.  They are also the most common data structure,
//  being built into nearly every programming language.  The following exercises should
//  serve as a glorious warm-up to the next few topics.
//

// [ x ] Fill any array with value, zero if none provided, return original array
// [ x ] Return the sum of all values in any array
// [ x ] Return the average value of any array
// [ x ] Return the median of any array that has both an odd and even number of values
// [ x ] Return the index the value specified, or null if not found
// [ x ] Return index of nth last odd in any array, 1 being the fist, etc., null = not found
//    [ x ] Use only a single iteration
// [ x ] Select a range of values in any array, return the average of the values of the range
// [ x ] Copy contents of one array to another.  Do not use any built-in functions.
// [ ] Swap two elements in an array.  Return the same array passed in.  Do not use any built-in functions.
//




// [ x ] Fill any array with value, zero if none provided, return original array
//
var z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function fillArray(a, value) {
  // fill it
  for (var i = 0; i < a.length; i++){
    if (typeof value === "undefined"){
      value = 0;
    }
    a[i] = value;
  }
  return a;
}

console.log("zero(z): " + (fillArray(z).equals([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])));
console.log("zero(z, 5): " + (fillArray(z, 5).equals([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])));


// [ x ] Return the sum of all values in any array
//
var a = [1, 2, 3, 4, 5, 6, 7, 8];

function sum(a) {
  // Return sum
  var total = null;
  for (var i = 0; i < a.length; i++){
    total+= a[i];
  }
  return total;
}

console.log("sum(a): " + (sum(a) === 36));

// [ x ] Return the average value of any array
//
var a1 = [23, 17, 23, 42, 8, 2, 73, 101, 83, 92];

function average(a) {
  // return average
  var total = null;
  var average;
  for (var i = 0; i < a.length; i++){
    total+= a[i];
  }
  average = total / a.length;
  return average;
}

console.log("average(a1): " + (average(a1) === 46.4));


//  [ x ] Return the median of any array that has both an odd and even number of values
//
var a2 = [1,2,4,4,6,7,8,9,12];
var a3 = [4,5,9,10,11,15,22,20,21,21];

function median(a) {
  var median = null;
  // return median
  for (var i = 0; i < a.length; i++){
    if(a.length % 2 > 0){
      median = a[Math.floor(a.length / 2)];
    } else {
      median = ((a[a.length / 2 -1]) + a[(a.length / 2)]) / 2;
    }
  }
  return median;
}

console.log("median(a2): " + (median(a2) === 6));
console.log("median(a3): " + (median(a3) === 13));


// [ x ] Return the index the value specified, or null if not found
//
var a4 = ["zero", "one", "two", "three", "four", "five"];

function findIndex(a, value) {
  // return index or null
  for (var i = 0; i < a.length; i++){
    if (a[i] === value){
      return i;
    }
  }
  return null;
}

console.log("findIndex('three'): " + (findIndex(a4, "three") === 3));

// [ x ] Return index of nth last odd in any array, 1 being the fist, etc., null = not found
// [ x ] Use only a single iteration
//
var a5 = [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2];

function findNthLastOdd(a, n) {
  // return nth last add
  for (var i = a.length-1; i > 0; i--){
    if (a[i] % 2 > 0 && n === 1){
      return i;
    } else if (a[i] % 2 > 0) {
      n--;
    }
  }
  return null;
}

console.log("findNthLastOdd(a5, 1): " + (findNthLastOdd(a5, 1) === 11));
console.log("findNthLastOdd(a5, 2): " + (findNthLastOdd(a5, 2) === 9));
console.log("findNthLastOdd(a5, 4): " + (findNthLastOdd(a5, 4) === 1));


// [ x ] Select a range of values in any array, return the average of the values of the range
//
var a6 = [0, 1, 2, 3, 4, 5, 10, 15, 23, 54, 22, 1, 8, 4, 2, 2, 2, 0, 1];

function getAverageOfRange(a, start, end) {
  // return average of values selected from a subarray
  total = null;
  for (var i = start; i <= end; i++){
    total += a[i];
  }
  return total / (end - start + 1);
}

console.log("getAverageOfRange(a6, 5, 9): " + (getAverageOfRange(a6, 5, 9) === 21.4));


// [ x ] Copy contents of one array to another.  Do not use any built-in functions.
//
var a7 = [0, 10, 20, 30, 35, 55, 75, 100];
var b7 = [];

function copyArray(source, target) {
  // return copy
  for(var i = 0; i < source.length; i++){
    target[i] = source[i];
  }
  return target;
}
console.log("copyArray(a7, b7): " + (copyArray(a7,b7).equals(a7)));



// [ ] Swap two elements in an array.  Return the same array passed in.  Do not use any built-in functions.
//
var a8 = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

function swap(a, indexSource, indexTarget) {
  // swap 'em
  var temp = a[indexSource];
  var temp2 = a[indexTarget];
  for(var i = 0; i < a.length; i++){
    if(a[i] === temp){
      a[i] = temp2;
    } else if(a[i] === temp2){
      a[i] = temp;
    }
  }
  return a;
}

console.log("swap(a8, 1, 11): " + (swap(a8, 1, 11).equals([1, 31, 3, 5, 7, 11, 13, 17, 19, 23, 29, 2, 37])));
