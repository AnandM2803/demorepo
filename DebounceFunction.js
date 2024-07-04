function debounce(myFunction, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => myFunction.apply(this, args), wait);
    };
  }
  
  function myFunction() {
    console.log('myFunction invoked');
  }
  
  const debouncedFunction = debounce(myFunction, 3000);
  debouncedFunction();