function power(arg1, arg2) {
  const baseArg1 = arg1;
  let result = 1;
  function helper (arg1, arg2) {
      if (arg2 === 0) return result; 
      result *= baseArg1;
      return helper(arg1, arg2 - 1);
  }
  helper(baseArg1, arg2);
  console.log(result);
}

power(2, 0);