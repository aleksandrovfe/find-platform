import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/FormFieldsValidator";
import {Input, TextArea} from "../../Common/FormsControls/FormContrlos";

const maxLength140 = maxLengthCreator(140)

const FormNewPost = props => {
    return (
        <div>
            <h1>New post</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[requiredField]} component={Input} placeholder={"Title"} name={"title"} />
                </div>
                <div>
                    <Field validate={[requiredField, maxLength140]}  component={TextArea} placeholder={"Short description"} name={"shortDescription"} />
                </div>
                <div>
                    <Field validate={[requiredField]} component={Input} placeholder={"Description"} name={"description"} />
                </div>
                <div>
                    <button>New Post</button>
                </div>
            </form>
        </div>
    )
}

export const NewPost = reduxForm({
    form: 'new-post'
})(FormNewPost)

