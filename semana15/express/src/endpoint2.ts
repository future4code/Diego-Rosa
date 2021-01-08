import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {countries, country} from "./countries"

const app: Express = express();

app.use(express.json());
app.use(cors());

//api pra pegar todos os paises
app.get("/countries/:id", (req:Request, res: Response) => {
   const result: country | undefined = countries.find(
      country => country.id === Number(req.params.id)
   )
   if (result) {
      res.status(200).send(result)
   }else {
      res.status(404).send(result)
   }
})

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});