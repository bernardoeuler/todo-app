export default function createListObj(name, id, tasks, selected) {
    return {
        listName: name,
        listId: id,
        listTasks: tasks,
        selected: selected
    }
}