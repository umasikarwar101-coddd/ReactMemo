import React from 'react'

const ChildComponents =React.memo(
    (props) => {
    console.log("child rerenders")
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
        

    </div>
  )
}
);

export default ChildComponents

// agar react.memo me wrapkr dete han component ko toh woh rerender tbahi hogajabh props change honge nhi toh rerender nhihoga

// if uare sending afunction then react.memo wontbe able to saveu from rerender