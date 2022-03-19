import {useState} from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchedUsers } from '../../redux'
import { CLEAR_USERS } from '../../constants/actionTypes'
//import { getSearchedUsers } from '../../redux/actions/gitHubUserActions' now...i can export it from a shorter folder


function UserSearch() {
   
    const [text, setText] =  useState("")
    
    const dispatch = useDispatch()  //useDispatch to dispatch actions..
    const { users } = useSelector((state) => state.gitHubUserReducer) //access the  userObject from store..
     //access the users object
    //process the form and dispatch the necessary action ...
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text === '' || text === null){
            toast.error("Please Enter a Search Text")
        }
        else{
            //send the form text to the getSearchedUsers Action..
            dispatch(getSearchedUsers(text))
            setText('') //because it's a searched box...
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 mt-5">
                <input
                    type="text"
                    className="form-control-lg"
                    placeholder="...search for any gitHUB user"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <button
                    className="btn btn-outline-primary"
                    type="submit"
                    id="button-addon2"
                >
                    search
                </button>
                {
                    users.length > 0 && (
                        <button className='btn btn-outline-danger' onClick={()=> dispatch({type: CLEAR_USERS})}>RESET</button>
                    )
                }
                
            </div>
            
        </form>
    );
}

export default UserSearch;
