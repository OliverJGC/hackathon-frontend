import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Simulation.css';
import Loading from "../../components/Loading";
import MakeComment from "../../components/simulator/Post";

import { db } from "../../firebase";
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

import swal from 'sweetalert';
import { Form, Button } from 'react-bootstrap';
import { AgChartsReact } from 'ag-charts-react';

function Simulation({ company, result }) {
    const navigate = useNavigate();
    const userId = getAuth().currentUser.uid
    const [loading, setLoading] = useState(false);
    const [modalMakeComment, setModalMakeComment] = useState(false);

    const data = result.data;

    const options = {
        data: data,
        series: [{
            xKey: 'month',
            yKey: 'value',
        }],
    };

    const [userName, setUserName] = useState('');
    const fetchUser = async () => {
        try {
            const docUser = await getDoc(doc(db, 'users', userId))
            setUserName(docUser.data().name);
        } catch (error) {
            console.log("Error.");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchUser();
            } catch (error) {
                swal('Error', 'Error, try again.', 'warning');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            { modalMakeComment && <MakeComment setModalMakeComment={setModalMakeComment} user={userName} data={data}/>}
            <div className="simulation-container">
                <h1>{company} Investment</h1>
                <div className="container-chart">
                    <AgChartsReact options={options} />
                </div>

                <div className="buttons-chart">
                    <Button style={{
                        width: '20%', fontSize: '25px', borderRadius: '20px', margin: '30px'
                    }}
                        variant="danger" onClick={() => { navigate('/') }}>
                        Close
                    </Button>
                    <Button style={{
                        width: '20%', fontSize: '25px', borderRadius: '20px', margin: '30px'
                    }}
                        variant="success" onClick={() => {setModalMakeComment(true)}}>
                        Share
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Simulation;