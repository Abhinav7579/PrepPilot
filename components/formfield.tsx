import React from 'react'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Controller,FieldValues,Path,Control } from 'react-hook-form'
interface FormFieldProp<T extends FieldValues>{
  control:Control<T>;
  name:Path<T>;
  label:string;
  placeholder?:string;
  type?:'text'| 'email' | 'password';

}

const Formfield =<T extends FieldValues> ({ control, name, label,placeholder, type="text"  }:FormFieldProp<T>) => {
  return (
      <Controller name={name} control={control} render={({field})=>(
        <FormItem>
          <FormLabel className='label'>{label}</FormLabel>
          <FormControl>
            <Input type={type}  className='input' placeholder={placeholder} {...field} />
          </FormControl>
         
          <FormMessage />
        </FormItem>

      )} 
      />
        
      )}
   

export default Formfield
