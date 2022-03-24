# When In Rome

[Live link](http://when-in-rome-three.vercel.app/)

## Available Scripts

### Installation

```bash
npm i
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

```bash
npm run start
```

## Post Assignment Questions

### Roman Math

**How would you structure your code, so that the following is straightforward to implement?**

I implemented the math functionality by creating an math input component that is similar to the regular input component in that it has a dropdown to select the operation instead of the conversion and added an extra roman numeral input box with validation to check for a valid roman numeral string. Then I created a new debounce function using the regular debounce function as a starting point to make the network calls every half a second for the user input to be processed and then did the math operation on the client side.

### Testing

**What and How would you test this code?**

I would test the main business logic using Jest unit test to check for proper inputs and edge cases and I would test the UI using Cypress to check if the input validation is working as expected. I could test the React components using react testing library as well. Also, there is no production data to worry about in this example but if there were, I would mock the network calls too for testing purposes.

### Logging

**How would you implement logging into the app to help the development?**

I would implement logging by using the [pino-logflare solution](https://github.com/vercel/next.js/discussions/13214) to collect logs for the client side and in the API routes on the server side. The client sides logs appear in the browser and the server side on the stdout and so I would use the pino client. I could then send the logs to a log handler using the Vercel logflare integration.

### Validation

**How would you handle user input validation?**

I implemented the user input validation functionality by setting a regex pattern on the input element and then checking for validity before updating the state on the controlled input component.

```jsx
const handleTextChange = (e) => {
  const isValid = e.target.checkValidity()
  setIsValid(isValid)

  if (isValid) {
    setValue(e.target.value)
  } else {
    e.target.reportValidity()
  }
}
```

I also used the `isValid` flag to show on the UI that the input was invalid by setting the aria-invalid attribute as well as the styling to be red. I could also add a custom message to show when the aria-invalid for users to know what exactly is invalid.

### Continuous Integration

**How would you setup continuous integration on this app?**

I setup CI using Vercel but I could have used GitHub Actions or any other CI provider to build and push to production on every code change to the main branch as well. I could setup preview deployment for feature branches as well. I could also run all the unit and itegration tests in the CI runner on every code change I would have included them.
