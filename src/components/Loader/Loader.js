import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = () => { 
    return (
        <div className="loader-container">
            <CircularProgress color="black" />
        </div>
    )
}

export default Loader

// export default function CircularIndeterminate() {

//     return (
//       <div className="loader-container">
//         <CircularProgress color="black" />
//       </div>
//     );
//   }