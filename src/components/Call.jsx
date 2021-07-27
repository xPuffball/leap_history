import React, { useState, useEffect } from 'react'

import CallReceived from './CallIcons/CallReceived.jsx'
import CallMissed from './CallIcons/CallMissed.jsx'
import CallVoicemail from './CallIcons/CallVoicemail.jsx'
import CallOutbound from './CallIcons/CallOutbound.jsx'
import { BsArchive, BsCheck } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { MdUnarchive } from 'react-icons/md'

import './call.css'

const Call = ({id, date, direction, from, to, via, duration, call_type, is_archived, archiveCall}) => {

    const [confirm, setConfirm] = useState(false)

    let formattedDate = new Date(date)

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    return (
        <div className="call">
            <div className="infoContainer">
                {call_type === "answered" && direction === "inbound" && <CallReceived></CallReceived>}
                {call_type === "answered" && direction === "outbound" && <CallOutbound></CallOutbound>}
                {call_type === "missed" && <CallMissed></CallMissed>}
                {call_type === "voicemail" && <CallVoicemail></CallVoicemail>}
                <div className="fromto">
                    <section className="from">{from}</section>
                    <section className="to">
                        {call_type === 'answered' && direction === "inbound" && 'answered by ' + to}
                        {call_type === 'answered' && direction === "outbound" && 'called on ' + to}
                        {call_type === 'missed' && direction === "inbound" && 'missed by ' + to}
                        {call_type === 'missed' && direction === "outbound" && 'missed call to ' + to}
                        {call_type === 'voicemail' && 'left a voicemail'}
                    </section>
                </div>
            </div>
            {!is_archived ? 
            !confirm ?
                <div className="dateContainer">
                    {formatAMPM(formattedDate)}
                    <button className="archiveButton" onClick={() => {setConfirm(true)}}>
                        <BsArchive size={16} onClick={() => {setConfirm(true)}}></BsArchive>
                    </button>
                </div> :
                <div className="archiveConfirm">
                    <div>Archive?</div>
                    <div className="confirmMenu">
                        <button className="archiveButton" onClick={() => {setConfirm(false)}}>
                            <FaTimes size={15}></FaTimes>
                        </button>
                        <button className="archiveButton" onClick={() => archiveCall(id, true)}>
                            <BsCheck size={15}></BsCheck>
                        </button>
                    </div>
                </div>
            :   <div className="dateContainer">
                    {formatAMPM(formattedDate)}
                    <button className="archiveButton" onClick={() => {setConfirm(true)}}>
                        <MdUnarchive size={18} onClick={() => archiveCall(id, false)}></MdUnarchive>
                    </button>
                </div>
            }

        </div>
    );
};

export default Call;