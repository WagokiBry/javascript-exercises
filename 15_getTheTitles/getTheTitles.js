const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
const getTheTitles = function(arr) {

let titles = arr.map((item)=>{
    return item.title
})
return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
