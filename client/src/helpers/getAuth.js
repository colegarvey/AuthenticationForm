// import toast from "react-hot-toast";

function getAuth (users, email, key) {
    for (let currUser of users) {
        
        if (currUser.email === email && currUser.key === key){
            return true;
        }
    }
    return false;
}

export default getAuth;