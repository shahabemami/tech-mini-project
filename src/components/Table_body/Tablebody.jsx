import React from 'react';

const Tablebody = (props) => {
    return (
        <td style={{ border: "2px solid #483187" }} className="text-center">{props.children}</td>
    );
};


export default Tablebody;