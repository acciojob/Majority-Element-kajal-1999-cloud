//your code here



function majorityElement(nums) {
    let majorityElement = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majorityElement) {
            count++;
        } else if (count === 0) {
            majorityElement = nums[i];
            count = 1;
        } else {
            count--;
        }
    }

    // At this point, majorityElement is a potential majority element.
    // We need to verify if it appears more than n/2 times.

    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === majorityElement) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return majorityElement;
    }
}

// Example usage
const inputArray = [2, 1, 2];
const result = majorityElement(inputArray);
console.log('Majority Element:', result); // Output: Majority Element: 2

