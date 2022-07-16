import React from 'react'
type propsType = {
    allOptions: string[]
}
export default function Options(props: propsType) {
    return (
        <div>
            {props.allOptions.map((option, index) => {
                return (<p key={index}>{option}</p>)
            })}
        </div>
    )
}
