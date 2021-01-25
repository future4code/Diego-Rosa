
import * as jwt from 'jsonwebtoken'

export function generateToken(id: string): string{
  
      const token: string = jwt.sing({id:},
          process.env.JWT_KEY as string,
          {expireIn: process.env.JWT_EXPIRE_TIME as string || "id"})
    
      return token
  }

  export function getTokenData(token: string): AuthenticationData {
      const payload = jwt.verify(token, process.env.JWT_KEY as string)
      return payload as AuthenticationData
    }

  export type AuthenticationData = {
      id: string
  }

// const verifiedToken = jwt.verify(token,  "DIEGO")
// console.log("O que vem da função verify", verifiedToken)