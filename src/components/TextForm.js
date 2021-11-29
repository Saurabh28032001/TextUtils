import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperCase = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase !!", "success");
  };
  const handleLowerCase = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase !!", "success");
  };
  const handleCapitalCase = ()=>{
    let str = text;
    let arr = str.split(" ");
    for(var i=0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str2 = arr.join(" ");
    setText(str2);
    props.showAlert("Capitalized the case !!", "success");
  };
  const handleClearText = ()=>{
    setText("");
    props.showAlert("Text is cleared !!", "success");
  };
  
const handleInverseCase = ()=>{
  let s = '';
  for(var i=0;i<text.length;i++){
    let n = text.charAt(i);
    if(n === n.toUpperCase()){
      n = n.toLowerCase();
    }
    else{
      n = n.toUpperCase();
    }
    s += n;
  }
  setText(s);
  props.showAlert("Text got inverted !!", "success");
};
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard !!", "success");
  };
  const setChange = (event)=>{
    setText(event.target.value);
  };
  return (
    <>
    <div className="container">
      <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea style={{backgroundColor : props.mode === 'light' ? 'white' : '#131417', color : props.mode === 'light'? 'black':'white'}} className="form-control" value={text} onChange={setChange} id="myBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase} >Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalCase}>Capitalize Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleInverseCase}>Inverse Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h2>
      <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
      <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes read</p>  
      <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
      <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length === 0 ? "Nothing to preview !" : text}</p>
    </div>
    </>
  );
}


