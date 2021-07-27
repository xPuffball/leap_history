import React from 'react'
import { MdCallEnd, MdCallMissed } from 'react-icons/md'

const CallReceived = () => {
    return (
        <span className="callIcon missed" style={{ display: 'inline-block', position: 'relative' }}>
            <MdCallEnd size={18} textAnchor="middle" alignmentBaseline="middle"></MdCallEnd>
            <MdCallMissed
                size={13}
                textAnchor="middle"
                alignmentBaseline="middle"
                style={{ fontSize: '.5em', position: 'absolute', left: '0.4em', bottom: '2.1em' }}
            />
        </span>

    )
}

export default CallReceived;