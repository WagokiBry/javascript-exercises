
const findTheOldest = function (arr) {

    arr.forEach((item) => {

        if (!item.yearOfDeath) {
            item["yearOfDeath"] = new Date().getFullYear();
            
        }
        
      })
     arr.sort((a, b) => {

        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;

        return ageA - ageB

    })
return arr.pop()
  }

// Do not edit below this line
module.exports = findTheOldest;
