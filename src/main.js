import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery'; 
import { blueFood, stateChanger } from './plant.js';

$(document).ready(function(){

  $('#feed').click(function() {
    console.log("#feed clicked.");
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
});
