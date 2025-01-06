import React, {createContext, useState, useContext, ReactNode} from "react";

interface AuthContextType{
    user : {username: string; role:string} | null;
    login : (username: string, password: string) => void;
    logout: ()=>void
}

export const  authContext = createContext<AuthContextType|undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user,setUser] = useState<{username:string; role:string} | null>(null)
    const login =  (username: string, password: string) =>{
        setUser({username,role:'user'})
        if (username === 'admin' && password === 'password') {
            setUser({username,role :'admin'})
        }else if(username === 'user' && password === 'password'){
            setUser({username,role :  'user'})
        }else{
            alert('invalid creds')
        }
    };

    const logout=()=>{
        setUser(null);
    }

    return(
        <authContext.Provider value={{user,login,logout}}>{children}</authContext.Provider>
    )
};

export const useAuth = () =>{
    const context = useContext(authContext)
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}