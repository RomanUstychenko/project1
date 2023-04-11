export const getContacts = ({contacts}) => contacts.items;
export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});
export const getFilteredContacts = ({filter, contacts}) => {   
    if (!filter) 
    {return contacts.items};
};