import React, { createContext } from "react"

interface CurrentUserContent {
    username:string;
}

const CurrentUserContext = createContext<CurrentUserContent | null>(null);

const useCurrentUser = () => {
    const currentUserContext = React.useContext(CurrentUserContext);
    if(!currentUserContext){
        throw new Error(
            "useCurrentUser has to be used within <CurrentUserContext.Provider>"
        )
    }
    return currentUserContext;  
}