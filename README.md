# React Testing Library

This repo contains example of testing with react-testing-library.

## Testing Playground tool

[Testing playground](https://testing-playground.com/) website is useful for generating selectors. Paste your app html code from the browser to the top-left section of the tool. On the top-right you can find your ready to use selectors.

## Jest extension

Make sure to install **Jest** VS code extension by Orta. It will add another icon option on the left where you can see all the tests folders/files as a tree. You can see the status of all tests and run them individually.

## fireEvent vs userEvent

The best practice is to use userEvent instead of fireEvent, because userEvent is similar to how the user interacts with the browser. More info in the [docs](https://testing-library.com/docs/user-event/intro/#difference-to-fireevent).
