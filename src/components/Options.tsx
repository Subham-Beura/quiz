import React from 'react'
type propsType = {
    allOptions: string[]
}
export  function Options(props: propsType) {
    return (
        <div className='option-container'>
            {props.allOptions.map((option, index) => {
                return (<p className='option' key={index}>{option}</p>)
            })}
        </div>
    )
}
