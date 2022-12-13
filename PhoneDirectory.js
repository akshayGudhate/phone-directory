const { INFO } = require('./constants');            // constants
const searchingAlgorithm = require('./searching');  // searching algo's


///////////////////////////
// Phone Directory class //
///////////////////////////

class PhoneDirectory {

    // private fields
    #store = new Map();

    // constructor
    constructor (user) {
        this.user = user;
        INFO.phoneDirectoryCreated(user);
    };


    //
    // private methods
    //

    // method - get total phone count
    #getTotalPhonesCountInDirectory = () => this.#store.size;

    // method - check is phone present
    #isPhonePresent = (phone) => this.#store.has(phone);

    // method - get owner name by phone
    #getOwnersName = (phone) => this.#store.get(phone);

    // method - log numbers from given store
    #logDirectoryMembers = (listName, store) => {
        // create directory names
        let indexCount = 0, directoryString = '';
        store.forEach((owner, phone) => directoryString += (`${++indexCount}. ${owner}: ${phone}\n`));

        // print directory
        INFO.printCurrentDirectory(listName, directoryString);
    };


    //
    // public methods
    //

    // method - print directory
    printDirectory() {
        this.#logDirectoryMembers(' Phone Directory ', this.#store);
    };

    // method - add new phone
    addPhone(phone, owner) {
        // add phone
        if (!this.#isPhonePresent(phone)) {
            // add to store
            this.#store.set(phone, owner);

            // print info phone added
            INFO.phoneAdded(phone, owner, this.#getTotalPhonesCountInDirectory());
        } else {
            // print info that phone is already present
            INFO.alreadyPresent(phone, this.#getOwnersName(phone));
        };
    };


    // method - remove phone from directory
    removePhone(phone) {
        // remove phone
        if (this.#isPhonePresent(phone)) {
            // remove phone from store
            this.#store.delete(phone);

            // print info removal of phone
            INFO.phoneRemoved(phone, this.#getTotalPhonesCountInDirectory());
        } else {
            // print info invalid phone removal
            INFO.invalidPhoneRemoval(phone);
        };
    };


    // method - edit owner's name for phone
    editPhone(phone, newOwner) {
        // edit phone
        if (this.#isPhonePresent(phone)) {
            const previousOwner = this.#getOwnersName(phone);
            // add to store
            this.#store.set(phone, newOwner);

            // print info phone added
            INFO.phoneEdited(phone, previousOwner, newOwner, this.#getTotalPhonesCountInDirectory());
        } else {
            // print info invalid phone removal
            INFO.invalidPhoneRemoval(phone);
        };
    };


    // method - search phone
    searchByPhoneNumber(searchedInput) {
        // search using regexp
        const resultsMap = searchingAlgorithm.slidingWindowSearching(searchedInput, this.#store, 'phone');
        // show matching results
        this.#logDirectoryMembers('Matching Results ', resultsMap);
    };


    // method - search name
    searchByOwnersName(searchedInput) {
        // search using regexp
        const resultsMap = searchingAlgorithm.slidingWindowSearching(searchedInput, this.#store, 'name');
        // show matching results
        this.#logDirectoryMembers('Matching Results ', resultsMap);
    };
};



module.exports = PhoneDirectory;