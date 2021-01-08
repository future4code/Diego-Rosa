// (A) - quando crio uma variavel do tipo string e tento atribuir um valor tipo number , aponta um erro a variavel

//(B)
let myNumber: (number | string) [] = [23, "Diego"]

//(C)
type person = {name: string, age: number, favoriteColor: RainbowColors}

enum  RainbowColors   {
  RED = "Red",
 YELLOW =  "Yellow",
 BLUE = "Blue"
}

const studant1:  person = {
  name: "Diego",
  age: 23,
  favoriteColor: RainbowColors.RED
}

const studant2: person = {
  name: "Alice",
  age: 19,
  favoriteColor: RainbowColors.YELLOW
}

const student3: person ={
  name: "Ruth",
  age: 18,
  favoriteColor: RainbowColors.BLUE
}
 