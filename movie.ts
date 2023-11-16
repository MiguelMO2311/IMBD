import { Professional } from "./professional";
export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;
   

    constructor (title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear =releaseYear;
        this.nacionality = nacionality;
        this. genre = genre;
        this.actors = [];
        this.director =  new Professional('', 0, 0, 0, true,'',0, '');
        this.writer = new Professional('', 0, 0, 0, true,'',0, '');
        this.language = '';
        this.plataforma = '';
        this.isMCU = true;
        this.mainCharacterName = '';
        this.producer = '';
        this.distributor = '';
       
}

public showAllMovieData ():string{
    let actorsName = this.actors.map((actor) => actor.name)

    let mv = 
    `Title: ${this.title},
     releaseYear: ${this.releaseYear},
     actors: ${actorsName},
     nacionality: ${this.nacionality},
     director: ${this.director},
     writer: ${this.writer},
     language: ${this.language},
     plataforma: ${this.plataforma},
     isMCU: boolean;${this.isMCU},
     mainCharacterName: ${this.mainCharacterName},
     producer: ${this.producer},
     distributor: ${this.distributor},
     genre: ${this.genre}.`
    
    
    return mv;
}

}

// let movie1 = new Movie ('El Rey Leon',1994,'United States of America', 'musical', )
// let director1 = new Professional ('Pepe', 45, 56, 1.60, true, 'Spanish', 8, 'director');
// let writer1 = new Professional ('Juan', 45, 56, 1.60, true, 'Spanish', 8, 'director');
// let actor1 = new Professional('Juan Carlos', 45, 56, 1.60, true, 'Spanish', 8, 'director');
// movie1.actors.push(actor1);
// movie1.director = director1;
// movie1.writer = writer1;
// console.log (movie1.showAllMovieData());
// let showAllMovie1Data = movie1.showAllMovieData();

    
    
  