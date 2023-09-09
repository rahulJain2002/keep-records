import './App.css';
import Header from './components/Header';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';


import { useState } from 'react';

import Fields from './components/Fields';

function App() {
  const [name,setName] = useState("");  
  const [email,setEmail] = useState("");
  const [data,setData] = useState([]); 

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  const addData = () =>{

    setData((prevData) => {
      const newData = [...prevData, { name, email }];
      return newData;
    })

    setName("");
    setEmail("");
    

  }

  return (
    <>
      <Header/>      
      <div className='form'>

        <Stack spacing={2} direction="row" className='stack-container'> 
          <TextField value={name} onChange={handleNameChange}  label="name" variant="outlined" />
          <TextField value={email} onChange={handleEmailChange}  label="email" variant="outlined" />

          <Button onClick={addData} variant="contained" >
            <AddIcon/>
          </Button>  
        </Stack>
        
      </div>

      <div className="data-container">
        <div className='data-element'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>


        {
          data.map((element,index)=>{ 
            return (
              <Fields name={element.name} email={element.email} data={data} setData={setData} index={index} key={index}/>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
