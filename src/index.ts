// const nums: number[] = [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];

//// Providing a type to querySelector:
// const inputEl = document.querySelector("#username");
// console.log(inputEl);
// inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>("#btn")!;

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity (item: any): any {
//   return item;
// }

interface Cat {
  name: string;
  breed: string;
}

// With A Generic...Super Reusable!
function identity<T>(item: T): T { // genetic function called identity.
  return item;
}

// identity<number>(7);
// identity<string>("hello");
// identity<Cat>();

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);
getRandomElement([1, 2, 3, 4]);

// Generics With Multiple Types
// Generics With Constraints:
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({name:"colt"}, {pets: ["blue", "elton"]});
console.log(merge ({name:"colt"}, {num: 9}));

// merge<{name: string}, {pets: string[]}>({name:"colt"}, {pets:["blue", "elton"]})

interface Lenghthy {
  length: number;
}

function printDoubleLength<T extends Lenghthy>(thing: T): number {
  return thing.length * 2;
}

printDoubleLength("asdf");
printDoubleLength(123);

function makeEmptyArray<T = number>() : T[]{
  return []
}

const number = makeEmptyArray();
const bool = makeEmptyArray<boolean>()

interface Song {
  title: string;
  artist: string;
}
interface Video {
  titter: string;
  creator: string;
  resolution: string;
}

class Playlist <T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
videos.add();

