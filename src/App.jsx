import { useState } from 'react'


function App() {
  const [color, setColor] = useState("bisque")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 items-center h-screen font-extrabold text-5xl'>Rainbow Background
          </div>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white mb-8'>
            <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg px-3 py-3 rounded-3xl bg-white'>
              <button onClick={() => setColor('red')}  className='outline-none px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: "red"}}>
                Red
              </button>
              <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full font-bold text-black' style={{backgroundColor: "orange"}}>
                Orange
              </button>
              <button onClick={() => setColor('yellow')}  className='outline-none px-4 py-1 rounded-full font-bold text-black' style={{backgroundColor: "yellow"}}>
                Yellow
              </button>
              <button onClick={() => setColor('green')}  className='outline-none px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: "green"}}>
                Green
              </button>
              <button onClick={() => setColor('blue')}  className='outline-none px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: "blue"}}>
                Blue
              </button>
              <button onClick={() => setColor('indigo')}  className='outline-none px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: "indigo"}}>
                Indigo
              </button>
              <button onClick={() => setColor('violet')}  className='outline-none px-4 py-1 rounded-full font-bold text-black' style={{backgroundColor: "violet"}}>
                Violet
              </button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
