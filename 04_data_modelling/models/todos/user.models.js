import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    validate:{  
      validator:(value)=>{
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
      },
      message:(props)=>{
        return props.value + ' is not a valid email address';
      }
    }
  },
  password:{
    type:String,
    required:true,
  },
},{timestamps:true}
)

export const User = mongoose.model('User', userSchema)