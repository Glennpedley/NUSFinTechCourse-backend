function can_vote(age) {
    if (age < 18) {
      return "No";
    } else {
      return "Yes";
    }
  }
  
  // var fn_can_vote = function (age) {
  //   if (age < 18) {
  //     return "No";
  //   } else {
  //     return "Yes";
  //   }
  // };
  
  var arrowfn_can_vote = (age) => {
      if (age < 18) {
        return "No";
      } else {
        return "Yes";
      }
  }
  
  var age = 14;
  console.log(`Age: ${age}, can vote?: ${arrowfn_can_vote(age)}`);
  
  var age = 19;
  console.log(`Age: ${age}, can vote?: ${arrowfn_can_vote(age)}`);
  