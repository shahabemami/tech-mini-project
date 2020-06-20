import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/styles';

import { Storage } from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react';

function DragImage() {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');


  const useStyles = makeStyles({
    dragdrop: {
      border: "2px solid #483187",
      height: "50px",
      width: "100%",
      lineHeight: "45px",
      textAlign: "center",
      marginBottom: "0.8em",
    },
    uploadbtn: {
      background: "#483187",
      width: "100%"
    }
  });

  const classes = useStyles();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setFileName(file.name);

  };

  const saveFile = () => {
    console.log(fileName);
    console.log(file);
    Storage.put(fileName, file)
      .then(() => {
        console.log('file saved succesfully.');
        setFile('');
        setFileName('');
      })
      .catch(error => {
        console.error('error while uploading file', error);
      });
  };

  return (
    <div>
      <input className={classes.dragdrop} type="file" onChange={handleFileChange} />
      <Button className={classes.uploadbtn} onClick={saveFile} >Upload</Button>
    </div>
  );
};

export default DragImage;