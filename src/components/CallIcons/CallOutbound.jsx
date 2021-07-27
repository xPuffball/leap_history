import React from 'react'
import { MdCall, MdCallMade } from 'react-icons/md'

const CallReceived = () => {
    return (
        <span className="callIcon received" style={{ display: 'inline-block', position: 'relative' }}>
            <MdCall size={18} textAnchor="middle" alignmentBaseline="middle" ></MdCall>
            <MdCallMade
                size={13}
                textAnchor="middle"
                alignmentBaseline="middle"
                style={{ fontSize: '.5em', position: 'absolute', left: '1.2em', bottom: '1.5em' }}
            />
        </span>

    )
}

export default CallReceived;