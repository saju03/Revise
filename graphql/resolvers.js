const Doctors = [
  { id: 1, name: "Dr. Alice Johnson", specified: 1 },
  { id: 2, name: "Dr. Bob Smith", specified: 1 },
  { id: 3, name: "Dr. Carol White", specified: 2 },
  { id: 4, name: "Dr. David Brown", specified: 2 },
  { id: 5, name: "Dr. Emma Davis", specified: 3 },
  { id: 6, name: "Dr. Frank Green", specified: 3 },
  { id: 7, name: "Dr. Grace Lee", specified: 4 },
  { id: 8, name: "Dr. Henry Miller", specified: 4 },
  { id: 9, name: "Dr. Irene Harris", specified: 5 },
  { id: 10, name: "Dr. Jack Wilson", specified: 5 },
  { id: 11, name: "Dr. Karen Clark", specified: 1 },
  { id: 12, name: "Dr. Leo Martinez", specified: 2 },
  { id: 13, name: "Dr. Mia Thompson", specified: 3 },
  { id: 14, name: "Dr. Noah Rodriguez", specified: 4 },
  { id: 15, name: "Dr. Olivia Lewis", specified: 5 },
  { id: 16, name: "Dr. Paul Walker", specified: 1 },
  { id: 17, name: "Dr. Quinn Young", specified: 2 },
  { id: 18, name: "Dr. Rachel Adams", specified: 3 },
  { id: 19, name: "Dr. Samuel Baker", specified: 4 },
  { id: 20, name: "Dr. Tina Carter", specified: 5 }
];

const Speciality = [
  {
    id: 1,
    name: "Cardiology",
    doctors: [1, 2, 11, 16]
  },
  {
    id: 2,
    name: "Neurology",
    doctors: [3, 4, 12, 17]
  },
  {
    id: 3,
    name: "Pediatrics",
    doctors: [5, 6, 13, 18]
  },
  {
    id: 4,
    name: "Orthopedics",
    doctors: [7, 8, 14, 19]
  },
  {
    id: 5,
    name: "Dermatology",
    doctors: [9, 10, 15, 20]
  }
];



export const resolvers = {


  Query: {
    Doctors: () => Doctors,
    Speciality: () => Speciality
  },
  Doctor: {
    specified: (parent, b, c, d) => {
      return Speciality.find(spe => spe.id == parent.specified)
    }
  },



  Speciality:{
    doctor:(parent)=>{      
      return parent.doctors.map((it)=>{
        return Doctors.find(doc=> doc.id == it)
      })
      
       
    }
  },

  Mutation:{
    addDoctor :(parent,args,c,d)=>{

    console.log(args);
    
debugger
    }

  }



}
