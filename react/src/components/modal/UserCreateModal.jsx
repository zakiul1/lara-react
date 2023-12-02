
'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function UserCreateModal() {
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>

            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add User</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="User Name" />
                            </div>
                            <TextInput
                                id="name"
                                placeholder="user name"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput id="password" type="password" required />
                        </div>



                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default UserCreateModal;