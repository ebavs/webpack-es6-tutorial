/**
 * Created by victor on 16/11/2017.
 */

export default class Controller {
    /**
     * @param {!$} jq jQuery
     * @param {!viewCollection} vc viewCollection array
     */
    constructor(jq, vc) {
        this.jquery = jq;
        this.views = vc;
        this.itemList = [];
    }

    initViews() {
        // add container to page
        const container = this.jquery(this.views.container);
        this.jquery('body').html(container);

        // insert box
        this.jquery(this.views.todoBox).appendTo('main');
        // insert List
        this.jquery(this.views.todoList).appendTo('main');
    }

    /**
     * @param {!event} e jQuery event
     */
    addItem(e) {
        // only act if we press enter and input isn't empty
        if (e.keyCode === 13 && e.target.value) {
            // store this instance
            const me = this;
            // we get array lenght to use as new id
            const index = this.itemList.length;
            // creating todo
            const item = {
                id: index,
                text: e.target.value,
            };
            // add todo to item list
            this.itemList.push(item);
            e.target.value = '';
            // add element to dom and bind to event
            this.jquery('.item-list').append(this.jquery(this.views.todoItem(item)).on('click', event => (me.removeItem(event))));
        }
    }

    removeItem(elem) {
        // get id from span element
        const id = this.jquery(elem.target).data('id');
        // search for index in list
        const index = this.itemList.findIndex(i => parseInt(i.id, 0) === parseInt(id, 0));
        // remove todo in list
        this.itemList.splice(index, 1);
        // remove element in dom
        this.jquery(elem.target).parent('li').remove();
    }

    bindEvents() {
        // we can do better but is a simple tutorial to understand webpack and es6
        const me = this;
        this.jquery('.todo-item').on('keypress', e => (me.addItem(e)));
    }

    start() {
        this.initViews();
        this.bindEvents();
    }
}
