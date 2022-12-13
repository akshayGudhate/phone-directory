//////////////////////////////
//   searching algorithms   //
//////////////////////////////

//
// sliding window
//
const slidingWindowSearching = (inputString, store, searchFor) => {
    // new store for results
    const searchResults = new Map();
    // parse details
    const loopInputString = String(inputString).toLowerCase();
    const loopInputStringSize = loopInputString.length;

    // search for phone
    if (searchFor == 'phone') {
        // loop over map
        store.forEach((owner, phone) => {
            let i = 0, j = 0, currentWindow = '';
            let searchingWindow = String(phone);

            while (i < searchingWindow.length) {
                // current window
                currentWindow += searchingWindow[i];

                // if window is complete
                if (i - j + 1 == loopInputStringSize) {
                    // if matches
                    if (loopInputString == currentWindow) {
                        return searchResults.set(phone, owner);
                    } else {
                        // remove first char stored in currentWindow
                        currentWindow = currentWindow.slice(1, loopInputStringSize + 1);
                        // slide the window
                        j++;
                    };
                };

                // increment i
                i++;
            };
        });
    };

    // search for name
    if (searchFor == 'name') {
        // loop over map
        store.forEach((owner, phone) => {
            let i = 0, j = 0, currentWindow = '';
            let searchingWindow = owner.toLowerCase();

            while (i < searchingWindow.length) {
                // current window
                currentWindow += searchingWindow[i];

                // if window is complete
                if (i - j + 1 == loopInputStringSize) {
                    // if matches
                    if (loopInputString == currentWindow) {
                        return searchResults.set(phone, owner);
                    } else {
                        // remove first char stored in currentWindow
                        currentWindow = currentWindow.slice(1, loopInputStringSize + 1);
                        // slide the window
                        j++;
                    };
                };

                // increment i
                i++;
            };
        });
    };

    // return results
    return searchResults;
};


//
// regular expressions
//
const regexSearching = (inputString, store, searchFor) => {
    // new store for results
    const searchResults = new Map();

    // search for phone
    if (searchFor == 'phone') {
        // filter out the matching phones
        store.forEach((owner, phone) => {
            if (String(phone).match(String(inputString)) != null) {
                return searchResults.set(phone, owner);
            };
        });
    };

    // search for name
    if (searchFor == 'name') {
        // filter out the matching phones
        store.forEach((owner, phone) => {
            if ((owner.toLowerCase()).match(inputString.toLowerCase()) != null) {
                return searchResults.set(phone, owner);
            };
        });
    };

    // return results
    return searchResults;
};




module.exports = { slidingWindowSearching, regexSearching };