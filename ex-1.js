// Exercise #1: For Each Function


function addSalary(currentSalaries) {
  { return currentSalaries + 5000 }};

function forEach( array, operation) { 
  let newArray = [];
  for ( let i = 0 ; i < array.length ; i++)
  {newArray.push(operation(array[i]))}
return newArray 
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = forEach(employeeSalaries,addSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]


