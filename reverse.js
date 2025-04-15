const names = ['taco', 'amber', 'brett', 'amy']

let reversedArray = []

function reverseString() {
  for (const name of names) {
    reversedArray.push(name.split("").reverse().join(""))
  }

  reversedArray.reverse()

  console.log(reversedArray)

}

reverseString()
