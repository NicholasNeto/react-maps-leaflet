import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function CustomModel(props) {

    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                onAfterOpen={props.afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {props.children}
            </Modal>
        </div>
    );
}

export default CustomModel;