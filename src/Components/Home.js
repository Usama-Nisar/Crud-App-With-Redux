import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteTodo} from '../Redux/action/action'

const Home = () => {

  const data = useSelector((state) => state.todoReducer.todo)
  const dispatch = useDispatch()

  
  return (
    <div className='container'>
        <div className="    ">
            <div className="col-md-12 my-4 text-end">
                <Link to="/add" className="btn btn-primary">Add User</Link>
            </div>
            <div className="col-md-8 mx-auto">
                <h1>User Lists</h1>
                <table className="table my-5">
                  <thead className='table-dark'>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Number</th>
                      <th scope="col">Action</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        data.map((res,id)=>{
                          return(
                            <>
                             <tr key={id}>
                              <td>{id+1}</td>
                              <td>{res.user}</td>
                              <td>{res.email}</td>
                              <td>{res.number}</td>
                              <td><Link to={`/edit/${res.id}`} className='btn btn-primary'>Edit</Link></td>
                              <td><button className='btn btn-danger' onClick={()=>dispatch(deleteTodo(res.id))}>delete</button></td>
                            </tr>
                            </>
                          )
                        })
                      }
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home