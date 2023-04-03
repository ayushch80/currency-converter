# Currency Converter App
This is a simple currency converter app built using React. It enables users to convert between currencies by fetching exchange rates from the Paytm API.

## Usage
To use the app, you need to run it in your local environment. Start by installing the dependencies with the following command:

```
npm install
```

Then, start the app with the following command:

```
npm start
```

This will launch the app in your web browser. You can select the currency you want to convert from and to, enter the amount to convert, and click the "Convert" button to see the result.

## Dependencies
The app depends on the following packages:

- React
- react-dom
- react-scripts
You can install these packages by running the `npm install` command.

## API
The app fetches currency exchange rates from the following Paytm API endpoint:


```
https://webappsstatic.paytm.com/growth-api/currency/rate/rate.json
```

## Components
The app consists of a single component:

- `App` : This component fetches the currency exchange rates from the Paytm API, allows users to select currencies and enter the amount to be converted, and displays the result.

## State
The app uses the following states:

- `data`: This state stores the currency exchange rates fetched from the API.
- `amount`: This state stores the amount entered by the user.
- `fromCurrency`: This state stores the currency the user wants to convert from.
- `toCurrency`: This state stores the currency the user wants to convert to.
- `result`: This state stores the result of the currency conversion.


## Methods
The app uses the following methods:

- `handleAmountChange`: This method updates the `amount` state when the user enters a value.
- `handleFromCurrencyChange`: This method updates the `fromCurrency` state when the user selects a currency to convert from.
- `handleToCurrencyChange`: This method updates the `toCurrency` state when the user selects a currency to convert to.
- `handleConvert`: This method calculates the result of the currency conversion and updates the `result` state.


## Building
To build the app for production, run the following command:

```
npm run build
```

This will create a production-ready build of the app in the `build` folder.

## Conclusion
This is a simple yet powerful app that demonstrates how to fetch data from an API and use it to build a currency converter. You can easily modify it to include additional currencies or features as needed.