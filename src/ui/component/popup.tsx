import "leaflet/dist/leaflet.css";

import React from "react";
import { Popup } from "react-leaflet";
import PropTypes from 'prop-types';
import moment from 'moment'
import "../../style/App.css";
function CustomPopup(props: any) {


    const date = moment(props.delivery.date)
    
    return (
        <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
        >
            <div>
                <h3>{props.delivery.name}</h3>

                <h4>{'Endereço:'}</h4>
                <p>{props.delivery.address} - {props.delivery.complement} </p>
                <h4>{'Data de Entrega:'}</h4>
                <p>{date.format("MMM Do YY")}</p>


                <span style={{ color: '#0089A5', lineHeight: '24px', textDecoration: 'none' }}>
                    <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${props.delivery.latitude},${props.delivery.longitude}`}>Ver rotas no Google Maps</a>
                </span>

                <button name='edit' className="edit-button" value={props.delivery.id} onClick={props.modifierDelivery} >Editar</button>
                <button name='delete' className="delete-button" value={props.delivery.id} onClick={props.deletarDelivery} >Excluir</button>


            </div>
        </Popup>
    )
}

CustomPopup.propTypes = {
    modifierDelivery: PropTypes.func,
    deletarDelivery: PropTypes.func,
    delivery: PropTypes.shape({
        name: PropTypes.string.isRequired,
        complement: PropTypes.string
    })
};

export default CustomPopup;