import { blueFood, lily, hydrate, giveLight, rose, storeState, current } from '../src/plant.js';

describe('Plant', () => {
  // let thing;

  beforeEach(() => {
    const plant1 = {soil: 0, water: 0, light: 0}; 
    const flower = storeState(plant1);
  });

  test('should show plant was created with zero properties', () => {
    const plant1 = {soil: 0, water: 0, light: 0}; 
    const flower = storeState(plant1);
    const plant = flower(current);
    expect(plant.soil).toEqual(0);
    expect(plant.water).toEqual(0);
    expect(plant.light).toEqual(0);
  });

  test('should show plant changed state with hydrate', () => {
    const plant1 = {soil: 0, water: 0, light: 0}; 
    const flower = storeState(plant1);
    const plant = flower(hydrate);
    expect(plant.soil).toEqual(0);
    expect(plant.water).toEqual(2);
    expect(plant.light).toEqual(0);
  });

  test('should show plant changed state with giveLight', () => {
    const plant1 = {soil: 0, water: 0, light: 0}; 
    const flower = storeState(plant1);
    const plant = flower(giveLight);
    expect(plant.soil).toEqual(0);
    expect(plant.water).toEqual(0);
    expect(plant.light).toEqual(3);
  });

  test('should show plant changed state with feed', () => {
    const plant1 = {soil: 0, water: 0, light: 0}; 
    const flower = storeState(plant1);
    const plant = flower(blueFood);
    expect(plant.soil).toEqual(5);
    expect(plant.water).toEqual(0);
    expect(plant.light).toEqual(0);
  });

  test('should show plant changed state with multiple properties', () => {
    const plant1 = {soil: 0, water: 0, light: 0}; 
    const flower = storeState(plant1);
    let plant = flower(blueFood);
    plant = flower(hydrate);
    plant = flower(giveLight)
    expect(plant.soil).toEqual(5);
    expect(plant.water).toEqual(2);
    expect(plant.light).toEqual(3);
  });

  test('should show plant changed state with multiple flowers', () => {
    const plant1 = {soil: 0, water: 0, light: 0}; 
    const flower = storeState(plant1);
    const plant = flower(blueFood);
    const plant2 = {soil: 0, water: 0, light: 0}; 
    const flower2 = storeState(plant2);
    const plant3 = flower2(hydrate);
    expect(plant.soil).toEqual(5);
    expect(plant.water).toEqual(0);
    expect(plant.light).toEqual(0);
    expect(plant3.soil).toEqual(0);
    expect(plant3.water).toEqual(2);
    expect(plant3.light).toEqual(0);
  });

});