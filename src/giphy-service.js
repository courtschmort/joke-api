export class GiphyService {
  async getGiphy() {
    try {
      let responseGiphy = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.giphy}&tag=laugh&rating=G`);
      let jsonifiedResponse = await responseGiphy.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error(`There was an error handling your request: ${error.message}`);
    }
  }
}
