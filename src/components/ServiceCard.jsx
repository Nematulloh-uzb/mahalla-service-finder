import React from 'react'

function ServiceCard({ service }) {
    return (
        <div className="card">

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>{service.name}</h3>
                <span>⭐ {service.rating}</span>
            </div>

            <p style={{ color: "#9ca3af" }}>{service.category}</p>
            <p style={{ fontSize: 13 }}>{service.desc}</p>

            <p>📍 {service.location}</p>
            <p>📞 {service.phone}</p>

            <button className="btn" style={{ width: "100%", marginTop: 10 }}>
                Telegram orqali bog‘lanish
            </button>
        </div>
    );
}

export default ServiceCard;