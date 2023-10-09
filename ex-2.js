//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  const moreThan70 = arr.some(o => o === 70)
  return (arr.length === 5 && moreThan70) || !moreThan70
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

console.log(atLeastFive(studentScoresRoom1))
console.log(atLeastFive(studentScoresRoom2))
console.log(atLeastFive(studentScoresRoom3))
