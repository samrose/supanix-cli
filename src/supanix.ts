const figlet = require('figlet');

const { Command } = require('commander');
const { exec } = require('child_process');
const { yellow, red, cyan, blue, green } = require('kleur');
console.log(cyan("Welcome to SUPANIX!"));

console.log(green(figlet.textSync("SUPANIX")));

const program = new Command();

program
  .command('build <flakeURL>')
  .description('Run the nix build command on the system')
  .action((flakeURL: string) => {
    // Execute the ls command using child_process.exec
    exec(`nix build ${flakeURL}`, ((err: Error | null, stdout: string, stderr: string) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        }));
    });

program.parse(process.argv);
