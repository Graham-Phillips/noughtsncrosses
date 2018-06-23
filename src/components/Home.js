import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../createRelayEnvironment'

// const HomeAllPostQuery = graphql`
//   query HomeAllPostQuery {
//     viewer {
      
//     }
//   }
// `
class Home extends Component {
    render() {
      return (
        <div>
          Home!
        </div>
      )
    }
  } 
// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <QueryRenderer
//           environment={environment}
//           query={HomeAllPostQuery}
//           render={({error, props}) => {
//             if (error) {
//               return <div>{error.message}</div>
//             } else if (props) {
//               return <div>viewer</div>
//             }
//             return <div>Loading</div>
//           }}
//         />
//       </div>
//     )
//   }
// }

export default Home
