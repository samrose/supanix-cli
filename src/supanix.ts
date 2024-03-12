const figlet = require("figlet");

console.log(figlet.textSync("SUPANIX"));


const { Command } = require("commander");
const { exec } = require('child_process');
const program = new Command();

program
  .command('build <flakeURL>')
  .description('Run the nix build command on the system')
  .action(() => {
    // Execute the ls command using child_process.exec
    exec('nix build ${flakeURL}', ((err: Error | null, stdout: string, stderr: string) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        }));
    });

program.parse(process.argv);
