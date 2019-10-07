import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) =>{
    const educations = education.map(edu => (
        <tr key = {edu.id}>
        <td> {edu.education}</td>
        <td>{edu.degree}</td>
        <td>
            <Momment format= 'YYYY/MM/DD'>{momment.utc(edu.form)}</Momment> -{''}
            { edu.to === null ? (
                'Now'
            ) : (
                <Momment format ='YYYY/MM/DD'>{momment.utc(edu.to)}</Momment>
            )}
        </td>
        <td>
            <button onClick = {()=> deleteEducation(edu._id)}>
            Delete
            </button>
        </td>
            </tr>
    ));

    return(
        <Fragment>
            <h2>Education</h2>
            <tabe>
                <thead>
                    <tr>
                        <th> School</th>
                        <th> Degree</th>
                        <th> Year</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </tabe>
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

export default connect(
    null,
    { deletEducation }
)(Education);
