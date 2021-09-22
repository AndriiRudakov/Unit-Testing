function nNumber(n) {
    let a = n.toString();
    let b = [];
    let num = 0;
    for(let i = 0; i < a.length; i++){
      if(a[i] == '5' || a[i] == '0'){
      } else {
        b.push(a[i]);
        num = b.join("")
      }
    }
    return Number(num);
  }
  
  //console.log(nNumber(59015509)); //Output 919


  function score(allScore){
    let finalScore = 0;
    let minN = Math.min.apply(null, allScore);
    let minA = allScore.filter(e => e != minN);
    let maxN = Math.max.apply(null, minA);
    let maxA = minA.filter(e => e != maxN)
  
    for(let i = 0; i < maxA.length; i++){
      finalScore += maxA[i];
    }
  return finalScore
}

// //console.log(score([3,5,6,7,9]));

module.exports = nNumber;
module.exports = score;