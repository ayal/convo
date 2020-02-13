import React from 'react';
import logo from './logo.svg';
import './App.css';
import Convo from './Convo'

function App(props) {
  let [data, setData] = React.useState(props.data);

  React.useEffect(()=>{
    window.addEventListener("message", (msg) => {
      if (msg.data) {
        if (msg.data.type === 'single') {
          //console.log('got single message', msg.data);
          setData(prevdata => {
             let {messages} = (prevdata || {messages: []});
             messages.push({
              id: msg.data.cuser.id, type: 'own', text: msg.data.message,
              author: msg.data.cuser.firstName, date: new Date()
            });
            let newdata = {...data, messages};
             return newdata;
            });
        }
        else if (msg.data.messages) { // update all / replace
          //console.log('got update message', msg.data);
          setData(data => ({...msg.data}));
        }
      }
    }, false);    
  },[]);

  if (!data) {
    return null;
  }

  console.log('rendering app...', data.messages && data.messages.length);

  return (
    <Convo data={data} />
  );
}

export default App;
