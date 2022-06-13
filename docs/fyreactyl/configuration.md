---
sidebar_position: 3
---

# Configuration

Fyreactyl needs configuration before you can start it up, therefore you can use this page

## Configuring your Settings

The `settings.yml` page can be quite confusing, but below is a breakdown of how to configure it

```yaml
website:
  port: 8000
  secret: 'keep this a secret!'
  secure: false # This option requires https.
  url: 'http://localhost:8000'
```

This is the less important stuff but the url and the port are very important for later on

### Discord Auth

```yaml
discord:
  id: ''
  secret: ''
  signup_callback: 'http://localhost:8000/accounts/discord/signup/callback'
  login_callback: 'http://localhost:8000/accounts/discord/login/callback'
  link_callback: 'http://localhost:8000/accounts/discord/link/callback'
  prompt: false

  token: ''
  guild: '000000000000000000' # Add your server ID you want to force users to join on login here.
```

your Discord credentials can be found at the developer [portal](https://discord.com/developers/applications) with the application you are using for Fyreactyl. When setting up the `callback`, make sure it is also whitelisted in the portal: **Your Application > Oauth2 > General > Redirects**. The `token` is very important for Fyreactyl as this verifies the user is banned.  
**DO NOT LEAK THIS TOKEN**

**Make sure you don't forget to replace `http://localhost:8000` with your own domain!**

### Pterodactyl config

```yaml
pterodactyl:
  domain: '' # The panel domain
  key: '' # Make sure to higher/remove rate limits for application API keys, so the dashboard doesn't get rate limited.
  generate_password_on_sign_up: true
```

Fyreactyl currently only works with pterodactyl, make sure you have one up and running.

The `domain` is your panel domain you linked to, can either be an ip or domain (domain is more secure).  
The `key` your key can be found in the administrator section of the panel. Go to api and create the admin key. (Give it all the permissions because fyreactyl needs those permissions)

### Database

The database, where all the data is stored, below you will find a guide on how to setup your database.

```bash
mysql -u root -p

# After you've got that setup, let's go into the next step. Remember to change 'YourPasswordHere' with a secure password.
CREATE USER 'fyreactyl'@'127.0.0.1' IDENTIFIED BY 'YourPasswordHere';
CREATE DATABASE dashboard;
GRANT ALL PRIVILEGES ON dashboard.* TO 'fyreactyl'@'127.0.0.1' WITH GRANT OPTION;
quit;
```

In the configuration you find this config, if you followed the database creation above you can type over the pre-filled config

```yaml
database:
  host: 'Enter your database IP here.'
  port: '3306'
  user: 'fyreactyl'
  password: 'Enter your database password here.'
  database: 'dashboard'
```

Now, fill in the pre-filled config, the rest you can do yourself. The password is the password from the user. If your hosting the database on the machine your hosting fyreactyl on you can enter the following ip: `127.0.0.1`

### API EndPoints

```yaml
api: # The client area might break if there are no API codes, so I highly recommend adding a single secure API code.
  apicodepassword: # This would be the "Bearer apicodepassword".
    user info: true
    blacklist user: true
    unblacklist user: true
    set coins: true
    set package: true
    set resources: true
    create coupon: true
    revoke coupon: true
    change name: true
```

This section is how the api is configured. Watch out carefully and make sure to configure it correctly. The password is the name of the variable called `apicodepassword` if Is would change the name of the variable to `password` this would be the password of the api.

### Locations

```yaml
locations:
  '1': # Location ID.
    name: 'US' # Location display name.
    enabled: true # Enable or disable server creation on this location.
    package: null # Required package to make a server on this location.

    # package:
    # - default
    # - another_package_name

    renewal: false # Enables renewals for this feature. (Do not toggle after setting up this node on the client area. It might break things.)
```

Here, you can add nodes. Fyreactyl will automatically detect nodes on the location, you can also fill in a package required for the nodes.

### Eggs

```yaml
eggs: # These are the eggs servers can be created with.
  paper:
    display: 'Paper'
    minimum:
      memory: 100
      disk: 100
      cpu: 10
    maximum:
      memory: null
      disk: null
      cpu: null
    info:
      egg: 3
      docker_image: quay.io/pterodactyl/core:java
      startup: java -Xms128M -Xmx{{SERVER_MEMORY}}M -Dterminal.jline=false -Dterminal.ansi=true -jar {{SERVER_JARFILE}}
      environment:
        SERVER_JARFILE: 'server.jar'
        BUILD_NUMBER: 'latest'
      feature_limits:
        databases: 1
        backups: 1
```

Above you have an example of a java egg, I will try to make a page on how to add a python, nodejs egg soon.

### Plans

```yaml
packages: # These are packages. They are organized categories on how much resources you would give to anyone with this package.
  default: 'default'
  list:
    default:
      display: 'The package name.'
      memory: 1024
      disk: 1024
      cpu: 100
      servers: 1
    pro:
      id: 'pro'
      display: 'Pro Package'
      memory: 2048
      disk: 2048
      cpu: 200
      servers: 2
      price: 20000
      paid: true
```

The packages, the interesting part. The `default` value is the name of the package you want as default. This will be assigned when the user creates an account. You can also create paid packages using coins.

### Store

```yaml
store: # This is the store options.
  # 'enabled' is an option, which toggles if you can buy a single type of resource of.
  # 'cost' is the amount of coins 'per' of a resource would cost.

  memory:
    enabled: true
    cost: 10
    per: 10

  disk:
    enabled: true
    cost: 10
    per: 10

  cpu:
    enabled: true
    cost: 10
    per: 10

  servers:
    enabled: true
    cost: 10
    per: 10

  packages:
    enabled: true
```

Simple configuration, not much to explain here

### AFK4Coins

```yaml
afk:
  domain_lock:
    - localhost:8000 # Change this to your actual domain.
  redirect_on_attempt_to_steal_code: https://www.youtube.com/watch?v=dQw4w9WgXcQ
  arc_id: ''
  google_ads_pub_key: ''
  everywhat: 60 # seconds
  gaincoins: 1 # coins

renewal:
  renewal_time: 6.048e+8
  deletion_time: 100

  renew_fee: 10 # coins
```

Afk, the hardest part of all the configuration.
I do not recommend arc, but you can use it. Use google ads instead. With google ads just enter the id. If i would had the following code `ca-pub-9483705876135332` the id would be `9483705876135332`.

## Set Up Nginx

This is the most **important** part.
Here you will install **nginx, certbot, and python3-certbot-nginx**

```bash
sudo apt install nginx python3-certbot-nginx certbot
```

Now to install "let's encrypt" SSL for you domain

```bash
systemctl stop nginx
certbot certonly --standalone -d <FYREACTYL-DOMAIN>
```

When finished creating the ssl, your confirmation message should look like below. If not please contact us on our discord server.

```bash
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/your.domain/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/your.domain/privkey.pem
   Your cert will expire on date. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

time to set the config file!

```bash
cd /etc/nginx/sites-available
nano fyreactyl.conf
```

Paste it in the config
Change `<DOMAIN>` & `<PORT>` to your port and domain.

```conf
server {
  listen 80;
  server_name <DOMAIN>;
  return 301 https://$server_name$request_uri;
}
server {
  listen 443 ssl http2;

  server_name <DOMAIN>;
  ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;
  ssl_session_cache shared:SSL:10m;
  ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers  HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;

  location / {
    proxy_pass http://localhost:<PORT>/;
    proxy_buffering off;
    proxy_set_header X-Real-IP $remote_addr;
  }

  location /afkwspath {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
    proxy_pass "http://localhost:<PORT>/afkwspath";
  }
}
```

Now put this file in the correct directory.

```bash
sudo ln -s /etc/nginx/sites-available/fyreactyl.conf /etc/nginx/sites-enabled/fyreactyl.conf
```

Once you are done, you can restart nginx with `sudo systemctl restart nginx`. Don't forget to restart fyreactyl.
