import { User, getUserDisplayName, getUserDisplayAddress } from '../../Models/User';

interface LatestContactProps {
    user?: User;
}

function LatestContact({user}: LatestContactProps) {
    return (
        <div className="card">
            <h4 className="card-header">Latest Contact</h4>
            <div className="card-body">
                {
                    user != undefined
                    ? 
                    <>
                        <div>{ getUserDisplayName(user) }</div>
                        <div>{ getUserDisplayAddress(user) }</div>
                    </>
                    :
                    <div className="empty-message">User data unavailable</div>
                    
                }
            </div>
        </div>
    )
}

export default LatestContact;