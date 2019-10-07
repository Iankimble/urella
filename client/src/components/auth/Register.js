import React, { Fragment, userState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData ] = useState({
        name:'',
        email:'',
        password:'',
        confirmpPssword:'',       
    });

    const { name, email, password, confirmPassword } = formData;
    
    const onChange = e => 
    setFormData({ ...formData, [e.target.name ]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if ( password !== confirmPassword ) {
            setAlert('Passwords do not match, try again', 'danger');
        } else { register ({ name, email, password });
    }
    };
    if (isAuthenticated){
        return <Redirect to ='/dashboard'/>;
    }

    return (
<Fragment>
    <h1> Sign up</h1>
    <p>
        <i> Create an account </i>
    </p>
    <form onSubmit = {e => onSubmit(e)}>
    <input
    type = 'email'
    placeholder = 'Email Address'
    name = 'email'
    value = {email}
    onChange = {e => onChange(e)}
    />

    </form>
</Fragment>
    )
}