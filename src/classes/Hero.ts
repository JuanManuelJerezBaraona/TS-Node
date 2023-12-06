import powers from "../data/powers";

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power(): string { // return string
        const power = powers.find(power => power.id === this.powerId);
        return power ? power.desc : 'not found';
    }
}