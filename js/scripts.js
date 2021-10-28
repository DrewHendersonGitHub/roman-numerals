function convert(number) {
  let remainder =  0;
  let numeral = "";
  for (; number > 0; ) {
    numeral = numeral.concat("I");
    number--;
  }
  console.log(numeral);
}

let answer = convert(2);
console.log(answer);

