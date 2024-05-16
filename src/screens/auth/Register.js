import React, { useState } from 'react'
import './Register.css';

import Loading from '../../components/Loading';

import { db, auth } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register({ setCreateDaycare }) {

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = async () => {
        if (name === '') {
            swal('Error!', 'Please enter a name.', 'warning');
            return;
        }

        setLoading(true);
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'daycares', user.uid), {
                name: name,
                email: email,
                password: password,
                children: 0,
                drivers: 0,
                routes: 0,
                childrenInRoute: 0,
            });

            swal('Nice!', 'A user has been created successfully!', 'success');
            setLoading(false);
        } catch (error) {
            swal('Error!', `Try again: ${error.message}`, 'error');
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div class="form-add-container">
            <div className='form-add-body-container '>
                <Form.Label>Name</Form.Label>
                <Form.Control maxLength={35} value={name}
                    onChange={(event) => { setName(event.target.value) }} placeholder="Type here..." />

                <hr className='invisibleHr' />

                <Form.Label>Email</Form.Label>
                <Form.Control maxLength={35} value={email}
                    onChange={(event) => { setEmail(event.target.value) }} placeholder="Type here..." />

                <hr className='invisibleHr' />

                <Form.Label>Password</Form.Label>
                <Form.Control maxLength={35} value={password}
                    onChange={(event) => { setPassword(event.target.value) }} placeholder="Type here..." />

                <hr className='invisibleHr' />

                <center>
                    <button className='form-add-button-submit' onClick={() => { register() }}>
                        <h2>Submit</h2>
                    </button>
                </center>
            </div>
        </div>
    );
}

export default Register;
