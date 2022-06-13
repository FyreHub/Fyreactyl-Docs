---
sidebar_position: 2
---

# Installation

:::warning READ BEFORE PROCEEDING!
When creating a host, I trust you have enough expierence with linux, ubuntu, debian, ...
:::

## Supported Operating Systems

| Name                         | Versions |
| ---------------------------- | -------- |
| [Ubuntu](#ubuntu-and-debian) | >=20.04  |
| [Debian](#ubuntu-and-debian) | >=10     |
| [Windows](#windows)          | >=10     |
| [CentOS](#centos)            | >=7      |

## [Ubuntu & Debian](#ubuntu-and-debian)

If you have not go ahead and install these prerequisites.

```bash
# Becoming root
sudo -i

sudo apt update && sudo apt upgrade

# installing git CLI
sudo apt install git

# installing NPM
sudo apt install npm

# installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt install nodejs

# installing mysql
sudo apt install mysql-server
```

Go ahead and check if the right version has been installed.

```bash
git --version
npm -v
node -v
```

Now to install Fyreactyl:

```bash
git clone https://github.com/FyreSoftware/Fyreactyl.git
cd Fyreactyl
sudo npm install
```

When done installing, you should see the file: `settings-example.yml`. This needs to change to settings.yml, this can easily be done using the commands below.

```bash
cp settings-example.yml settings.yml
nano settings.yml
```

---

## [Windows](#windows)

First, make sure you have all the prerequisites listed at the top of the page (if you do you can skip this part).

- Git CLI: https://git-scm.com/download/win
- NPM and NodeJS: https://nodejs.org/en/

You can check the versions with the following commands:

```bat
git --version
npm -v
node -v
```

Now to install Fyreactyl and its dependencies:

```bat
git clone https://github.com/FyreSoftware/Fyreactyl.git
cd Fyreactyl
npm install
```

It is recommended you use the interface but you can also use the commandline using the following command:

```bash
copy settings-example.yml settings.yml
```

When done copying the settings file you can either use notepad or [visual studio code](https://code.visualstudio.com/) to fill in settings.yml.

## [CentOS](#centos)

If you have not go ahead and install these prerequisites.

```bash
# Becoming root
sudo -i

sudo yum update && sudo apt upgrade

# installing git CLI
sudo yum install git

# installing NPM
sudo yum install npm

# installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo yum install nodejs

# install mysql
sudo yum install mysql-server
```

Go ahead and chech if the right version has been installed.

```bash
git --version
npm -v
node -v
```

Now to install Fyreactyl:

```bash
git clone https://github.com/FyreSoftware/Fyreactyl.git
cd Fyreactyl
sudo yum install
```

When done installing, you should see the file: `settings-example.yml`. This needs to change to settings.yml, this can easily be done using the commands below.

```bash
cp settings-example.yml settings.yml
nano settings.yml
```
