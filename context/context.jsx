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

    
    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setresultData(prev=>prev+nextWord)
        },75*index)
    }

    const  newChat = () => {
        setloading (false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {

        setresultData("")
        setloading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev => [...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,])
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i=0;i<responseArray.length;i++){
            if(i === 0 || i%2 !== 1){
                newResponse+=responseArray[i];
            }else{
                newResponse+="<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord  = newResponseArray[i];
            delayPara(i,nextWord+" ");
        }
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
        setInput,
        newChat
    }

    


    return (
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;