export const getItems = ({items}) => items.items;
export const getItemsLive = ({items}) => items.itemsLive;
export const getItemsByCategory = ({items}) => ( items.itemsByCategory);
export const getItemUpdate = ({items}) => (items.itemsByCategory);
export const getState = ({items}) => ({loading: items.loading, error: items.error});
export const getFilteredItems = ({filter, items}) => {   
    if (!filter) 
    {return items.items};
};