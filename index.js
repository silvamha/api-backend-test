async function callHelloFunction() {
    try {
      const response = await fetch('/.netlify/functions/hello');
      const data = await response.json();
      console.log(data.message); // Logs: "Hello, Netlify!"
    } catch (error) {
      console.error('Error calling Netlify function:', error);
    }
  }
  
  callHelloFunction();
  