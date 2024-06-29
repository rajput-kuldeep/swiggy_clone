import { createContext } from "react";


const UserContext = createContext({
    loggedIn : "defaultUser"
})

export default UserContext