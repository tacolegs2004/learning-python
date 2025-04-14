function test() {
  const value = "Test";

  switch (value) {
    case 400:
      console.log("Success")
      break;

    case 600:
      console.log("Failed")
      break;

    default:
      console.log("Faulty value.")
      break;
  }
}

test()
