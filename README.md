# Project MINI STOCKS PRICE TRACKER
This application is used to track stocks price of top 100 stocks of S&P500. Stocks can be selected and prices are fetched from a mock API every minute. Current price of selected stocks is saved into mongodb.

## Installation
1. npm Install
```sh
npm ci
```

2. save predefined top 100 stocks into mongodb
```sh
node ./server/predefinedDataSave.js
```

3. start client and server in development mode
```sh
npm run client-dev
npm run server-dev
```