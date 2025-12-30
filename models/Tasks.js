// importing mongoose
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({ 

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true
    }

})

// exporting the schema
const Tasks = mongoose.model('Tasks',taskSchema);
export default Tasks;