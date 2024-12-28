const { spawn } = require("child_process")

// Run `npm start` using a child process
const process = spawn('npm', ['run', 'dev'], { stdio: 'inherit', shell: true });

process.on('close', (code) => {
    console.log(`Evershop exited with code ${code}`);
});
