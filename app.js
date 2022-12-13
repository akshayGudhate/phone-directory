// class - phone directory
const PhoneDirectory = require('./PhoneDirectory');


////////////////////////
//    create store    //
////////////////////////

// created user & store
const newPhoneDirectory = new PhoneDirectory('Akshay Gudhate');


/////////////////////////
//   handler actions   //
/////////////////////////

// add phone
newPhoneDirectory.addPhone(9561214185, 'Akshay Gudhate');
newPhoneDirectory.addPhone(8806963196, 'Satish Gudhate');
newPhoneDirectory.addPhone(8208106722, 'IMB');
// log phone directory
newPhoneDirectory.printDirectory();


// already added
newPhoneDirectory.addPhone(8208106722, 'IMB');

// remove phone
newPhoneDirectory.removePhone(8806963196);
// log phone directory
newPhoneDirectory.printDirectory();

// invalid remove
newPhoneDirectory.removePhone(8806963196);


// search by phone numbers
newPhoneDirectory.searchByPhoneNumber(8);
// add phone
newPhoneDirectory.addPhone(8806963196, 'Satish Gudhate');
newPhoneDirectory.addPhone(7350987589, 'Ashwin Achari');
// search by phone numbers
newPhoneDirectory.searchByPhoneNumber(8806);


// edit phone
newPhoneDirectory.editPhone(8208106722, 'Arjun Thakur');
// log phone directory
newPhoneDirectory.printDirectory();


// search by owners name
newPhoneDirectory.searchByOwnersName('gu');