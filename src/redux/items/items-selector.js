export const getItems = ({items}) => items.items;
export const getState = ({items}) => ({loading: items.loading, error: items.error});
export const getFilteredItems = ({filter, items}) => {   
    if (!filter) 
    {return items.items};
};
export const selectItemInfo = state => console.log(state.items.items)

