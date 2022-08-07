import { createContext, useContext } from 'react'
interface InfoContextInterface {
    message: string;
    setMessage?: Function;
}

const defaultState = {
    message: "",
};

export const InfoContext = createContext<InfoContextInterface>(defaultState);

export const useInfo = () => useContext(InfoContext);
