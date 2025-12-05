const removeFromArray = function(arr, ...restOfArgs) {

    let newArr = [...new Set(arr)];
      
      for(let i = 0; i < newArr.length ; i++){

      for(let j = 0; j < restOfArgs.length; j++){
        if(newArr[i]=== restOfArgs[j]){
           newArr.splice(i,1);
           i--;
          
          }
      }

      }

return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
