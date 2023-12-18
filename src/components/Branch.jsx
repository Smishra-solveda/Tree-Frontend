import React from 'react'
import Heading from './Heading'
import AddNode from './AddNode'

export default function Branch({parent, childrens, relationTree, personData}) {
  return (
    <ul>
        {childrens.map(x => {
            return <Heading key={x} id={x} relationTree={relationTree} personData={personData}/>
        })}
        <AddNode key={parent} parent={parent} />
    </ul>
  )
}
