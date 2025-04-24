import { ChangeEvent, useEffect, useState } from 'react';
import UserTableRow from '../Components/AddressBook/UserTableRow';
import { User } from '../Models/User';
import { useConfig } from '../Contexts/SIContext';
import smktService from '../SmktService';
import '../Styles/address-book.css';
import LatestContact from '../Components/AddressBook/LatestUserCard';

function AddressBook() {
    const [users, setUsers] = useState<User[]>([]);
    const [latestUser, setLatestUser] = useState<User | undefined>();
    const [searchStr, setSearchStr] = useState<string>();
    const { config, setConfig } = useConfig();

    useEffect(() => {
        async function getLatestUser() {
            try {
                const latestUser = await smktService.getLatestUser();
                setLatestUser(latestUser);
            } catch(error) {
                console.error(error);
            }
        }

        getLatestUser();
    }, []); //Do this on load only

    useEffect(() => {
        async function getUsers() {
            try {
                const users = await smktService.getUsers(searchStr);                
                setUsers(users);
            } catch(error) {
                console.error(error);                
            }
        }
        
        getUsers();
    }, [searchStr]) // Do this on load and when the searchStr has changed state

    function addBtnClicked() {
        setConfig({ fragment: 'addContact', user: undefined });
    }

    function searchChanged(e: ChangeEvent<HTMLInputElement>) {
        setSearchStr(e.target.value);
    }

    return (
        <sm-fragment className="sm-si-main-fragment">
            <LatestContact user={latestUser}/>
            <si-button-bar>
                <input type="text" className="form-control" placeholder="Search" onInput={searchChanged} />
                <button className="btn btn-primary"><i className="fa-solid fa-file-import"></i> Import</button>
                <button className="btn btn-primary" onClick={addBtnClicked}><i className="fa-solid fa-circle-plus"></i> Add</button>
            </si-button-bar>
            <table className="table table-bordered table-striped table-light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => (
                        <UserTableRow key={user.id} user={user}/>
                    ))}
                </tbody>
            </table>
        </sm-fragment>
    );
}

export default AddressBook;