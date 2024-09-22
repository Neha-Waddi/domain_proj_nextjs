import mongoose,{ Schema ,models} from "mongoose";


const userCredentialsSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
    },
    password:{
      type:String,
      required:true,
    },
    domainName:{
      type:String,
      required:true,
    },
    url:{
      type:String
    },
  },
  { timestamps: true }
);
const UserCredentials = mongoose.models.UserCredentials || mongoose.model("UserCredentials", userCredentialsSchema);
export default UserCredentials;
