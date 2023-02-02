//useRef() Dom daki nodlara erişmek için kullanılır
import React, {useRef, useState} from "react";

const UseRef = () =>{
    const inputRef = useRef();
    const [deger, setDeger] = useState("");

    const onFocusButton = () =>{
        inputRef.current.focus()
    };

    const buttonValue = () =>{
        setDeger(inputRef.current.value)
    };
    
    return(
        <div>
            <h1>React Dersleri</h1>
            <h2>Use Ref'in Kullanımı</h2>
            <input type="text" placeholder="Buraya Yazabilirsiniz" ref={inputRef}></input>
            <button onClick={onFocusButton}>Inputa Fokus ol</button>
            <button onClick={buttonValue}>Girilen Veriyi gör</button>
            <p>{deger}</p>
        </div>
    )
}

export default UseRef;