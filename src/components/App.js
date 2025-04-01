import React, { useState } from 'react'

const App = () => {
  //const [relatives, setRelatives] = useState(["relative1","relative2","relative3","relative4","relative5"])
  let relatives = ["relative1","relative2","relative3","relative4","relative5"]
  return (
    <div id="main">
      <ol key={"relativeList"}>
        {relatives.map((relative, ind) => (
          <li key={`relativeListItem${ind+1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
