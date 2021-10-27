//1
function betweenFiveAndTen(int){
  if ( int>=5 && int<=10){
      return true;
  } else return false;
}

//2
function betweenTenAndThirty(int){
  if (int>10 && int<30){
      return true;
  }else return false;
}

//3
function betweenThirtyAndFifty(int){
  if (int>30 && int<50){
      return true;
  }else return false;
}


//4
function betweenThirtyFiftySeventy(int){
  if ((int>0 && int<30) || (int>50 && int<70)){
      return true;
  }else return false;
}

//5
function betweenTwentyFiftySixty(int){
  if ((int>0 && int<20) || (int>50 && int<60)){
      return true;
  }else return false;
}

//6
function betweenTenTwentyThirty(int){
  if ((int>0 && int<10) || (int>20 && int<30)){
      return true;
  }else return false;
}


console.log(betweenFiveAndTen(8));
console.log(betweenTenAndThirty(9));
console.log(betweenThirtyAndFifty(77));
console.log(betweenThirtyFiftySeventy(44));
console.log(betweenTwentyFiftySixty(76));
console.log(betweenTenTwentyThirty(22));