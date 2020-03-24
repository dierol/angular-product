export interface Authentication {
  id: string,
  model: {
     access_token: string,
     user: {
       id: number,
       firstname: string
     }
  }
}
