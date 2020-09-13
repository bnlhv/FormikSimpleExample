/***
 * login form   
 * controlled
 * by formik
 */

import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
   email: Yup.string().required('this is required').email('not valid email'),
   password: Yup.string().required('this is required').min(5)
 });

 export default function LoginFormik() {

    const handleSubmit = (values) => {
       console.log(`${values.email}  ${values.password}`);
    }
    
    return (
        <Formik
           initialValues={ {email: 'stam@nerdizz.com', password: '123123'} }
           onSubmit={handleSubmit}
           validationSchema={LoginSchema}
            render={ () => {
               return(
                   <Form>
                       <div className="form-group">
                           <Field type="email" name="email" className="form-control"/>
                           <ErrorMessage name="email" component="div"/>
                       </div>
                       <div className="form-group">
                           <Field type="password" name="password" className="form-control"/>
                           <ErrorMessage name="password" component="div" className="alert alert-danger"/>
                       </div>
                       <div className="form-group">
                           <button className="btn btn-primary">Submit</button>    
                       </div>
                   </Form>
               )
                   
               }
            }
        />
    )
}

