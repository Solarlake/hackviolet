import React from "react";
import "../style/Badge.scss";

const Badge = () => {
    return (
        <a
            id="mlh-trust-badge"
            className="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-black.svg"
                alt="Major League Hacking 2026 Hackathon Season"
                style={{ width: '100%' }}
            />
        </a>
    )
}

export default Badge;