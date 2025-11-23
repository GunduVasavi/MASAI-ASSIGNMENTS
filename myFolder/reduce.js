const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];
const result = categories.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log("Category Count:", result);

const sortedCategories = Object.entries(result)
  .sort((a, b) => b[1] - a[1])
  .map(item => item[0]);

console.log("Sorted Categories:", sortedCategories);
