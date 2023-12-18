import React from 'react'
import Branch from './Branch';
import AddNode from './AddNode';
import TreeHead from './TreeHead';
import DetailCard from './DetailCard';


export default function Heading({id, relationTree, personData}) {
  const node = personData.find(e => e.id===id);
  // console.log("node : ", node.name);
  return (
    <li><code>{(id===0)?<TreeHead key={id} parent={id}/>:<DetailCard node={node} />}</code>
      {(relationTree[id]!==undefined)?
        <Branch key={id} parent={id} childrens={relationTree[id]} relationTree={relationTree} personData={personData} />
      :
        <ul><AddNode key={id} parent={id} /></ul>
      }
    </li>
  )
}
