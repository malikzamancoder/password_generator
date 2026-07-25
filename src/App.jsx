import { useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const generatePassword = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (symbolAllowed) {
      str += "!@#$%^&*";
    }
    //for lop lgana ha ab
    let pass = "";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length);

      pass += str.charAt(random);
    }

    setPassword(pass);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="w-full max-w-lg bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Password Generator
      </h1>
      <input
        type="text"
        value={password}
        placeholder="Generate password"
        readOnly
        className="
w-full
p-3
rounded-lg
bg-gray-700
text-white
outline-none
"
      />

      <br />
      <br />
      <label> Password Length :{length} </label>
      <input
        type="range"
        min="6"
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="w-full accent-orange-500"
      />
      <br />
      <br />
      <input
        type="checkbox"
        checked={numberAllowed}
        onChange={() => setNumberAllowed(!numberAllowed)}
        className="flex gap-6 mt-5"
      />
      <label className="text-white flex items-center gap-2">Numbers</label>
      <br />
      <br />
      <input
        type="checkbox"
        checked={symbolAllowed}
        onChange={() => setSymbolAllowed(!symbolAllowed)}
        className="flex gap-6 mt-5"
      />
      <label className="text-white flex items-center gap-2">Symbols</label>
      <br />
      <br />
      <button
        onClick={generatePassword}
        className="
w-full
bg-orange-500
hover:bg-orange-600
text-white
font-bold
py-3
rounded-lg
mt-6
transition
duration-300
"
      >
        Generate Password
      </button>
      </div>
    </div>
  );
}
export default App;
