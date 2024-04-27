import React from "react";
import ReactDOM from "react-dom/client";
import ServiceCard from "./src/components/ServiceCard";
import serviceData from "./src/mocdata";
import "./src/style/serviceContainer.css";
const Service = () => {
    return (
        <section>
            <h2 style={{ textAlign: "center" }}>My Service</h2>
            <div className="service-container">
                {
                    serviceData.map((ser) => {
                        return (
                            <ServiceCard key={ser.id} serList={ser} />
                        )
                    })
                }
            </div>
        </section >
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Service />);