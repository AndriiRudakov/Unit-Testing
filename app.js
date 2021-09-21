function sum(myArray){

    let itemsToBeRemoved = [5, 0]
    var filteredArray = myArray.filter(item => !itemsToBeRemoved.includes(item))
  
    return filteredArray;

  }

  function score(array2) {
  
    let itemsToBeRemoved = [8, 9]
    var filteredArray = array2.filter(item => !itemsToBeRemoved.includes(item))
    let summary = 0;
    for(let i = 0; i < filteredArray.length; i++){
      summary += filteredArray[i];
    }
    
    return summary;
  }

  module.exports = {sum, score};