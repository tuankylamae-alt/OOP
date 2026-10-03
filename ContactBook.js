const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contacts = [];

function showMenu() {
  console.log("\n===== CONTACT BOOK =====");
  console.log("1. Add Contact");
  console.log("2. View Contacts");
  console.log("3. Search Contact");
  console.log("4. Delete Contact");
  console.log("5. Exit");

  rl.question("Choose an option: ", choice => {
    if (choice === "1") {
      addContact();
    } else if (choice === "2") {
      viewContacts();
    } else if (choice === "3") {
      searchContact();
    } else if (choice === "4") {
      deleteContact();
    } else if (choice === "5") {
      console.log("Thank you for using Contact Book!");
      rl.close();
    } else {
      console.log("Invalid choice. Try again.");
      showMenu();
    }
  });
}

// Add a new contact
function addContact() {
  rl.question("Enter contact name: ", name => {
    if (name.trim() === "") {
      console.log("Name cannot be empty!");
      showMenu();
      return;
    }

    rl.question("Enter phone number: ", phone => {
      rl.question("Enter email address: ", email => {
        const contact = {
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim()
        };

        contacts.push(contact);
        console.log("Contact added successfully!");

        showMenu();
      });
    });
  });
}

// Display all contacts
function viewContacts() {
  console.log("\n===== CONTACT LIST =====");

  if (contacts.length === 0) {
    console.log("No contacts available.");
  } else {
    contacts.forEach((contact, index) => {
      console.log(`\nContact ${index + 1}`);
      console.log(`Name: ${contact.name}`);
      console.log(`Phone: ${contact.phone}`);
      console.log(`Email: ${contact.email}`);
    });
  }

  showMenu();
}

// Search for a contact by name
function searchContact() {
  rl.question("Enter name to search: ", name => {
    const results = contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.trim().toLowerCase())
    );

    if (results.length === 0) {
      console.log("Contact not found.");
    } else {
      console.log("\n===== SEARCH RESULTS =====");

      results.forEach(contact => {
        console.log(`Name: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
      });
    }

    showMenu();
  });
}

// Delete a contact
function deleteContact() {
  if (contacts.length === 0) {
    console.log("No contacts to delete.");
    showMenu();
    return;
  }

  viewContactsForDeletion();
}

function viewContactsForDeletion() {
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.name}`);
  });

  rl.question("Enter contact number to delete: ", answer => {
    const number = Number(answer);

    if (
      answer.trim() === "" ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > contacts.length
    ) {
      console.log("Invalid contact number!");
    } else {
      contacts.splice(number - 1, 1);
      console.log("Contact deleted successfully!");
    }

    showMenu();
  });
}

// Start the program
showMenu();