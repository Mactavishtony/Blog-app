import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Gopalakrishnan:Mactavishtony@cluster0.kr3dp.mongodb.net/');
    console.log("DB Connected");
}
