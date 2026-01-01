// hashrate-creator.js
// Usage: node hashrate-creator.js <password>
// Example: node hashrate-creator.js hareKrishna@1998

import bcrypt from "bcrypt";

const password = process.argv[2];
if (!password) {
  console.error("Usage: node hashrate-creator.js <password>");
  process.exit(1);
}

const saltRounds = 12; // Stronger than 10

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error("Error generating hash:", err);
    process.exit(1);
  }
  console.log("Bcrypt hash for password:", password);
  console.log(hash);
});

//node generate-hash.js yourpassword
// now use inside database
