

let twoSum = function(nums, target){
  const twoSumindexes = [];
  for(let i = 0; i < nums.length; i++){
    let num1 = nums[i];
    for(let j = i + 1; j < nums.length; j++){
      let num2 = nums[j];
      if(num1 + num2 === target){
        twoSumindexes.push(i,j);
      }
    }
  }
  return twoSumindexes;
}

//test cases
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
