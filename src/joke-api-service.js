export class JokeAPIService {
  async getJokeByCategory(category) {
    try {
      let response = await fetch(`https://sv443.net/jokeapi/category/${category}?blacklistFlags=nsfw,religious,political&format=json`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error(`There was an error handling your request: ${error.message}`);
    }
  }
}
