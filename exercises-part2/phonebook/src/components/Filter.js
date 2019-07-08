import React from 'react'

const Filter = (props) => {

    return (
      <div>
        <p>filter shown with: <input value={props.value}
                                    onChange={props.onChange}
                                    onKeyUp={props.onKeyUp}
                              /> 
        </p>
      </div>
    )
  }

  export default Filter;  