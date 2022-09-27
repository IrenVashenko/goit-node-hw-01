const contacts = require('./db/contacts')
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')

const invokeAction = async({action, id, name, email, phone}) => {
    switch(action) {
        case "listContacts":
            const allContacts = await contacts.listContacts(); 
            console.log(allContacts)
            break;
        case "getContactById":
            const getContactId = await contacts.getContactById(id);
            console.log(getContactId)
            break;
        case "addContact":
            const addContact = await contacts.addContact({name, email, phone});
            console.log(addContact);
            break;
        case "removeContact":
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;
        default:
            console.log("Unknown action type!")
    }
}

// invokeAction({action: "listContacts"});
// invokeAction({action: "getContactById", id:"10"});
// invokeAction({action: "addContact", name:"Lera", email:"lera01@gmail.com", phone:"(542) 451-7038"});
//invokeAction({action: "removeContact", id:"M8GTeFWodS3JDp4LqSTtE"});

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);