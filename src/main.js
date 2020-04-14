import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery'; 
import { blueFood, stateChanger, hydrate, giveLight } from './plant.js';

$(document).ready(function(){
  
  $('#feed').click(function() {
    console.log("#feed clicked.");
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });

  $('#giveLight').click(function() {
    console.log("#giveLight clicked.");
    const newState = stateChanger(giveLight);
    $('#light-value').text(newState.light);
  });

  $('#hydrate').click(function() {
    console.log("#hydrate clicked.");
    const newState = stateChanger(hydrate);
    $('#water-value').text(newState.water);
  });
});
