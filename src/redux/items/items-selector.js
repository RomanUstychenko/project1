export const getItems = ({items}) => items.items;
export const getItemsLive = ({items}) => items.itemsLive;
export const isLive = ({items}) => items.isLive;
export const imgSaved = ({items}) => (items.imgSaved);
export const getItemsByCategory = ({items}) => ( items.itemsByCategory);
export const getItemUpdate = ({items}) => (items.itemsByCategory);
export const getState = ({items}) => ({loading: items.loading, error: items.error});
// export const itemLoading = ({items}) => (console.log(items), {loading: items.loading});
export const getFilteredItems = ({filter, items}) => {   
    if (!filter) 
    {return items.items};
};