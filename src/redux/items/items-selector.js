export const getItems = ({items}) => items.items;
export const getItemsByCategory = ({items}) => (console.log(items.itemsByCategory), items.itemsByCategory);
export const getItemUpdate = ({items}) => (items.itemsByCategory);
export const getState = ({items}) => ({loading: items.loading, error: items.error});
export const getFilteredItems = ({filter, items}) => {   
    if (!filter) 
    {return items.items};
};