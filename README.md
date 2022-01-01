# GraphQL Backend Adventure

## Install
```bash
$ yarn install
```

## Create environment
Environment file example.
```
# .env
VERSION=1.0.0
NODE_ENV=development
PORT=3000
SECRET=

# Database
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=db
DB_USER=root
DB_PASS=1234

```
## Run server
```bash
$ yarn dev
```

## MySql

```
$ mysql
```

### Set the MySQL user password 
```
mysql> ALTER USER 'user-name'@'localhost' IDENTIFIED BY 'NEW_USER_PASSWORD';
```

### Creating and Selecting a Database
```
mysql> CREATE DATABASE menagerie;
```