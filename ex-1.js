// Exercise #1: For Each Function

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let result;

function forEach(array, operation) {
  let newEmployeeSalaries = []
  for (let i = 0; i < array.length; i++) {
    newEmployeeSalaries.push(array[i] + 5000);
  }
  return newEmployeeSalaries
}
result = forEach(employeeSalaries)

console.log(result);
