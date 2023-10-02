import os from "os";

console.info(os.platform());
console.table(os.cpus());

// tidak bisa karena extension nya .js jika ingin membuat module maka extension nya harus .mjs