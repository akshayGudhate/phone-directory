///////////////////////////
//       CONSTANTS       //
///////////////////////////

const CONSTANTS = {
    // colors codes for colored logs
    color: {
        Black: "\x1b[30m",
        Red: "\x1b[31m",
        Green: "\x1b[32m",
        Yellow: "\x1b[33m",
        Blue: "\x1b[34m",
        Magenta: "\x1b[35m",
        Cyan: "\x1b[36m",
        White: "\x1b[37m",
        Reset: "\x1b[0m"
    }
};


///////////////////////////
//         INFOs         //
///////////////////////////

const INFO = {};


INFO.phoneDirectoryCreated = (user) => {
    console.info(CONSTANTS.color.Yellow, `>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 >>        The phone directory created for user: ${user}.        >>
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
`);
};


INFO.printCurrentDirectory = (listName, directoryList) => {
    console.info(CONSTANTS.color.White, `-------------------------------------------------------------------------
 >>                          ${listName}                          >>
 -------------------------------------------------------------------------
${directoryList}
 -------------------------------------------------------------------------`);
};


INFO.phoneAdded = (phone, owner, totalCount) => {
    console.info(CONSTANTS.color.Cyan, `>>>> The phone number: ${phone} has been added to the directory for owner: ${owner}! Total members in the directory are: ${totalCount}.`);
};


INFO.phoneEdited = (phone, previousOwner, newOwner, totalCount) => {
    console.info(CONSTANTS.color.Yellow, `>>>> The owner's name has been changed for the phone number: ${phone}. Previous owner: ${previousOwner} --> New owner: ${newOwner}! Total members in the directory are: ${totalCount}.`);
};


INFO.alreadyPresent = (phone, owner) => {
    console.info(CONSTANTS.color.Red, `XXXX-->> Sorry! The phone number: ${phone}, is already present with the name of owner: ${owner}. To change the name please edit the directory.`);
};


INFO.phoneRemoved = (phone, totalCount) => {
    console.info(CONSTANTS.color.Magenta, `<<<< The phone number: ${phone} has been removed! Total members in the directory are: ${totalCount}.`);
};


INFO.invalidPhoneRemoval = (phone) => {
    console.info(CONSTANTS.color.Red, `XXXX-->> Sorry! The phone number: ${phone} does not found!`);
};



module.exports = { CONSTANTS, INFO };