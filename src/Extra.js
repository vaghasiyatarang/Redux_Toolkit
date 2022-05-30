import React from 'react'
import { useSelector } from 'react-redux'
const Extra = () => {

    const count = useSelector((e) => e.counterstate)

    const pluse = useSelector((e) => e.pluse)


  return (
    <div style={{background:"ghostwhite"}}>Extra Component to see value

        <h1>{count}</h1><br/>
        <h1>{pluse}</h1>
    </div>
  )
}

export default Extra














// import React from 'react'
// import { useSelector } from 'react-redux'
// const Extra = () => {

//     const count = useSelector((e) => e.counterstate)

//     const pluse = useSelector((e) => e.pluse)


//   return (
//     <div style={{background:"ghostwhite"}}>Extra Component to see value

//         <h1>{count}</h1><br/>
//         <h1>{pluse}</h1>
//     </div>
//   )
// }

// export default Extra