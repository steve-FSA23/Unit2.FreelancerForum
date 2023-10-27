// Selecting elements from the DOM
const averagePrice = document.getElementById("average__price");
const tableContainer = document.querySelector(".table__container");
const addFreelancerBtn = document.querySelector(".add__freelancer__btn");
// Freelancer Data
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
];

// Function to calculate the average starting price
function calculateAveragePrice() {
    const totalPrices = freelancers.reduce(
        (sum, freelancer) => sum + freelancer.price,
        0
    );
    const average = totalPrices / freelancers.length;
    return average.toFixed(2); // Round to 2 decimal places
}

// Function to display freelancers and update the average
function updateFreelancers() {
    tableContainer.innerHTML = `
    <tr>
    <th>Name</th>
    <th>Occupation</th>
    <th>Starting Price</th>
   </tr>
    `;
    // Add freelancers to the list
    freelancers.forEach((freelancer) => {
        tableContainer.innerHTML += `
        <tr>
          <td>${freelancer.name}</td>
          <td>${freelancer.occupation}</td>
          <td>$${freelancer.price}</td>
       </tr>
        `;
    });

    // Update the average starting price
    averagePrice.textContent = `$${calculateAveragePrice()}`;
}

// Initial update
updateFreelancers();

//Simulate new freelancers appearing every few seconds
newFunction(); // Update every 5 seconds

function newFunction() {
    setInterval(() => {
        // Simulated new data (Carol, Programmer, $70)
        const newFreelancer = {
            name: "Steve",
            occupation: "Programmer",
            price: 100,
        };
        freelancers.push(newFreelancer);

        // Update the freelancers and average
        updateFreelancers();
    }, 4000);
}
