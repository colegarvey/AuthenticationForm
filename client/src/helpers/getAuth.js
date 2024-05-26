// import toast from "react-hot-toast";

function getAuth (users, email, key) {
    for (let currUser in users) {
        
        if (users[currUser].email === email){
            
            if (users[currUser].key === key) {
                return true;
            }
        }
    }
    return false;
}

export default getAuth;