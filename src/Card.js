import React from 'react'
import PropTypes from "prop-types"
import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => (
    <div className="card">
        <span className={`card ${feedback}`} onClick={() => onClick(card)}>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

Card.protoTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf(['visible', 'hidden', 'justMatched', 'justMismatched']).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card