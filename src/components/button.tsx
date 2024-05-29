import React from 'react'

const Button = (data:{className:string,text:string}) => {
  return (
    <div className={`${data.className}`}>
            <a href="#">{data.text}</a>
    </div>
  )
}

export default Button;