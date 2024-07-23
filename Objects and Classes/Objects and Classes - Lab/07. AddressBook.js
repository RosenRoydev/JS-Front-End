function addressBook(input){
    let addressBook = {};
  for (const value of input) {
    let nameAndAddress = value.split(':');
    let name = nameAndAddress[0];
    let address = nameAndAddress[1];
    addressBook [name] = address;
  }
  let entries = Object.entries(addressBook);
  entries = entries.sort((a,b) => a[0].localeCompare(b[0]))
  for (const [name,address] of entries) {
    console.log(`${name} -> ${address}`);
  }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   )