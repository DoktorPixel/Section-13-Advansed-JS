// function FirstFactorial(num) { 
//     let nums=num
//     for (let i=num; i>0; i--) {
//     nums=nums*i
//     }
//       // code goes here  
//       return nums; 
    
//     }
       
//     // keep this function call here 
//     console.log(FirstFactorial(4));

function FirstFactorial(num) {
    // Base case: if num is 0 or 1, return 1
    if (num === 0 || num === 1) {
      return 1;
    } 
    // Recursive case: num > 1, multiply num by the factorial of num - 1
    else {
      return num * FirstFactorial(num - 1);
    }
  }
  
  // Test the function
  console.log(FirstFactorial(3)); // Output: 24
  console.log(FirstFactorial(8)); // Output: 40320
  