const Todo = require('../models/Todo');

// get all todos..

const getTodos = async( req , res ) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'error while fetching all todos', error })
    }
}

// add new task in todo..

const createTodo = async ( req , res) => {
    try {
        const {text} = req.body;
        if(!text){
            res.status(400).json({ message: 'text is required' })
        }
        const newTodo = new Todo({text});
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message:'error while creating todo', error })
    }
}

// update Todo...

const updateTodo = async( req , res ) => {
    const {id} = req.params;
    const {done} = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {done},
            {new: true}
        );
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).json({ message: 'Error while updating', error });
    }
};

//Delete todo..

const deleteTodo = async ( req , res ) => {
    try {
        const {id} = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if(!deletedTodo){
            res.status(404).json({ message: "Todo not found" })
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error while deleting todo" })
    }
};

module.exports = { getTodos , createTodo, updateTodo , deleteTodo }