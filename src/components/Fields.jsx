import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Fields = ({name,email,index,data,setData}) => {

  const removeElement=()=>{
    data.splice(index,1);
    setData([...data]);
  }

  return (
    <div className='data-element'>

            <h4>{name}</h4>
            <h4>{email}</h4>
            <Button onClick={removeElement} variant="contained" color='error'>
                <DeleteOutlineIcon/>
            </Button>


  </div>
  )
}

export default Fields