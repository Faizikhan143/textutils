
//states is used to manage data inthe component like by using useState i can change the state of my component
//by the use of Function


//yahan useState aik Hook hai
// hooks hamain bina class banai class ke features use karny dety
import React, { useState } from "react";
import PropTypes from "prop-types";



//here "count" is variable and its updated function is "setCount"
// const [count,setCount] = useState(0);

// Or yeh hamesha apky function Component ke ander hi rahyga
export default function TextForm(props) {
const handleOnChange = (event) =>{
  //jab bhi aap koi event Listen karogy to apko aik event free me milega or iski madad se ab hum "write kar" paingy apny
  // Text area me
  setText(event.target.value);
}
const handleUcClick =() =>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!!","success")
}

const handleClearClick =() =>{
  let newText='';
  setText(newText);
}

const handleCapitalizeClick =() =>{
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
}

const handleCapitalizeSentenceClick =() =>{
  let newText = text.split("\n").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join("\n");
  setText(newText);
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const handleinverseclick = () => {
  let newtext = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newtext += text[i];
  }
  setText(newtext);
}; 

const handleLwClick =() =>{
    let newText=text.toLowerCase();
    setText(newText);
}
const [text, setText] = useState("");
  //we cant update text like this Its not allowed in React we have to use Functon
  // text="ashafhf";


  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

const buttonStyle ={
    border: "2px solid black",
}

return (
    <>
        <div className="container">  
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                {/* yeh "value" pehly just default value le raha tha ab yeh jo hum type kar rahy woh bhi leraha */}
                <textarea className="form-control" value={text} style ={{}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button style={buttonStyle}

             className={`btn btn-${()=>{props.toggleMode('primary')}} mr-2 my-1`} onClick={handleUcClick}>Convert to UpperCase</button>
            <button style={buttonStyle} className={`btn btn-${()=>{props.toggleMode('primary')}} mx-2 my-1`} onClick={handleLwClick}>Convert to UpperCase</button>
            <button style={buttonStyle} className={`btn btn-${()=>{props.toggleMode('primary')}} mx-2 my-1`} onClick={handleClearClick}>Clear</button>
            <button style={buttonStyle} className={`btn btn-${()=>{props.toggleMode('primary')}} mx-2 my-1`} onClick={handleCapitalizeClick}>Capitalize</button>
            <button style={buttonStyle} className={`btn btn-${()=>{props.toggleMode('primary')}} mx-2 my-1`} onClick={handleinverseclick}>Inverse</button>
            <button style={buttonStyle} className={`btn btn-${()=>{props.toggleMode('primary')}} mx-2 my-1`} onClick={handleCapitalizeSentenceClick}>Sentence Capatilization</button>
            <button style={buttonStyle} className={`btn btn-${()=>{props.toggleMode('primary')}} mx-2 my-1`} onClick={speak}>Speak</button>
            <button style={buttonStyle} className={`btn btn-${()=>{props.toggleMode('primary')}} mx-2 my-1`} onClick={handleCopyText}>Copied</button>
            {/* <button className="btn btn-dark mx-2 my-1" onClick={findAndReplace}>findAndReplace</button> */}
        </div>
        <div className="container my-3" style ={{}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/[ \n]+/).filter((elements)=>{return elements.length!==0}).length} words and {text.length} character {text.split( "\n").filter((elements)=>{return elements.length!==" "}).length} No of Lines</p>
            <p>{0.008 * text.split(" ").filter((elements)=>{return elements.length!==0}).length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text to preview it"}</p>
        </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter your Text Here....",
};
