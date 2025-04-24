import { User }  from '../Models/User';
import { ChangeEvent, useState } from 'react';
import { useConfig } from '../Contexts/SIContext';
import smktService from '../SmktService';
import '../Styles/add-contact.css';

interface AddContactProps {
    initialValues?: Partial<User>;
}

// TODO: validation
function AddContact({ initialValues }: AddContactProps) {
    const isAddMode = !Boolean(initialValues);

    const [user, setUser] = useState<User>(initialValues as User);
    const { config, setConfig } = useConfig();

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    async function saveBtnClicked() {
        if (isAddMode) {
            await smktService.createUser(user);
        } else {
            await smktService.updateUser(user);
        }

        goToMain();
    }

    async function cancelBtnClicked() {
        goToMain();
    }

    function goToMain() { setConfig({ fragment: 'main' }); }
    
    return (
        <sm-fragment className="sm-si-add-contact-fragment">
            <div className="card">
                <h4 className="card-header bg-primary text-white">{`${isAddMode ? 'Add a New' : 'Edit'} Contact ${isAddMode ? '' : user?.id}`}</h4>
                <div className="add-contact-form card-body">
                    <div className="row">
                        <div className="col-lg-3">
                            <fieldset>
                                <label>First Name</label>
                                <input name="firstName" className="form-control" type="text" value={user?.firstName} onChange={handleChange} />
                            </fieldset>
                        </div>
                        <div className="col-lg-3">
                            <label>Last Name</label>
                            <input name="lastName" className="form-control" type="text" value={user?.lastName} onChange={handleChange} />
                        </div>
                        <div className="col-lg-6">
                            <label>Phone Number</label>
                            <input name="phone" className="form-control" type="text" value={user?.phone} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <fieldset>
                                <label>Email</label>
                                <input name="email" className="form-control" type="text" value={user?.email} onChange={handleChange}/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <fieldset>
                                <label>Address</label>
                                <input name="address" className="form-control" type="text" value={user?.address?.address} onChange={handleChange}/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label>City</label>
                            <input name="address" className="form-control" type="text" value={user?.address?.city} onChange={handleChange}/>
                        </div>
                        <div className="col-3">
                            <label>State</label>
                            <input name="address" className="form-control" type="text" value={user?.address?.stateCode} onChange={handleChange}/>
                        </div>
                        <div className="col-3">
                            <label>City</label>
                            <input name="address" className="form-control" type="text" value={user?.address?.postalCode} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <si-button-bar>
                        <button type="button" className="btn btn-secondary" onClick={cancelBtnClicked}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={saveBtnClicked}><i className="fa-solid fa-save"></i> Save</button>                    
                    </si-button-bar>
                </div>
            </div>
        </sm-fragment>
    )
}

export default AddContact;