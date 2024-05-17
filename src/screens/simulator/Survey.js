import React, { useState } from "react";
import "./Survey.css"
import Companies from "../../components/simulator/Companies";
import Simulation from "./Simulation";
import Loading from "../../components/Loading";

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from "sweetalert";

import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function Survey() {
    const [loading, setLoading] = useState(false);
    const [money, setMoney] = useState();
    const [company, setCompany] = useState('');
    const [result, setResult] = useState({});

    const [modalCompanies, setModalCompanies] = useState(false);
    const [openSimulation, setOpenSimulation] = useState(false);

    const getData = async () => {
        setLoading(true)
        if (isNaN(money) || money <= 0 || company === '') {
            setLoading(false)
            swal('Error', 'Error, please fill out the fields..', 'error');
        } else {
            try {
                const response = await axios.post('http://127.0.0.1:5000/api/data', { money: money, company: company });
                setResult(response.data);
                setOpenSimulation(true)
                swal('Nice!', 'It works!.', 'success');
            } catch (error) {
                swal('Error', 'Error, try again.', 'error');
            } finally {
                setLoading(false)
            }
        }
    };

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <div className="survey-container">
                <div className="survey-left">
                    <h1>Investment Simulator</h1>
                    <p>{result.result}</p>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled</p>
                </div>

                <div className="survey-right">
                    <h2>Select a Company</h2>
                    <Button onClick={() => { setModalCompanies(true) }} style={{
                        width: '40%', fontSize: '25px', borderRadius: '20px'
                    }}
                        variant={company == '' ? "danger" : "success"} type="submit">
                        {company == '' ? 'Select' : company + ' Selected'}
                    </Button>

                    <hr />

                    <h2>How much money do you spend? (USD Money)</h2>
                    {/* CHECK IF THE MONEY CAN ACCEPT DOUBLE NUMBERS */}
                    {/* CHECK IF THE MONEY CAN ACCEPT DOUBLE NUMBERS */}
                    {/* CHECK IF THE MONEY CAN ACCEPT DOUBLE NUMBERS */}
                    {/* CHECK IF THE MONEY CAN ACCEPT DOUBLE NUMBERS */}

                    <Form.Control
                        style={{ width: '90%', fontFamily: 'QuicksandRegular', fontSize: '20px', backgroundColor: '#EEEEEE' }}
                        maxLength={30}
                        type='number'
                        placeholder='$$$'
                        onChange={(event) => setMoney(parseInt(event.target.value))}
                        value={money}
                    />
                    <Button style={{
                        width: '40%', fontSize: '25px', borderRadius: '20px', marginTop: '30px'
                    }}
                        variant="danger" onClick={() => {getData()}}>
                        Submit
                    </Button>

                </div>
            </div>
            {modalCompanies && <Companies setModalCompanies={setModalCompanies} setCompany={setCompany} />}
            {openSimulation && <Simulation company={company} result={result}/>}
        </>
    );
}
export default Survey;