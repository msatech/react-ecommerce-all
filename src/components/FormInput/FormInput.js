import React from 'react'
import './FormInput.css'
function FormInput({ label, ...otherProps }) {
    console.log(...otherProps)
    return (
        <div className="forminput">
            <div className="group">
                <input className='form-input' {...otherProps} />
                {
                    label ?
                        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}  >
                            {label}
                        </label>)
                        : null
                }
            </div>
        </div>

    )
}

export default FormInput
