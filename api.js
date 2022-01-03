export async function fetchImages() {
  const response = await fetch(
    //`https://dog.ceo/api/breed/shiba/images/random/12`
    `https://foodish-api.herokuapp.com/api/`
  );
  const data = await response.json();
  //return data.message;
  return data.image;
  //return "https://foodish-api.herokuapp.com/images/dosa/dosa45.jpg";
}