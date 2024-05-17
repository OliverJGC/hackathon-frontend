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
                            <h2>Google</h2>
                        </button>

                        <button onClick={() => {handleSelection("Apple")}} className="modal-company-option">
                        <img src={require('../../utils/img/apple.png')} />
                            <h2>Apple</h2>
                        </button>

                        <button onClick={() => {handleSelection("Amazon")}} className="modal-company-option">
                        <img src={require('../../utils/img/amazon.png')} />
                            <h2>Amazon</h2>
                        </button>

                        <button onClick={() => {handleSelection("Spotify")}} className="modal-company-option">
                        <img src={require('../../utils/img/spotify.png')} />
                            <h2>Spotify</h2>
                        </button>

                        <button onClick={() => {handleSelection("Tesla")}} className="modal-company-option">
                        <img src={require('../../utils/img/tesla.png')} />
                            <h2>Tesla</h2>
                        </button>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Companies;
