// required packages
import express from 'express'
import { body, validationResult} from 'express-validator'

import fetchUser from '../middleware/fetchuser.js'
import Tasks from '../models/Tasks.js';

// router regarding sending and getting data from server
const router = express.Router();

// Route 1: Getting the user's task
router.get('/getuserdata',fetchUser,

    async (req,res) => {

        let success = false;

        try{
            const tasks = await Tasks.find({ user: req.user.id });
            if(!tasks || tasks.length == 0) return res.status(400).json({ success, message: "You don't have any task created !"});

            success = true;
            return res.json({ success, tasks });

        } catch(error) {
            console.error(error.message);
            return res.status(500).send("Some error occured from server side !");
        }

    }

)

// Route 2: Creating a user's task
router.post('/createtask',fetchUser,[

    body('title',"You must need to provide a title !").notEmpty(),
    body('description',"Description must be of at least 15 words !").isLength({ min: 15 }),

],  async (req,res) => {

        let success = false;

        try {
            
            const { title, description, category } = req.body;

            if( !title || !description || !category) {
                return res.status(400).json({ success, message: "One or more fields are missing !" })
            }

            // creating the record
            const task = new Tasks({
                user: req.user.id,
                title,
                description,
                category
            })
            
            // saving the record
            const savedTasks = await task.save();
            success = true;
            res.json({ success, savedTasks });

        } catch(error) {
            console.error(error.message);
            return res.status(500).send("Some error occured from server side !");
        }

    }

)

// Route 3: Updating route for user's records
router.post('/updatetask/:id',fetchUser,

    async (req,res) => {

        let success = false;

        try{

            let task = await Tasks.findById(req.params.id);
            if(!task) return res.status(400).json({ success, message: "Task not found !" });
            if(req.user.id !== task.user.toString()) return res.status(400).json({ success, message: "Your're trying to access another user's Task !" });

            // fetching data, in its proper format
            const { title, description, category } = req.body;
            const newTask = {};

            if( !title || !description || !category) {
                return res.status(400).json({ success, message: "One or more fields are missing !" })
            }

            // adding data to new record
            if(title && description && category) {
                newTask.title = title;
                newTask.description = description;
                newTask.category = category;
            }

            // updating data of old record
            task = await Tasks.findByIdAndUpdate(req.params.id,{$set: newTask},{new: true});
            success = true;
            res.json({ success, task });

        } catch(error) {
            console.error(error.message);
            return res.status(500).send("Some error occured from server side !");
        }

    }

)

// Route 4: Deleting a particular task
router.delete('/deletetask/:id',fetchUser,

    async(req,res) => {

        let success = false;

        try{

            let task = await Tasks.findById(req.params.id);
            if(!task) return res.status(400).json({ success, message: "Task not found !" });
            if(req.user.id !== task.user.toString()) return res.status(400).json({ success, message: "Your're trying to access another user's Task !" });

            task = await Tasks.findByIdAndDelete(req.params.id);
            success = true;
            res.json({ success, message: "Task deleted Successfully !" });

        } catch(error) {
            console.error(error.message);
            return res.status(500).send("Some error occured from server side !");
        }

    }

)

// Route 5: Getting all tasks that are available as public
router.get('/publictasks',

    async(req,res) => {

        let success = false;

        try{

            // finding records those are public
            const tasks = await Tasks.find({ category: "public" });
            if(!tasks || tasks.length == 0) return res.status(200).json({ success, tasks: [] });

            success = true;
            res.json({ success, tasks });             // sending available public records

        } catch(error){
            console.error(error.message);
            return res.status(500).send("Some error occured from server side !");
        }

    }

)

// exporting the router
export default router;