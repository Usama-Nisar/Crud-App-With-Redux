import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import todoReducer from './../Redux/reducers/todoReducer';
import { editTodo } from '../Redux/action/action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const EditUser = () => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const data = useSelector((state) => state.todoReducer.todo)
    const currData = data.find( res => res.id === id)
    
    

    useEffect(()=>{
        if(currData){
            setUser(currData.user)
            setEmail(currData.email)
            setNumber(currData.number)
        }
    },[currData])

    const submiData = (e) => {

        e.preventDefault()

        if(!user || !email || !number){
            toast.warning("Please Fill All The Field")
        }
        
        const sendData = {
            id: id,
            user,
            email,
            number
        }
    
        dispatch(editTodo(sendData))
        toast.success("User edit successfully")
        navigate('/')
    }

  return (
      currData ? (
        <>
        <div className='container'>
        <div className="    ">
            <div className="display-5 text-center my-5">Edit User {id}</div>
            <div className="col-md-8 mx-auto shadow p-5">
               <form onSubmit={submiData}>
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
                   <div className="d-grid gap-2 d-md-block">
                    <input className="btn btn-primary mx-4" type="submit" value="Edit" />
                    <Link to="/" className="btn btn-danger" type="button">Cancel</Link>
                   </div>
               </form>
            </div>
        </div>
    </div>
    </>
      ) 
    :
    <div className="display-5 text-center my-5">User with  this id {id} not exits</div>
  )
}

export default EditUser