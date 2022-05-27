import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../../index.css'

function UserItem({ user: { login, avatar_url} })  {
    return (
        <div className='profileContainer'>
            <img src={avatar_url} className="imageStyle" alt="profile" />
            <div className='textStyle'>
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
