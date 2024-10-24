/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext,useState } from "react";
import run from "../config/gemini"

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState("");

    

    const onSent = async (prompt) => {

        setresultData("")
        setloading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input);
        setresultData(response)
        setloading(false)
        setInput("") 
        await run(input)
    }


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    


    return (
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;