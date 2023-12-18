import "../css/app.css"
import Heading from "../components/Heading";
import { createContext, useEffect, useState } from "react";


export const PersonContext = createContext();

const LOCAL_STORAGE_KEY_DATA = 'familyTree.data';
const LOCAL_STORAGE_KEY_RELATION = 'familyTree.relation';


function App() {
  const [personData, setPersonData] = useState(sampleData);
  const [personRelation, setPersonRelation] = useState(sampleRelation);
  const [relationTree, setRelationTree] = useState(generateRelTree());


  useEffect(() => {
    const personDataJSON = localStorage.getItem(LOCAL_STORAGE_KEY_DATA);
    const personRelationJSON = localStorage.getItem(LOCAL_STORAGE_KEY_RELATION);

    if(personDataJSON != null) setPersonData(JSON.parse(personDataJSON));
    if(personRelationJSON != null) setPersonRelation(JSON.parse(personRelationJSON));
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify(personData))
    localStorage.setItem(LOCAL_STORAGE_KEY_RELATION, JSON.stringify(personRelation))

    setRelationTree(generateRelTree())

  }, [personData, personRelation])


  function generateRelTree() {
    let relationTree = {};
    for(let i of personRelation){
        let p = i[0];
        let c = i[1];
    
        if(relationTree[p] === undefined){
            relationTree[p] = [c];
        }else{
            relationTree[p].push(c);
        }
    }
    return relationTree;
  }

  


  const personContextValue = {
    handlePersonDataAdd,
    handlePersonRelationAdd,
    handlePersonRelationHeadAdd
  }

  function handlePersonDataAdd(newDetail) {
    setPersonData(prev => ([...prev, newDetail]));
  }

  function handlePersonRelationAdd(relation){
    setPersonRelation(prev => ([...prev, relation]))
  }

  function handlePersonRelationHeadAdd(child){
    const newRel = personRelation.map(x => {
      if(x[0] === 0) x[0]=child;
      return x;
    })


    newRel.push([0, child]);

    setPersonRelation(newRel);
  }


  // console.log(relationTree);
  

  return (
    <PersonContext.Provider value={personContextValue}>
      <center>
        <figure>
          <ul className="tree">
            <Heading key="0" id={0} relationTree={relationTree} personData={personData} />
          </ul>
        </figure>
      </center>
    </PersonContext.Provider>
    
  );
}

export default App;




let sampleData = [
  {
    id : 0,
    name : "ULTIMATE FATHER",
    age : 10
  },
  {
      id : 11,
      name : "dasrath",
      age : 10
  },
  {   id : 12,
      name : "ram",
      age : 9
  },
  {   id : 13,
      name : "lakshman",
      age : 8
  },
  {   id : 14,
      name : "bharat",
      age : 7
  },
  {   id : 15,
      name : "shatrugna",
      age : 7.9 
  },
  {   id : 16,
      name : "luv",
      age : 7.8 
  },
  {   id : 17,
      name : "kush",
      age : 7.6 
  },
  {   id : 99,
      name : "extra",
      age : 7.3 
  }
]

let sampleRelation = [[0,11],[11,12],[11,13],[11,14],[11,15],[12,16],[12,17]];