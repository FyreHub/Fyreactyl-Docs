module.exports = {
    apps: [
        {
            name: 'Docs - FyreSoftware',
            script: 'yarn',
            args: 'run serve -- --build --port 3000 --host 0.0.0.0',
            interpreter: 'bash'
        }
    ]
}
