export default function createListObj(name, id, tasks, selected) {
    return {
        name: name,
        id: id,
        tasks: tasks,
        selected: selected
    }
}