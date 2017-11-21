/**
 * Created by victor on 16/11/2017.
 */

const container = `
    <div class="container">
        <h1>EBAVS/ Todo</h1>
        <main></main>
    </div>
`;

const todoBox = `
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <input type="text" class="form-control todo-item" />
        </div>
    </div>
`;

const todoList = `
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h2>Todo List</h2>
                <ul class="list-group item-list">
                    
                </ul>
            </div>
        </div>
`;

const todoItem = (item => ` 
     <li class="list-group-item">
        <span class="glyphicon glyphicon-remove pull-right remove-item" data-id="${item.id}"></span>
        ${item.text}
     </li>
`);

const viewCollection = {
    container,
    todoBox,
    todoList,
    todoItem,
};
export default viewCollection;
