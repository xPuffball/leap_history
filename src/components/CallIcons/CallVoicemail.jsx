import React from 'react'
import { FaVoicemail } from 'react-icons/fa'

const CallVoicemail= () => {
    return (
        <span className="callIcon received" style={{ display: 'inline-block', position: 'relative' }}>
            <FaVoicemail size={18}></FaVoicemail>
        </span>
    )
}

export default CallVoicemail;