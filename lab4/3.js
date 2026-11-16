const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = (persons) => {
  const result = {};
  for (const key in persons) {
    result[key] = persons[key].died - persons[key].born;
  }
  return result;
};
console.log(ages(persons));

