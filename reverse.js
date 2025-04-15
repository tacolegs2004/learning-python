const names = ['taco', 'amber', 'brett', 'amy']

let reversedArray = []

function reverseString() {
  for (const name of names) {
    const reversedName = name.split("").reverse().join("")
    reversedArray.push(reversedName)
  }
  reversedArray.reverse()

  console.log(reversedArray)
}

reverseString()
