import React from 'react';
import {Button} from 'react-bootstrap';
import { makeStyles } from '@material-ui/styles';


function DragImage() {

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
      background:"#483187",
      width:"100%"
    }
  });

  const classes = useStyles();

  const handleFileChange = (e) => {
    let files = e.target.files[0];
    files = new File([files], 'file"name', { type: files.type });
    files.src = URL.createObjectURL(e.target.files[0]);
  };


  return (
    <div>
      <input className={classes.dragdrop} type="file" onChange={handleFileChange} />
        <Button className={classes.uploadbtn} >Upload</Button>
    </div>
  );
};

export default DragImage;