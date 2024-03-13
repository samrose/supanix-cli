const figlet = require('figlet');

const { Command } = require('commander');
const { exec } = require('child_process');
const { yellow, red, cyan, blue, green } = require('kleur');
console.log(green("Welcome to SUPANIX!"));

console.log(green(figlet.textSync("Supanix")));

const program = new Command();

program
  .command('build <flakeURL>')
  .description('Run the nix build command on the system with the flake URL as an argument')
  .action((flakeURL: string) => {
    // Execute the ls command using child_process.exec
    exec(`nix build ${flakeURL}`, ((err: Error | null, stdout: string, stderr: string) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
        console.log(`${stdout}`);
        console.error(`${stderr}`);
        }));
    });

program.parse(process.argv);
