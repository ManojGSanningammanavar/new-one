import fs from "fs/promises"
let a= await fs.readFile("amnu.txt");
let b = await fs.appendFile("amnu.txt", "\n\n\n this is amazing promise")
console.log(a.toString(),b)