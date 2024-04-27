import React from "react";
import { CgWebsite } from "react-icons/cg";
import "../style/serviceCard.css";

export default ServiceCard = (props) => {
    const { serList } = props;
    const { service, description, icon } = serList;
    return (
        <div className="service-card">
            {icon}
            <h3>{service}</h3>
            <p>{description}</p>
        </div>
    )
}