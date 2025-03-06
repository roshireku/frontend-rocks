import { useState } from "react";
export const RootRoute=() => {
    const [count, setCount] = useState(0);
    const [titolo, setTitle] = useState("CLICK FOR MONEY");
    return (
        <div className="h-dvh flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-md ">
            <h1 className="text-center font-bold text-3xl text-blue-400 mb-4">
              {titolo}
            </h1>
    
            <h2 className="text-center font-bold text-xl mb-6 text-white">1 CLICK = 1€</h2>
    
            <div className="flex flex-col items-center space-y-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
                onClick={() => setCount((count) => count + 1)}
              >
                hai ottenuto {count}€
              </button>
    
              <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
                  onClick={() => setTitle("NO MONEY AVALABLE")}
              >
                Cambia
              </button>
    
              <p className="text-center text-white">
                Modifica <code>src/App.tsx</code> e salva per testare l'hot reload
              </p>
            </div>

            <a href="/details/0">LINK</a>
            
            
            <p className="text-center text-sm text-blue-400">Clicca sui loghi per saperne di più</p>
          </div>
        </div>
      );
}