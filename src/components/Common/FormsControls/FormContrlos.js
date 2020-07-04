import React from "react";

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            {props.children}
            <p>{hasError && meta.error}</p>
        </div>
    )
}

export const TextArea = (props) => {
    const { input, ...restProps } = props
    return  <FormControl {...restProps}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, ...restProps } = props
    return  <FormControl {...restProps}><input {...input} {...restProps} /></FormControl>
}