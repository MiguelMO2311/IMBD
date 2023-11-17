import { Movie } from './movie';
import {Imdb} from './imdb';
import { Professional } from './professional';

let movie1 = new Movie ('El Rey Leon',1994,'United States of America', 'musical', )
let movie2 = new Movie ('Mision Imposible- Sentencia Mortal_1', 2023, 'United States of America','action')
let director1 = new Professional ('Pepe', 45, 56, 1.60, true, 'Spanish', 8, 'director');
let director2 = new Professional('Christopher McQuarrie', 54, 73, 1.83,true, 'American',3,'director')
let writer1 = new Professional ('Juan', 45, 56, 1.60, true, 'Spanish', 8, 'director');
let writer2 = new Professional ('Jhon Waine', 39, 65, 1.90, true, 'Indian', 8, 'freelance');
let actor1 = new Professional('Juan Carlos', 45, 56, 1.60, true, 'Spanish', 8, 'director');
let actor2 = new Professional('Antonio Banderas', 63, 70, 1.70, true, 'Spanish', 1, 'actor')
movie1.actors.push(actor1);
movie2.actors.push(actor2),
movie1.director = director1;
movie2.director = director2;
movie1.writer = writer1;
movie2.writer = writer2;

let film1 = new Imdb ([movie1, movie2]);
console.log (film1)
