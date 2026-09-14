import { useParams } from 'react-router-dom';
import styles from './UserProfile.module.css';
import Feed from '../Feed/Feed';
const UserProfile = () => {

    const { user } = useParams();
    return <div className='container mainContainer'>
        <h1 className='title'>{user}</h1>
        <Feed user={user} />

    </div>
}

export default UserProfile;