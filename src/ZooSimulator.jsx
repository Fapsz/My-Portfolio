import React, { useState } from 'react'
import { useEffect } from 'react';

function ZooSimulator() {
  let [hour, setHour] = useState(0);
  let [mins, setMins] = useState(0);
  let [secs, setSecs] = useState(0);

  let [giraffes, setgiraffes] = useState([
   {name:"giraffe-1",health:100, pic:"giraffe-1.png"},
   {name:"giraffe-2",health:100, pic:"giraffe-2.png"},
   {name:"giraffe-3",health:100, pic:"giraffe-3.png"},
   {name:"giraffe-4",health:100, pic:"giraffe-4.png"},
   {name:"giraffe-5",health:100, pic:"giraffe-5.png"},
  ]);
  let [monkeys, setmonkeys] = useState([
   {name:"monkey-01",health:100, pic:"monkey-01.png"},
   {name:"monkey-2",health:100, pic:"monkey-2.png"},
   {name:"monkey-3",health:100, pic:"monkey-3.png"},
   {name:"monkey-4",health:100, pic:"monkey-4.png"},
   {name:"monkey-5",health:100, pic:"monkey-5.png"},
  ]);

  useEffect(()=>{
    let interval = setInterval(() => {
      setSecs(secs = (secs + 1) % 60);

      if (secs == 59) {
        setMins(mins = (mins + 1 % 60))
        setSecs(0);
      }
      
        if (mins == 59 && secs == 59) {
          setHour (hour = (hour + 1) % 24);
          setMins(0);
          
        }
    }, 100);
    return () =>{
       clearInterval(interval);
    };
  },[])

  
  return (
    
    <>
    <div className='min-h-[180vh] bg-black text-white text-center text-[20px]'>Zoo Simulator
        <div className='h-[60px] bg-gray-600 flex gap-[30px] items-center text-[15px] justify-center'>
        <button className='h-[30px] w-[10%] bg-sky-500 rounded-[30px] ml-[20px] hover:'>Skip 1 Hour</button>
        <button className='h-[30px] w-[10%] bg-sky-500 rounded-[30px]'>Feed this Zoo</button>
        <h1>{hour} : {mins} : {secs}</h1>
    </div>
    <div className='h-[38vh] bg-[#5d5dd7] mt-[20px] grid grid-cols-5 gap-[10px] '>
       {
        giraffes.map((giraffe)=>(
          <div className='h-[30vh]'>
            <div className='h-[30vh] bg-slate-900 rounded-[15px] mt-[10px] mr-[20px] ml-[20px]'>
                <img src={giraffe.pic} className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
            <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%] '>
                  <div className=' h-[15px] bg-green-500 w-[270px] rounded-xl ' style={{width:giraffe.health+"%"}}></div>
              </div>
          </div>
        ))
       }
       
    </div>
    <div className='h-[38vh] bg-slate-500 mt-[20px] grid grid-cols-4 gap-[10px] '>
        <div className='h-[30vh]'>
            <div className='h-[30vh] rounded-[15px] ml-[20px] mt-[10px]'>
               <img src="Elephant-2.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
              <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%]'>
                 <div className=' h-[15px] bg-green-500 w-[270px] rounded-xl flex justify-end items-center '>
                 </div>
              </div>
        </div>
        
         <div className=''>
            <div className='h-[30vh]  rounded-[15px] mt-[10px]'>
               <img src="giraffe-4.png" className='rounded-[15px] h-[30vh] w-[100%] '/>
            </div>
             <div className='h-[15px] bg-slate-600 ml-[10px] mt-[20px] rounded-[15px] w-[80%]'>
                 <div className=' h-[15px] bg-green-500 w-[270px] rounded-xl'></div>
              </div>
        </div>
         <div className='h-[30vh]'>
            <div className='h-[30vh] bg-slate-900 rounded-[15px] mt-[10px]'>
               <img src="giraffe-3.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
             <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%] '>
                 <div className=' h-[15px] bg-green-500 w-[290px] rounded-xl'></div>
              </div>
        </div>
        <div className='h-[30vh]'>
            <div className='h-[30vh] bg-slate-900 rounded-[15px] mt-[10px] mr-[20px]'>
               <img src="giraffe-3.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
            <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%] '>
                 <div className=' h-[15px] bg-green-500 w-[295px] rounded-xl '></div>
              </div>
        </div>
        
       
       
    </div>
     <div className='h-[38vh] bg-slate-500 mt-[20px] grid grid-cols-4 gap-[10px] '>
        <div className='h-[30vh]'>
            <div className='h-[30vh] rounded-[15px] ml-[20px] mt-[10px]'>
               <img src="Elephant-3.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
              <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%]'>
                 <div className=' h-[15px] bg-green-500 w-[270px] rounded-xl flex justify-end items-center '>
                 </div>
              </div>
        </div>
         <div className=''>
            <div className='h-[30vh]  rounded-[15px] mt-[10px]'>
               <img src="giraffe-5.png" className='rounded-[15px] h-[30vh] w-[100%] '/>
            </div>
             <div className='h-[15px] bg-slate-600 ml-[10px] mt-[20px] rounded-[15px] w-[80%]'>
                 <div className=' h-[15px] bg-green-500 w-[270px] rounded-xl'></div>
              </div>
        </div>
         <div className='h-[30vh]'>
            <div className='h-[30vh] bg-slate-900 rounded-[15px] mt-[10px]'>
               <img src="Elephant-3.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
             <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%] '>
                 <div className=' h-[15px] bg-green-500 w-[290px] rounded-xl'></div>
              </div>
        </div>
        <div className='h-[30vh]'>
            <div className='h-[30vh] bg-slate-900 rounded-[15px] mt-[10px] mr-[20px]'>
               <img src="Giraffe-5.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
            <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%] '>
                 <div className=' h-[15px] bg-green-500 w-[285px] rounded-xl '></div>
              </div>
        </div>
    </div>

    <div className='h-[38vh] bg-slate-500 mt-[20px] grid grid-cols-4 gap-[10px] '>
        <div className='h-[30vh]'>
            <div className='h-[30vh] rounded-[15px] ml-[20px] mt-[10px]'>
               <img src="Elephant-2.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
              <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%]'>
                 <div className=' h-[15px] bg-green-500 w-[270px] rounded-xl flex justify-end items-center '>
                 </div>
              </div>
        </div>
         <div className=''>
            <div className='h-[30vh]  rounded-[15px] mt-[10px]'>
               <img src="giraffe-2.png" className='rounded-[15px] h-[30vh] w-[100%] '/>
            </div>
             <div className='h-[15px] bg-slate-600 ml-[10px] mt-[20px] rounded-[15px] w-[80%]'>
                 <div className=' h-[15px] bg-green-500 w-[270px] rounded-xl'></div>
              </div>
        </div>
         <div className='h-[30vh]'>
            <div className='h-[30vh] bg-slate-900 rounded-[15px] mt-[10px]'>
               <img src="Elephant-01.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
             <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%] '>
                 <div className=' h-[15px] bg-green-500 w-[290px] rounded-xl'></div>
              </div>
        </div>
        <div className='h-[30vh]'>
            <div className='h-[30vh] bg-slate-900 rounded-[15px] mt-[10px] mr-[20px]'>
               <img src="giraffe-4.png" className='rounded-[15px] h-[30vh] w-[100%]'/>
            </div>
            <div className='h-[15px] bg-slate-600 ml-[30px] mt-[20px] rounded-[15px] w-[80%] '>
                 <div className=' h-[15px] bg-green-500 w-[290px] rounded-xl '></div>
              </div>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default ZooSimulator