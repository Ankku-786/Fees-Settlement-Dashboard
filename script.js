// Initialize an empty array for storing student fee data (for now)
let feeData = [];

// Function to render the fee data in the table
function renderFees() {
  const tableBody = document.getElementById('feeTableBody');
  tableBody.innerHTML = ''; // Clear current table rows
  
  feeData.forEach((fee, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${fee.name}</td>
      <td>${fee.amount}</td>
      <td>
        <button onclick="editFee(${index})">Edit</button>
        <button onclick="deleteFee(${index})">Delete</button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

// Function to add a new fee record
function addFee() {
  const studentName = document.getElementById('studentName').value;
  const amount = document.getElementById('amount').value;
  
  if (studentName === '' || amount === '') {
    alert('Please fill in both fields.');
    return;
  }
  
  const newFee = {
    name: studentName,
    amount: parseFloat(amount)
  };
  
  feeData.push(newFee);
  renderFees();
  
  // Clear the form inputs
  document.getElementById('studentName').value = '';
  document.getElementById('amount').value = '';

  
}

// Function to edit a fee record
function editFee(index) {
  const fee = feeData[index];
  
  // Pre-populate the form with current data
  document.getElementById('studentName').value = fee.name;
  document.getElementById('amount').value = fee.amount;
  
  // Remove the old record and update it
  deleteFee(index);
}

// Function to delete a fee record
function deleteFee(index) {
 
    feeData.splice(index, 1);
    renderFees();
 
 
  
}

// Render the initial (empty) table
renderFees();