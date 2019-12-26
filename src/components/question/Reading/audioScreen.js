import { ReactMic } from 'react-mic';
import React from 'react';

let count=56; 

let myVar;
let myVar2
class AudioScreen extends React.Component {

state = {
  record: false,
  chunkArray: [],
  blobURL: "",
}

componentDidMount(){
  this.handleClick()
}

componentWillUnmount(){
  clearTimeout(myVar);
  clearTimeout(myVar2);
 };


handleClick = (e) => {
  this.startRecording()
  myVar2 = setTimeout(()=> this.stopRecording(), 6000)
      }

startRecording = () => {
    this.setState({
      record: true
    });
  }

  onData = (recordedBlob) => {
    this.setState({
      chunkArray: this.state.chunkArray.concat(recordedBlob)
    })
  }
  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onStop= (recordedBlob) => {   
    this.setState({
      blobURL: "",
      time: 2000,
      time2: 5000
    })
    
    count++
    var originalname = "AudioResponse"+count+".wav";
    var fd = new FormData();
    fd.append("soundBlob", recordedBlob.blob, originalname);

  this.props.HandleSubmit(fd)
    
  }

  render() {
    return (
      <div>
        <h1>Answer Audio</h1>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
          width = {175}
          height = {50} />
      </div>
    );
  }
}


export default AudioScreen
