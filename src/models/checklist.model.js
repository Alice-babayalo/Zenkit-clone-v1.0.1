import mongoose from 'mongoose';
const checklistModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    completed:{
        type: Boolean, 
        default: false
    }
});

const checkList = mongoose.model('checkList', checklistModel)


export default checkList;
/*
The system shall allow a user to add an array of activities to be executed for the task to be completed. These are what is often known as a checklist.
A checklist activity should be capable of being marked as complete
*/