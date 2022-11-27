const { people } = require("../data")

const getPeople = (req, res) =>{
  res.status(200).json({success: true, data: people});
}

const postPeople = (req, res) => {
  const { name } = req.body;
  if(!name){
    res.status(400).json({success: false, msg: "please provide name a value"})
  }
  res.status(201).json({success:true, person: [...people, {name}]})
}

const putPeople = (req, res) =>{
  const { personID } = req.params;
  const { name } = req.body;

  const person = people.find(person => person.id === Number(personID))

  const data = people.map(person => {
   return person.id === Number(personID) ?  {...person, name} : person;
  })

  if(!person){
    res.status(401).json({success: false, data:`no person with id ${personID}`});
  }

  res.status(201).json({success: true, data})

}

const deletePoeple =  (req, res) => {
  const {personID} = req.params;

  const isExist = people.find(person => {
    return person.id === Number(personID)
  })

  const data = people.filter(person => {
    return person.id !== Number(personID)
  })

  if(!isExist) {
    res.status(400).json({success: false, data:`no person with id ${personID}`})
  }
  res.status(201).json({success: true, data})
}
module.exports = {
  getPeople,
  postPeople,
  putPeople,
  deletePoeple
}