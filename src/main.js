import { JokeAPIService } from './joke-api-service.js';
import { GiphyService } from './giphy-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import img from './file.png';


$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    $('.output').css('display', 'none');
    const category = $('#select-category').val();

    (async () => {
      let jokeApiService = new JokeAPIService();
      const response = await jokeApiService.getJokeByCategory(category);
      getElements(response);
    })();

    (async () => {
      let giphyService = new GiphyService();
      const giphyResponse = await giphyService.getGiphy();
      getGiphy(giphyResponse);
    })();

    function getElements(response) {
      $('.output').show();
      if (response.delivery) {
        $('.joke-setup').text(`${response.setup}`);
        $('.joke-delivery').text(`${response.delivery}`);
        $('.twopart').show();
        $('.single').hide();
      } else {
        $('.joke').text(`${response.joke}`);
        $('.single').show();
        $('.twopart').hide();
      }
    }

    function getGiphy(giphyResponse) {
      let displayGiphy = giphyResponse.data.images.original.url;
      $('.giphy').html(`<img src='${displayGiphy}' alt='Random Laugh Giphy' style='width: 100%'>`);
    }

  });
});
