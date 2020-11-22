import "leaflet/dist/leaflet.css";

import React from "react";
import { Popup } from "react-leaflet";

import "../../css/App.css";


function CustomPopup(props) {

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
                <p>{props.delivery.date}</p>


                <button name='edit' className="edit-button" value={props.delivery.id} onClick={props.modifierDelivery} >Editar</button>
                <button name='delete' className="delete-button" value={props.delivery.id} onClick={props.deletarDelivery} >Excluir</button>

            </div>
        </Popup>
    )
}

export default CustomPopup;