async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url);
    console.log(response.ok);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    } else {
      console.log("Response fetched successfully");
    }

    const result = await response.json();
    // console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
