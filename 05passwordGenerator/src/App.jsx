import { useCallback, useEffect, useRef, useState } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const [password, setPasword] = useState("Password");
    //useRef hook

    const passwordRef = useRef(null);

    const passWordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!#$&&*-_+=[]{}~`";
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPasword(pass);
    }, [length, numberAllowed, charAllowed, setPasword]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 100);
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passWordGenerator();
    }, [length, numberAllowed, charAllowed, setPasword]);

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
                <h1 className="text-center my-3 text-white">
                    Password Generator
                </h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3 bg-white "
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className="outline-none bg-blue-700 text text-white px-3 py-0.5 shrink-0 cursor-pointer"
                    >
                        copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => {
                            setLength(e.target.value);
                        }}
                    />
                    <label>length: {length}</label>
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="charInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="charInput">Characters</label>
                </div>
            </div>
        </>
    );
}

export default App;
