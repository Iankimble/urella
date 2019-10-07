import React from 'react';
import { Link } from 'react-router-dom';

const DaschboardActions = () => {
    return (
        <div>
            <Link to ='/edit-profile'>
            <i>Edit Profile</i>
            </Link>
            <Link to='/add-experience'>
            <i> Add Experience</i>
            </Link>
            <Link to = '/add-education'>
            <i> Add Education</i>
            </Link>
        </div>
    );
};

export default DashboardActions;
