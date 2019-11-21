// import
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { JokeAPIService } from './joke-api-service.js';
// import img from './file.png';
// import {  } from './file.js';

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    const category = $('#category').val();

    (async () => {
      let jokeApiService = new JokeAPIService();
      const response = await jokeApiService.getJokeByCategory(category);
      getElements(response);
      console.log(response);
    })();

    function getElements(response) {
      if (response.type === "twopart") {
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

  });
});
