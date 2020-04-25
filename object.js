const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) =>  obj[key] = value;
addTurno(lesson2, 'turno', 'manhã')

const list = (obj) => {
  const getKeys = Object.keys(obj)
  for (i in getKeys) {
    console.log(`${getKeys[i]}: ${obj[getKeys[i]]}`);
  }
}

list(lesson2)

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson2));

const allLessons = Object.assign({}, lesson1, lesson2, lesson3)
console.log(allLessons);

