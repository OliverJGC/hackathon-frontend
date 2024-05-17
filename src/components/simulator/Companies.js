import './Companies.css'

import { Modal, Button } from 'react-bootstrap';

function Companies({ setModalCompanies, setCompany }) {

    const handleSelection = (company) => {
        setCompany(company);
        setModalCompanies(false);
    }

    return (
        <>
            <Modal size='lg' show={true} >
                <Modal.Body style={{ width: '100%' }}>
                    <div className='modal-container'>
                        <div className="modal-header">
                            <h1>Select Company</h1>

                            <Button variant="danger" onClick={() => { setModalCompanies(false) }}>
                                Close
                            </Button>
                        </div>

                        <button onClick={() => {handleSelection("Google")}} className="modal-company-option">
                        <img src={require('../../utils/img/google.png')} />
                            <h2>Company #1</h2>
                        </button>

                        <button onClick={() => {handleSelection("Capital One")}} className="modal-company-option">
                        <img src={require('../../utils/img/google.png')} />
                            <h2>Company #1</h2>
                        </button>

                        <button onClick={() => {handleSelection("Microsoft")}} className="modal-company-option">
                        <img src={require('../../utils/img/google.png')} />
                            <h2>Company #1</h2>
                        </button>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Companies;
