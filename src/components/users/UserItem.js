import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function UserItem({ user: { login, avatar_url, id } })  {
    return (
        <div className='d-flex flex-row' key={id}>
            <div className='p-2'>
                <img src={avatar_url} className="rounded-circle" alt="profile" width={70} />
            </div>
            <div className='p-2'>
                <h4>{login}</h4>
                <Link to={`/user/${login}`} className='text-decoration-none link-info'>Visit Profile</Link>
            </div>
              
        </div> 
    );
}
//Using propTypes to check if the user is an object
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;
