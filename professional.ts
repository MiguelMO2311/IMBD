export class Professional {
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string,
         oscarsNumber: number, profession: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    public showOnScreen(): void {
        console.log (this.name, this.age, this.weight, this.height, this.isRetired, this.nationality, this.oscarsNumber, this.profession)
    }

}
// let resultProfessional = new Professional('Pepe', 40, 75, 1.80, false, 'Spanish', 2, 'actor');
// console.log(resultProfessional.showOnScreen)