
export const collectionFactory = () =>{
    const arr = new Array();
    const addItem = (item) => arr.push(item);
    const deleteItem = (toDoItemName) => {
        let index = arr.findIndex(item =>{
            item.getName() == toDoItem.getName(); 
        });
        return index;
    };

    return {arr, addItem, deleteItem};
}