// Full Name: MICA DANIELLE R. SORIANO
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N3 - File Manager with fs and path
// Date: November 24, 2026

const fs = require("node:fs");
const path = require("node:path");

// Set the directory for storing text files.
const folder = path.join(__dirname, "files");

// Create the directory if it does not exist.
fs.mkdirSync(folder, { recursive: true });

// Get command-line arguments.
const [command, filename, ...words] = process.argv.slice(2);
const content = words.join(" ");

console.log("==========================================");
console.log("              FILE MANAGER");
console.log("==========================================");
console.log("Name: MICA DANIELLE R. SORIANO");
console.log("Section: IV-BSIT C");
console.log("Activity: N3");
console.log("------------------------------------------");

const commands = ["create", "read", "update", "delete", "list"];

// Validate the command.
if (!commands.includes(command)) {
    console.log("Error: Invalid command.");
    process.exit(1);
}

// Validate the filename.
if (command !== "list" &&
    (!filename ||
     path.basename(filename) !== filename ||
     path.extname(filename).toLowerCase() !== ".txt")) {

    console.log("Error: Please provide a valid text filename.");
    process.exit(1);
}

try {
    if (command === "list") {
        const files = fs.readdirSync(folder);

        if (files.length === 0) {
            console.log("No files found.");
        }

        for (const name of files) {
            const fullPath = path.join(folder, name);

            if (!fs.statSync(fullPath).isFile()) {
                continue;
            }

            console.log("Full Path: " + fullPath);
            console.log("File Name: " + path.basename(fullPath));
            console.log("Extension: " + path.extname(fullPath));
            console.log("Contents: " + fs.readFileSync(fullPath, "utf8"));
            console.log("------------------------------------------");
        }

    } else {
        const filePath = path.join(folder, filename);

        switch (command) {

            case "create":
                fs.writeFileSync(filePath, content, {
                    encoding: "utf8",
                    flag: "wx"
                });
                console.log("File created successfully: " + filename);
                break;

            case "read":
                console.log("File: " + filename);
                console.log("Contents:");
                console.log(fs.readFileSync(filePath, "utf8"));
                break;

            case "update":
                if (!fs.existsSync(filePath)) {
                    console.log("Error: File not found.");
                    break;
                }

                fs.appendFileSync(filePath, "\n" + content, "utf8");
                console.log("File updated successfully: " + filename);
                break;

            case "delete":
                fs.unlinkSync(filePath);
                console.log("File deleted successfully: " + filename);
                break;
        }
    }

} catch (error) {

    if (error.code === "ENOENT") {
        console.log("Error: File not found.");
    } else if (error.code === "EEXIST") {
        console.log("Error: File already exists.");
    } else {
        console.log("Error: " + error.message);
    }
}

console.log("==========================================");