import React, { useState } from 'react'
import PageHader from '../components/pages/PageHeader'
import DataTable from '../components/table/DataTable'


const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const headerTitles = ['Name', 'Email', 'Role As', 'Status', 'Actions'];
    return (
        <>
            <PageHader url={'/users'} pageName="Users" openModal={openModal} title={'All Users'} />
            <DataTable headerTitles={headerTitles} />

        </>
    )
}

export default Users