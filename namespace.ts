namespace Food {
  export type A = Window;
  export interface Fruits{
      taste: string;
      hardness: number;
  }

  export interface Meat{
      taste: any;
      heat: Object;
  }
}

let meat: Food.Meat = {
  taste: 1,
  heat: 2,
};
let fruits: Food.Fruits;

console.log('', meat );

