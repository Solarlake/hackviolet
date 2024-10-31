import React from "react";

const Badge = () => {
    return (
        <a
            id="mlh-trust-badge"
            style={{
                display: 'block',
                maxWidth: '74px',
                minWidth: '30px',
                position: 'fixed',
                right: '50px',
                top: 0,
                width: '10%',
                zIndex: 10000,
            }}
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
                alt="Major League Hacking 2025 Hackathon Season"
                style={{ width: '100%' }}
            />
        </a>
    )
}

export default Badge;