const humanCatDogYears = (number) => {
  let dogAge = 0;
  let catAge = 0;
  if (number === 1){
    dogAge = 15;
    catAge = 15;
  } 
  if (number === 2){
    dogAge = 15 + 9;
    catAge = 15 + 9;
  } 
  if (number >= 3){
    const remain = number - 2;
    dogAge = (15 + 9) + (remain * 5);
    catAge = (15 + 9) + (remain * 4);
  }
  return [number, dogAge, catAge];
}

export default humanCatDogYears
