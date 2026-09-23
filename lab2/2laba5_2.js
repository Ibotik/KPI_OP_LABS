const phoneBook = {
   'Vasia Vasiovich': '+380445554433',
   'Denis': '+380991234567',
   'Yarik': '+380679876543' 
};
function findPhoneByName(name) {
  return phoneBook[name];
  
}
console.log(findPhoneByName('Vasia Vasiovich')); 
console.log(findPhoneByName('Denis'));          