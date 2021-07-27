import React, { useState, useEffect, setState } from 'react';
import axios from 'axios'

import Call from './Call.jsx'

import './callfeed.css'

const requestCalls = () => {
    return (
        fetch('https://aircall-job.herokuapp.com/activities')
        .then(response => response.json())
        .catch(error => {
            console.error(error);
            return [];
          })
    );
}

const callsToDateObj = (data) => {
    let newObj = {}
    for(let i = 0; i < data.length; i++){
        let curDate = data[i]['created_at'].slice(0, 10);
        if (!newObj[curDate]) {
            newObj[curDate] = [data[i]]
        } else {
            newObj[curDate].push(data[i])
        }
    }
    return newObj;
}

const filterCalls = (data, key, value) => {
    let filteredData = [];
    for(let i = 0; i < data.length; i++){
        if(data[i][key] === value){
            filteredData.push(data[i])
        }
    }
    return filteredData;
}

const CallFeed = () => {

    const [updateState, setUpdateState] = useState(true);
    const [calls, setCalls] = useState({});
    const [page, setPage] = useState(0);

    function archiveCall(id, archived) {
        axios.post(`https://aircall-job.herokuapp.com/activities/${id}}`, { is_archived: archived })
        .then(function (response) {
            setUpdateState(!updateState);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        requestCalls().then(data => {
            if (page === 0) {
                let archiveFilterData = filterCalls(data, 'is_archived', false)
                setCalls(callsToDateObj(archiveFilterData))
            } else if (page === 1) {
                let archiveFilterData = filterCalls(data, 'is_archived', false)
                setCalls(callsToDateObj(filterCalls(archiveFilterData, 'direction', 'inbound')))
            } else if (page === 2) {
                let archiveFilterData = filterCalls(data, 'is_archived', false)
                setCalls(callsToDateObj(filterCalls(archiveFilterData, 'direction', 'outbound')))
            } else if (page === 3) {
                setCalls(callsToDateObj(filterCalls(data, 'is_archived', true)))
            }
        })
    }, [page, updateState])

    return (
        <span className="feedContainer">
            <header>
                <div className={page === 0 ? "navElement selected" : "navElement"} onClick={() => {setPage(0)}}>all calls</div>
                <p className={page === 1 ? "navElement selected" : "navElement"} onClick={() => {setPage(1)}}>inbox</p>
                <p className={page === 2 ? "navElement selected" : "navElement"} onClick={() => {setPage(2)}}>outbox</p>
                <p className={page === 3 ? "navElement selected" : "navElement"} onClick={() => {setPage(3)}}>archived</p>
            </header>
            <div className="callContainer">
                {Object.keys(calls).map((call, i) => 
                <div key={i}>
                    <p>{call}</p>
                    {calls[call].map((call) => <Call key={call.id} id={call.id} date={call.created_at} direction={call.direction} from={call.from} to={call.to} via={call.via} duration={call.duration} call_type={call.call_type} is_archived={call.is_archived} archiveCall={archiveCall}></Call>)}
                </div>)}
            </div>
        </span>
    )
}

export default CallFeed;