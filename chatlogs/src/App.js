import React, { useEffect, useState } from 'react';
import { dateToTimestamp, sortByTimestamp } from './utils';
import List from './components/List';
import './App.css';

function App() {

  const [ chatLogs, setChatLogs ] = useState([]);

  const getLogs = async () => {
    try {
        const [members, messages] = await Promise.all([
          fetch('https://run.mocky.io/v3/21b03580-280a-47ee-9f6e-e8bec22416db')
          .then(response => response.json()),
          fetch('https://run.mocky.io/v3/cf8b2e79-16c1-4e2c-a288-003338355482')
          .then(response => response.json())
        ]);
        const chatlogMessages = [];  
        messages.forEach(message => {
          let key = message.userId;
          members.forEach(member => {
            if(member.id === key) {
             return chatlogMessages.push({
                messageId: message.id,
                userId: message.userId,
                fullName: `${member.firstName} ${member.lastName}`,
                timestamp: dateToTimestamp(message.timestamp),
                email: member.email,
                message: message.message,
                avatar: member.avatar 
              })
            }
          });
      });
      setChatLogs(sortByTimestamp(chatlogMessages));
    } catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    getLogs();
  })
  return (
    <div className="App">
      <List data={chatLogs}/>
    </div>
  );
}

export default App;
