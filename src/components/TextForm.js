import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log('clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success")
    }
    const handleFlClick = (str) =>{
        let newText = str.charAt(0).toUpperCase() + str.slice(1);
        setText(newText);
    }
   
    const handleOnChange =(event) =>{
        // console.log("handleonchange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText('hello');
    return (                
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"#04213b"}}>
            {/* <h1>{props.heading} - {text}</h1> */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"#04213b"}}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleFlClick}>First Letter</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#04213b"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} word and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
