const isCreditCardNumberValid = (num) => {
        let numArr = num.toString().split("");//Convert number into array
      let sum = numArr.reduce(function(a, b){
            return Number(a) + Number(b);//Number converts strings in array to integers
        }, 0);
    
      const checkArr = a => a.every( val => val === a[0] )//returns true if all elements of array are the same
    if (Number.isInteger(num) == true) {
        if(numArr.length == 16) {
          if(num % 2 == 0) {
            if(sum > 16) {
              if(checkArr(numArr) == false) {
                  return true;
        } else return false;
      } else return false;
    } else return false;
    } else return false;
    
      }	else return false;
          
       
    
}
console.log(isCreditCardNumberValid(4444444444444444))