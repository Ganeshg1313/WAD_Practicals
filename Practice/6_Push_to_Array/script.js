// Array to store student data
let studentData = [];

// Function to handle form submission
document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // let formData = new FormData(this); // Capture form data
    // let dataArray = []; // Initialize an empty array to store form data

    // formData.forEach((value, key) => {
    //   dataArray.push({ [key]: value }); // Push each form field's data as an object into the array
    // });

    // console.log(dataArray); // Output the array containing form data

    // dataArray.forEach(item => {
    //     for (let key in item) {
    //         console.log(`Key: ${key}, Value: ${item[key]}`);
    //     }
    // });
    // // You can reset the form here if needed
    // this.reset();

    let userData = {};

    userData["name"] = document.getElementById("name").value;
    userData["email"] = document.getElementById("email").value;
    userData["age"] = document.getElementById("address").value;
    userData["gender"] = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    userData["interests"] = [];

    document
      .querySelectorAll('input[name="interests"]:checked')
      .forEach((checkbox) => {
        userData["interests"].push(checkbox.value);
      });

    console.log(userData);
  });
