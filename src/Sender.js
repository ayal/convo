import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const SenderDiv = styled.div`
   display:flex;
   padding:8px;
   background:#eee;
   .MuiButtonBase-root {
      padding:0px;
      align-items:center;
      justify-content:center;
   }
   .MuiButton-label {
      display:flex;
      align-items:center;
      justify-content:center;
      color:purple;
   }

   border-bottom:3px solid #888;
`;

const TextDiv = styled.div`
  display:flex;
  flex:1;
  .textfield {
     justify-content:center;

     flex:1;
  }
  .theinput {
     flex:1;
     padding:6px;
  }
  .textfield label {
     font-size:0.8em;
  }
  .textfield label[data-shrink='false'] {
   transform: translate(11px, 14px) scale(1);
  }
`;

Sender.propTypes = {
   onSend: PropTypes.func
};

function Sender(props) {
   const [text,setText] = React.useState(null);
   
   return (
      <SenderDiv>
         <TextDiv>
            <TextField id="outlined-basic" label="Message" variant="outlined" inputProps={{className:'theinput'}}
               className="textfield"
               onChange={(e) => { setText(e.target.value); }} />
         </TextDiv>
         <Button onClick={(e) => { props.onSend(text) }}>
            <SendIcon></SendIcon>
         </Button>
      </SenderDiv>
   );
}

export default Sender;