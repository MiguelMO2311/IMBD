
import { Professional } from './professional'
import {Movie} from './movie'

let movie1 = new Movie ('El Rey Leon',1994,'United States of America', 'musical', )
let director1 = new Professional ('Pepe', 45, 56, 1.60, true, 'Spanish', 8, 'director');
let writer1 = new Professional ('Juan', 45, 56, 1.60, true, 'Spanish', 8, 'director');
let actor1 = new Professional('Juan Carlos', 45, 56, 1.60, true, 'Spanish', 8, 'director');
movie1.actors.push(actor1);
movie1.director = director1;
movie1.writer = writer1;
console.log (movie1.showAllMovieData());
let showAllMovie1Data = movie1.showAllMovieData();