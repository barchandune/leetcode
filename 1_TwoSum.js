/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const numMap = {}
    
    for(i =0; i < nums.length; i++){
       numMap[nums[i]] = i; // Store array element as key, assign index number as key's value
    }

    for(i =0; i < nums.length; i++){
        const toFind = target - nums[i]
        if(numMap[toFind]){
            return [i, numMap[toFind]]
        }
    }
};
