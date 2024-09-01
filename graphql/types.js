export const typeDefs = `
      type Doctor {
      name : String!
      id : Int!
      
      specified :Speciality

      }

    type Speciality {
    name:String!
    id : Int!
    doctor :[Doctor]
      } 

    type  Query {
      Doctors:[Doctor]
      Speciality :[Speciality]
      }

      type Mutation { 
      addDoctor(name:String!,id:Int!) :Doctor!
      
      }

`