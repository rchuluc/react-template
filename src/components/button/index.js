import React from 'react';
import './styles.scss'

export default ({ label, onClick }) => {
    return (
        <button className="app-btn" onClick={() => onClick()}>{label}</button>
    )
}