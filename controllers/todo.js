let tasks = [];

//@desc get todo list
//@route GET /todo
export const getTodo = (req, res) => {
    res.render('todolist',{tasks});
};

//@desc add todo
//@route POST /add
export const addTodo = (req, res) => {
    const todo = req.body.task;
    tasks.push(todo);
    res.redirect('/todo');
};

//@desc delete todo
//@route POST /delete
export const deleteTodo = (req, res) => {
    const index = req.body.index;
    tasks.pop(index);
    res.redirect('/todo');
}