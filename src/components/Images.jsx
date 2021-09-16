
import React from 'react'

class Images extends React.Component {

  render() {
    const { images } = this.props;
    return (
      <div>
        <div>
          {images}
          
        </div>
      </div>
    )
  }
}

export default Images