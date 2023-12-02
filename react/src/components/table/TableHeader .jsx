import React from 'react';

const TableHeader = ({ headerTitles }) => {
    return (
        <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
                {headerTitles.map((title, index) => (
                    <th key={index} scope="col" className="p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400">
                        {title}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
