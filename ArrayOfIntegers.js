

function arrayOfInteger(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complementTarget = target - nums[i];
      if (map.has(complementTarget)) {
        return [map.get(complementTarget), i];
      }
      map.set(nums[i], i);
    }
    return [];
  }
  const nums = [2, 7, 11, 15];
const target = 9;
console.log(arrayOfInteger(nums, target)); 