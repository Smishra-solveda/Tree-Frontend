import React from 'react';



export default function DetailCard({node}) {
  return (
    <>
        <div style={{borderBottom: "1px solid black"}}>
            Relationship
        </div>
        <div>
            {node.name}
        </div>
    </>
  )
}
