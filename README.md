# GraphQL Backend Adventure

## Install
```bash
$ yarn install
```

## Create .env
```
# Apollo Server
NODE_ENV=development
PORT=3000

# Database
DB_HOST=host
DB_PORT=prot
DB_NAME=database
DB_USER=admin
DB_PASS=0000
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