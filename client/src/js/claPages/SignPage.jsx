import React from 'react'
import CLADisplayWidget from './CLADisplayWidget'

/**
 * Top-level controller for the page to sign a CLA.
 */
class SignPage extends React.Component {
  render () {
    const type = this.props.match.params.type || 'individual'
    const user = this.props.user
    return (
      <>
        <CLADisplayWidget
          type={type}
          user={user}
        />
      </>
    )
  }
}

export default SignPage
