const phone = [
  { name: 'Vasia Vasiovich', phone: '+380445554433' },
  { name: 'Denis', phone: '+380991234567' },
  { name: 'Yarik', phone: '+380679876543' }
];
function find (name) {
    for (let i = 0; i < phone.length; i++) {
        if (phone[i].name === name) {
            return  phone [i].phone;
        }
    }
    return 'Номер не знайдено'
}
console.dir(find('Denis'))
console.dir(find('Alex'))