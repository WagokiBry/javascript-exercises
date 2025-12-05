const fibonacci = function(num) {

    if(num == 0){
        return 0
    } else if(num < 0){
        return "OOPS"
    }

    let acceptAll = Number(num)

        let arr = [1,1]

        
        

for(let i = 1; i < acceptAll -1; i++ ){
    arr.push(arr[i] + arr[i-1])
}



return arr[arr.length - 1]
};   

// Do not edit below this line
module.exports = fibonacci;
