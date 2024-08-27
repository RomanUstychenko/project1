export const getSections = ({sections}) =>(sections.sections)
export const getAllSections = ({sections}) =>(sections.allSections)
export const getMenuOptions = ({sections}) =>(sections.menuOptions)
export const getState = ({sections}) => ({loading: sections.loading, error: sections.error});