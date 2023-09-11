// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to HTML elements
//   const productNameInput = document.getElementById("productName");
//   const productQuantityInput = document.getElementById("productQuantity");
//   const productIdInput = document.getElementById("productId");
//   const productPriceInput = document.getElementById("productPrice");
//   const productDateInput = document.getElementById("productDate");
//   const addProductButton = document.getElementById("addProduct");
//   const totalAmountElement = document.getElementById("totalAmount");
//   const inventoryListBody = document.getElementById("inventoryList").getElementsByTagName("tbody")[0];
//   const deletedProductListBody = document.getElementById("deletedProductList").getElementsByTagName("tbody")[0];
//   const removeAllDeletedButton = document.getElementById("removeAllDeleted");

//   // Initialize inventory and deleted products arrays
//   let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
//   const deletedProducts = [];

//   // Function to save the inventory to localStorage
//   function saveInventoryToLocalStorage() {
//     localStorage.setItem("inventory", JSON.stringify(inventory));
//   }

//   // Load the inventory from localStorage when the page loads
//   if (localStorage.getItem("inventory")) {
//     inventory = JSON.parse(localStorage.getItem("inventory"));
//   }

//   // Event listener for adding a new product
//   addProductButton.addEventListener("click", function () {
//     const productName = productNameInput.value;
//     const productQuantity = parseInt(productQuantityInput.value);
//     const productId = productIdInput.value;
//     const productPrice = parseFloat(productPriceInput.value);
//     const productDate = productDateInput.value;

//     // Validate input
//     if (!productName || isNaN(productQuantity) || !productId || isNaN(productPrice) || !productDate) {
//       alert("Please fill in all fields with valid data.");
//       return;
//     }

//     // Create a new product object
//     const newProduct = {
//       name: productName,
//       quantity: productQuantity,
//       id: productId,
//       price: productPrice,
//       date: productDate,
//     };

//     // Add the product to the inventory
//     inventory.push(newProduct);

//     // Clear input fields
//     productNameInput.value = "";
//     productQuantityInput.value = "";
//     productIdInput.value = "";
//     productPriceInput.value = "";
//     productDateInput.value = "";

//     // Save the updated inventory to localStorage
//     saveInventoryToLocalStorage();

//     // Update the inventory list
//     updateInventoryList();

//     // Calculate and display the total amount
//     updateTotalAmount();

//     // Prevent form submission
//     event.preventDefault();
//   });

//   // Event listener for removing all deleted products
//   removeAllDeletedButton.addEventListener("click", function () {
//     // Clear the deleted products array
//     deletedProducts.length = 0;

//     // Update the deleted products list
//     updateDeletedProductList();
//   });

//   // Function to update the inventory list
//   function updateInventoryList() {
//     // Clear the current inventory list
//     inventoryListBody.innerHTML = "";

//     // Populate the inventory list with the updated data
//     inventory.forEach(function (product) {
//       const row = inventoryListBody.insertRow();
//       const totalAmount = product.quantity * product.price;
//       row.innerHTML = `
//           <td>${product.name}</td>
//           <td><span class="quantity">${product.quantity}</span> </td>
//           <td>${product.id}</td>
//           <td>${product.price}</td>
//           <td>${product.date}</td>
//           <td class="total-amount">${totalAmount.toFixed(2)}</td>
//           <td>
//             <button class="edit-quantity">Edit</button>
//             <button class="delete-product">Delete</button>
//           </td>
//         `;

//       // Add a click event listener to the delete button
//       const deleteButton = row.querySelector(".delete-product");
//       deleteButton.addEventListener("click", function () {
//         // Move the deleted product to the deleted products array
//         deletedProducts.push(product);

//         // Remove the product from the inventory
//         inventory.splice(inventory.indexOf(product), 1);

//         // Update both lists
//         updateInventoryList();
//         updateDeletedProductList();
//         updateTotalAmount();
//         // Save the updated inventory to localStorage
//         saveInventoryToLocalStorage();
//       });

//       // Add a click event listener to the edit button
//       const editButton = row.querySelector(".edit-quantity");
//       editButton.addEventListener("click", function () {
//         const quantitySpan = row.cells[1];
//         const newQuantity = prompt("Enter new quantity:", product.quantity);

//         // Validate the new quantity
//         if (newQuantity !== null && !isNaN(newQuantity)) {
//           product.quantity = parseInt(newQuantity);
//           quantitySpan.textContent = newQuantity;
//           updateTotalAmount();
//           // Update the total amount column
//           const newTotalAmount = product.quantity * product.price;
//           row.querySelector(".total-amount").textContent = newTotalAmount.toFixed(2);

//           // Save the updated inventory to localStorage
//           saveInventoryToLocalStorage();
//         }
//       });
//     });
//   }

//   // Function to update the deleted products list
//   function updateDeletedProductList() {
//     // Clear the current deleted products list
//     deletedProductListBody.innerHTML = "";

//     // Populate the deleted products list with the updated data
//     deletedProducts.forEach(function (product) {
//       const row = deletedProductListBody.insertRow();
//       const totalAmount = product.quantity * product.price;
//       row.innerHTML = `
//           <td>${product.name}</td>
//           <td>${product.quantity}</td>
//           <td>${product.id}</td>
//           <td>${product.price}</td>
//           <td class="total-amount">${totalAmount.toFixed(2)}</td>
//           <td>${product.date}</td>
//         `;
//     });
//   }

//   // Function to calculate and display the total amount
//   function updateTotalAmount() {
//     const totalAmount = inventory.reduce((total, product) => total + product.quantity * product.price, 0);
//     totalAmountElement.textContent = `Total Amount : Rs ${totalAmount.toFixed(2)}`;
//   }



//   // Initial setup: Update both lists and total amount
//   updateInventoryList();
//   updateDeletedProductList();
//   updateTotalAmount();
// });





document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const productNameInput = document.getElementById("productName");
  const productQuantityInput = document.getElementById("productQuantity");
  const productIdInput = document.getElementById("productId");
  const productPriceInput = document.getElementById("productPrice");
  const productDateInput = document.getElementById("productDate");
  const addProductButton = document.getElementById("addProduct");
  const totalAmountElement = document.getElementById("totalAmount");
  const inventoryListBody = document.getElementById("inventoryList").getElementsByTagName("tbody")[0];
  const deletedProductListBody = document.getElementById("deletedProductList").getElementsByTagName("tbody")[0];
  const removeAllDeletedButton = document.getElementById("removeAllDeleted");

  // Initialize inventory and deleted products arrays
  let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
  let deletedProducts = JSON.parse(localStorage.getItem("deletedProducts")) || [];

  // Function to save the inventory to localStorage
  function saveInventoryToLocalStorage() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }

  // Function to save deleted products to localStorage
  function saveDeletedProductsToLocalStorage() {
    localStorage.setItem("deletedProducts", JSON.stringify(deletedProducts));
  }

  // Load the inventory from localStorage when the page loads
  if (localStorage.getItem("inventory")) {
    inventory = JSON.parse(localStorage.getItem("inventory"));
  }

  // Load deleted products from localStorage when the page loads
  if (localStorage.getItem("deletedProducts")) {
    deletedProducts = JSON.parse(localStorage.getItem("deletedProducts"));
  }

  // Event listener for adding a new product
  addProductButton.addEventListener("click", function () {
    const productName = productNameInput.value;
    const productQuantity = parseInt(productQuantityInput.value);
    const productId = productIdInput.value;
    const productPrice = parseFloat(productPriceInput.value);
    const productDate = productDateInput.value;

    // Validate input
    if (!productName || isNaN(productQuantity) || !productId || isNaN(productPrice) || !productDate) {
      alert("Please fill in all fields with valid data.");
      return;
    }

    // Create a new product object
    const newProduct = {
      name: productName,
      quantity: productQuantity,
      id: productId,
      price: productPrice,
      date: productDate,
    };

    // Add the product to the inventory
    inventory.push(newProduct);

    // Clear input fields
    productNameInput.value = "";
    productQuantityInput.value = "";
    productIdInput.value = "";
    productPriceInput.value = "";
    productDateInput.value = "";

    // Save the updated inventory to localStorage
    saveInventoryToLocalStorage();

    // Update the inventory list
    updateInventoryList();

    // Calculate and display the total amount
    updateTotalAmount();

    // Prevent form submission
    event.preventDefault();
  });

  // Event listener for removing all deleted products
  removeAllDeletedButton.addEventListener("click", function () {
    // Clear the deleted products array
    deletedProducts = [];

    // Update the deleted products list
    updateDeletedProductList();

    // Save the updated deleted products to localStorage
    saveDeletedProductsToLocalStorage();
  });

  // Function to update the inventory list
  function updateInventoryList() {
    // Clear the current inventory list
    inventoryListBody.innerHTML = "";

    // Populate the inventory list with the updated data
    inventory.forEach(function (product) {
      const row = inventoryListBody.insertRow();
      const totalAmount = product.quantity * product.price;
      row.innerHTML = `
              <td>${product.name}</td>
              <td><span class="quantity">${product.quantity}</span></td>
              <td>${product.id}</td>
              <td>${product.price}</td>
              <td>${product.date}</td>
              <td class="total-amount">${totalAmount.toFixed(2)}</td>
              <td>
                  <button class="edit-quantity">Edit</button>
                  <button class="delete-product">Delete</button>
              </td>
          `;

      // Add a click event listener to the delete button
      const deleteButton = row.querySelector(".delete-product");
      deleteButton.addEventListener("click", function () {
        // Move the deleted product to the deleted products array
        deletedProducts.push(product);

        // Remove the product from the inventory
        inventory.splice(inventory.indexOf(product), 1);

        // Update both lists
        updateInventoryList();
        updateDeletedProductList();
        updateTotalAmount();

        // Save the updated inventory to localStorage
        saveInventoryToLocalStorage();

        // Save the updated deleted products to localStorage
        saveDeletedProductsToLocalStorage();
      });

      // Add a click event listener to the edit button
      const editButton = row.querySelector(".edit-quantity");
      editButton.addEventListener("click", function () {
        const quantitySpan = row.querySelector(".quantity");
        const newQuantity = prompt("Enter new quantity:", product.quantity);

        // Validate the new quantity
        if (newQuantity !== null && !isNaN(newQuantity)) {
          const parsedQuantity = parseInt(newQuantity);

          // Check if the new quantity is zero or less
          if (parsedQuantity <= 0) {
            // Move the deleted product to the deleted products array
            deletedProducts.push(product);

            // Remove the product from the inventory
            inventory.splice(inventory.indexOf(product), 1);

            // Update both lists
            updateInventoryList();
            updateDeletedProductList();
            updateTotalAmount();

            // Save the updated inventory to localStorage
            saveInventoryToLocalStorage();

            // Save the updated deleted products to localStorage
            saveDeletedProductsToLocalStorage();
          } else {
            // Update the product quantity and display
            product.quantity = parsedQuantity;
            quantitySpan.textContent = parsedQuantity;

            // Update the total amount column
            const newTotalAmount = product.quantity * product.price;
            row.querySelector(".total-amount").textContent = newTotalAmount.toFixed(2);

            // Update the total amount
            updateTotalAmount();

            // Save the updated inventory to localStorage
            saveInventoryToLocalStorage();
          }
        }
      });
    });
  }

  // Function to update the deleted products list
  function updateDeletedProductList() {
    // Clear the current deleted products list
    deletedProductListBody.innerHTML = "";

    // Populate the deleted products list with the updated data
    deletedProducts.forEach(function (product) {
      const row = deletedProductListBody.insertRow();
      const totalAmount = product.quantity * product.price;
      row.innerHTML = `
              <td>${product.name}</td>
              <td>${product.quantity}</td>
              <td>${product.id}</td>
              <td>${product.price}</td>
              <td>${product.date}</td>
              <td class="total-amount">${totalAmount.toFixed(2)}</td>
          `;
    });
  }

  // Function to calculate and display the total amount
  function updateTotalAmount() {
    const totalAmount = inventory.reduce((total, product) => total + product.quantity * product.price, 0);
    totalAmountElement.textContent = `Total Amount : Rs ${totalAmount.toFixed(2)}`;
  }

  // Initial setup: Update both lists and total amount
  updateInventoryList();
  updateDeletedProductList();
  updateTotalAmount();
});
