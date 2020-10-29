type Pair = {
    index1: number;
    value1: number;
    index2: number;
    value2: number;
  };
  
  function threeSum(nums: number[]): number[][] {
    let stringResult: string[] = [];
    const sums = getSums(nums);
    for (let i: number = 0; i < nums.length; i++) {
      const num: number = nums[i];
  
      const pairs: Pair[] = sums.get(num * -1);
      if (pairs) {
        pairs.forEach(({ index1, value1, index2, value2 }) => {
          // check for duplicates
          if (i !== index1 && i !== index2) {
            if (value1 === num || value2 === num) {
              debugger;
            }
              stringResult.push(JSON.stringify([value1, value2, num].sort()));
          }
        });
      }
    }
    stringResult = [...new Set(stringResult)];

    return stringResult.map(res => {
      return JSON.parse(res);
    });
  }
  
  function getSums(nums: number[]) {
    const sums = new Map();
    for (let i: number = 0; i < nums.length - 1; i++) {
      for (let j: number = i + 1; j < nums.length; j++) {
        let a: number = nums[i];
        let b: number = nums[j];
        if (sums.has(a + b)) {
          sums.get(a + b).push({ index1: i, value1: a, index2: j, value2: b });
        } else {
          sums.set(a + b, [
              { index1: i, value1: a, index2: j, value2: b },
          ]);
        }
      }
    }
    return sums;
  }