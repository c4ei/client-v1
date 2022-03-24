import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'

export default () => (
    <footer id="contact" className="flex-container footer">
        <div><div>© MultiSend</div></div>
        <div><Link to="/donate">Donate</Link></div>
        <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/eltneg">Telegram</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x75aa08cA38BA0915b47A75999125e310B4bA4A71">Etherscan</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Multisend-ETH/client-v1">Github</a></li>
        </ul>
    </footer>
)