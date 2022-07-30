// Example AJAX GET request made to a scrabble-type API

const url = "https://api.datamuse.com/words?sl="

const getSuggestions = () => {
  const wordQuery = inputField.value
  const endpoint = url + wordQuery;
  fetch(endpoint, {cache: "no-cache"}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!")
  }, (networkError) => {
    console.log(networkError.message);
  }).then(jsonResponse => {renderResponse(jsonResponse)}); // Using renderRawResponse() returns the JS object, I believe.
}

// Example AJAX POST request made to a URL shortening API

const url2 = 'https://api.rebrandly.com/v1/links';

const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

	fetch(url2, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json', // Headers are an important part of this.
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!");
  }, networkError => {console.log(networkError.message)
  }).then(jsonResponse => {renderResponse(jsonResponse)})
}

// Example asynchronous GET request from scrabble-type API

// NOTE: Asynchronous requests are important because they handle functions which rely upon external resources.
// by turning a request into an asynchronous one, it operates independently of the call stack and so prevents
// the entire app from failing if the API / external resource isn't available / the request fails for
// whatever reason!

const getSuggestions2 = async () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  try { // Attempted API request
    const response = await fetch(endpoint, {cache: "no-cache"});
    if (response.ok) { // Runs if request was successful
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  }
  catch(error) { // Runs if request was unsuccessful
    console.log(error)
  }
}

// Example asynchronous POST request within an async const function

const shortenUrl2 = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data, // Body and headers are essential for a POST request, as they transmit our data to the API
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
