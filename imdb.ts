import { Movie } from "./movie";
export class Imdb {
    public films: Object[];
    constructor(films: [{ Movie }]) {
        this.films = [{}];
    };
}
// let movie1 = new Movie('El Rey Leon', 1994, 'United States of America', 'musical')

// let films1 = [{
//     title: 'Mision Imposible- Sentencia Mortal_1',
//     releaseYear: 2023,
//     actors: ['Tom Cruise', 'Hayley Atwell', 'Simon Pegg', 'Ving Rames'],
//     nacionality: 'United States Of America',
//     director: 'Christopher McQuarrie',
//     writer: 'Christopher McQuarrie',
//     language: 'English',
//     plataforma: 'Prime Video',
//     isMCU: true,
//     mainCharacterName: 'Ethan Hunt',
//     producer: 'Christopher McQuarrie',
//     distributor: 'Parmount Pictures',
//     genre: 'action'
// }]


