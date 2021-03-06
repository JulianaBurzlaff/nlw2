const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Portugês",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber){
  const arrayPosition = +subjectNumber - 1
  return subjects[arrayPosition]
}

function convertHoursToMinutes (time) {
  const [hours, minutes] = time.split(':')
  return Number((hours * 60) + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}