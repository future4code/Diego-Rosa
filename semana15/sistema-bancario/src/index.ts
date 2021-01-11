import express, {Express, Request, Response } from "express"
import cors from "cors"
import {accounts} from "./accounts" 

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", ()=> (req:Request, res: Response) => {
  try {
    const {name, CPF, dataOfBirthAsString} = req.body // dia/mes/ano
    
    //desinstruturação de array
    const [day, month, year] = dataOfBirthAsString.split("/") // [01, 01, 2020]
    
    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
    // validar as entradas da req
    
    const ageInMiliSeconds: number = Date.now() - dateOfBirth.getTime()

    const ageInYears: number =  ageInMiliSeconds / 100 / 60 / 60 / 34 / 365

    if(ageInYears < 18){
      res.statusCode = 406
      throw new Error("Idade deve ser maior que 18 anos!")
    }
    // consultar ou alterar a base de dados
    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: []
    })

    // validar os resultados da consulta
    // enviar a res
    res.status(201).send("Conta criada com sucesso!")
  } catch (err) {
    console.log(err)
    res.send(err.message)
  }
})

app.get("/users/all", ()=> ( req: Request, res: Response) => {
  try {
    if(!accounts.length) {
      res.statusCode = 404
      throw new Error("Nenhuma conta encontrada!")
    }

     res.status(200).send(accounts)
  } catch(err) {
    res.status(400).send(err.message)
  }
})

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003")
})

