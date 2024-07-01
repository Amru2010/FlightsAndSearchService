# Welcome to flight service

# Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as your root diretory of the download
- Create the `.env` file in your root directory and add the the following environment variables:
    - `PORT=3000`
- Inside the `src/config` folder, create a new file `config.json` and add the following piece of json

```

{
    "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```

- Once you have added the db config as listed above, go to the src folder and execute `npx seqelize db:create` 
```
