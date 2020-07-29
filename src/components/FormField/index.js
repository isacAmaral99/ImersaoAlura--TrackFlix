import React from 'react';





  

function  FormField({label, type ,name,value, onChange }){
    
    return(
        <div>

            <label>
            {label}:
                <input 
                
                    
                    label={label}
                    type={type}
                    name={name}
                    value={value}
                    onChange ={onChange}
                />
            </label>

          
        </div>
         
    )
}

export default FormField;