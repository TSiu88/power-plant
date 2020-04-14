import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery'; 
import { blueFood, lily, hydrate, giveLight, rose, storeState, current, incrementer } from './plant.js';

$(document).ready(function(){
  
  // can have button to create new plant
  $('#more').click(function() {
    console.log("#more clicked.");
    const num = incrementer();
    const plant1 = {soil: 0, water: 0, light: 0};
    let plant2 = storeState(plant1);
    let newPlant = plant2(current);

    $("#morePlants").append(`<button class="btn-success plant${num}" id="feed${num}">Feed soil</button>`);
    $("#morePlants").append(`<button class="btn-success plant${num}" id="giveLight${num}">Give light</button>`);
    $("#morePlants").append(`<button class="btn-success plant${num}" id="hydrate${num}">Water</button>`);
    
    $("#morePlants").append(`<h1>New Plant${num}</h1>`);
    $("#morePlants").append(`<h3>Soil: <div id="soil-value${num}">${newPlant.soil}</div></h3>`);
    $("#morePlants").append(`<h3>Light: <div id="light-value${num}">${newPlant.soil}</div></h3>`);
    $("#morePlants").append(`<h3>Water: <div id="water-value${num}">${newPlant.soil}</div></h3>`);
  });

  $('#feed').click(function() {
    console.log("#feed clicked.");
    const newState = lily(blueFood);
    $('#soil-value').text(newState.soil);
  });

  $('#feed2').click(function() {
    console.log("#feed2 clicked.");
    const newState = rose(blueFood);
    $('#soil-value2').text(newState.soil);
  });

  $('#giveLight').click(function() {
    console.log("#giveLight clicked.");
    const newState = lily(giveLight);
    $('#light-value').text(newState.light);
  });

  $('#giveLight2').click(function() {
    console.log("#giveLight2 clicked.");
    const newState = rose(giveLight);
    $('#light-value2').text(newState.light);
  });

  $('#hydrate').click(function() {
    console.log("#hydrate clicked.");
    const newState = lily(hydrate);
    $('#water-value').text(newState.water);
  });

  $('#hydrate2').click(function() {
    console.log("#hydrate2 clicked.");
    const newState = rose(hydrate);
    $('#water-value2').text(newState.water);
  });

  // Does not work
  // $('#giveLight').click(function() {
  //   console.log("#giveLight clicked.");
  //   if(document.getElementsByClassName("plant1"))
  //   {
  //     console.log("#giveLight1 clicked.");
  //     const newState = lily(giveLight);
  //     $('#light-value').text(newState.light);
  //   }
  //   else if (document.getElementsByClassName("plant2")){
  //     console.log("#giveLight2 clicked.");
  //     const newState = rose(giveLight);
  //     $('#light-value').text(newState.light);
  //   }
  // });
});
