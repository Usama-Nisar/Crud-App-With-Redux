import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { addTodo } from '../Redux/action/action';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitData = (e) => {
         e.preventDefault()
         if(!user || !email || !number ){
             return toast.warning('Please Fill All The Filed')
         }
         
         const todoData = {
           id: new Date().getTime().toString(),
           user,
           email,
           number
         }

         console.log(todoData)

         dispatch(addTodo(todoData),setUser(''),setEmail(''),setNumber(''))
         toast.success("User Added Successfully")
         navigate('/')
    }
  return (
    <div className='container'>
        <div className="    ">
            <div className="display-5 text-center my-5">Add User</div>
            <div className="col-md-8 mx-auto shadow p-5">
               <form onSubmit={submitData}>
                   <div className="form-group">
                       <input  
                         className="form-control" 
                         type="text" 
                         placeholder='User'
                         value={user} 
                         onChange={ e =>setUser(e.target.value)}/>
                   </div>
                   <br/>
                   <div className="form-group">
                       <input  
                         className="form-control" 
                         type="email" 
                         placeholder='Email'
                         value={email} 
                         onChange={e => setEmail(e.target.value)} />
                   </div>
                   <br/>
                   <div className="form-group">
                       <input  
                         className="form-control" 
                         type="number" 
                         placeholder='Phone no'
                         value={number} 
                         onChange={e => setNumber(e.target.value)} />
                   </div>
                   <br/>
                   <div className="form-group">
                       <input  className="btn btn-dark" type="submit"  value="Add User" />
                   </div>
               </form>
            </div>
        </div>
    </div>
  )
}

export default AddUser