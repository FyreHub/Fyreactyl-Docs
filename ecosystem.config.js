module.exports = {
    apps: [
        {
            name: 'Docs - FyreSoft',
            script: 'yarn',
            args: 'run serve --build --port 5000 --host docs.fyresoftware.com',
            interpreter: 'bash'
        }
    ]
}
