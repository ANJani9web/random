import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick=()=>{
        // console.log("UpperCase was clicked" + text);
        // const upt=text.toLowerCase;
        setText(text.toUpperCase());
    }

    const handleLoClick=()=>{
        // console.log("UpperCase was clicked" + text);
        // const upt=text.toLowerCase;
        setText(text.toLowerCase());
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleExtraClick=()=>{
         let newtext=text.split(/[ ]+/);
         setText(newtext.join(" "));
    }

    const handleClearClick=()=>{
        setText("");
   }

   const handleCopyClick=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
}

  return (

    <><div className="container">
    <h1> {props.heading}  </h1>
<div className="mb-3 my-3">
 <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraClick}>Handle Extra Space</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
   </div>

   <div className="container my-3">
       <h1>Your text Summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.08*text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>

   </div>
   
   </>
    
  )
}
