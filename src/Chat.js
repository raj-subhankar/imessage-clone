import React, { useState } from 'react'
import './Chat.css'
import { IconButton } from "@material-ui/core"
import MicNoneIcon from "@material-ui/icons/MicNone"
import Message from './Message';

function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();


        setInput("");
    }

    return( 
        <div className="chat">
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>

            <div className="chat__messages">
                <Message />
            </div>

            <div className="chat__input">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="iMessage" type="text"/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton >
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat