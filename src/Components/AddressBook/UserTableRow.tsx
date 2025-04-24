import { useConfig } from '../../Contexts/SIContext';
import { User, getUserDisplayName, getUserDisplayAddress }  from '../../Models/User';

interface UserTableRowProps {
    user: User;
}

function UserTableRow({ user }: UserTableRowProps) {
    const { config, setConfig } = useConfig();
    
    function editBtnClicked() {
        setConfig({ fragment: 'addContact', user: user });
    }

    function deleteBtnClicked() {
        console.log('delete button clicked', user);
    }

    return (
        <tr>
            <td>{getUserDisplayName(user)}</td>
            <td>{getUserDisplayAddress(user)}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                {/* TODO: don't use row/col, add a class and do some css, where do we put the css? */}
                <div className="row">
                    <div className="col-lg-6"><button onClick={editBtnClicked} type="button" className="btn btn-link btn-sm"><i className="fa-regular fa-pencil"></i></button></div>
                    <div className="col-lg-6"><button onClick={deleteBtnClicked} type="button" className="btn btn-link btn-sm"><i className="fa-regular fa-trash"></i></button></div>
                </div>
            </td>
        </tr>
    );
}

export default UserTableRow;