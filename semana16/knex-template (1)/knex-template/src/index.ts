import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Pokemon, POKE_TYPES } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors())

const pokemons: Pokemon[] = []

app.get("/pokemon/all", async (req: Request, res: Response) => {
   try {

      if (!pokemons.length) {
         res.statusCode = 404
         throw new Error("No pokemons found")
      }

      res.status(200).send(pokemons)

   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
});

app.post("/pokemon/new", async (req: Request, res: Response) => {
   try {

      const { id, name, type } = req.body;

      const pokemon: Pokemon | undefined = pokemons.find(
         pokemon => pokemon.id === id
      )

      if (pokemon) {
         res.statusCode = 409
         throw new Error("Id already exists")
      }

      if (!(type in POKE_TYPES)) {
         res.statusCode = 406
         throw new Error("Invalid Pokemon types")
      }


      pokemons.push({ id, name, type })

      res.status(201).send("New Pokemon created!");
   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
});

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
