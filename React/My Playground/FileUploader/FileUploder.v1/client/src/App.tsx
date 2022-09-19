import { useState } from 'react'; 

import FileUpload from './FileUpload/FileUpload';

import './App.scss';


function App() {

  const [files, setFiles] = useState([{
    name: 'myFile.pdf'
  }])

  const removeFile = (filename : any) => {
    try {
      setFiles(files.filter(file => file.name !== filename));
    } catch (error) {
      console.error(error);
    }
  }

  console.log(files);

  return (
    <div className="App">
      <p className='title'>Upload file</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
    </div>
  );
}

export default App;
