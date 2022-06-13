---
sidebar_position: 4
---

# Installation finished

## What's next?

Starting fyreactyl can be done with pm2 (handy tool to keep your stuff running without using node .) if you know how to use pm2, you can skip this part.

```bash
npm install -g pm2

# now starting fyreactyl, go enter the folder where fyreactyl is started

pm2 start index.js --name "fyreactyl"

# Done! you should have fyreactyl running! (Below a list on basic pm2 commands)

# Restart fyreactyl
pm2 restart fyreactyl

# List of running nodejs projects
pm2 list

# Stopping fyreactyl
pm2 stop fyreactyl
```

That's it, Fyreactyl is running!
Have fun!

## Links

- [Join the Discord](https://discord.gg/sXWE8gJrt3)
- [Visit our GitHub](https://github.com/FyreHub)
