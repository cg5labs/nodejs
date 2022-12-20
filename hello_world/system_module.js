#!/usr/bin/env node

const fs = require('fs')
fs.writeFileSync("app.txt","Hello from Node\n")

console.log("File write done.")

