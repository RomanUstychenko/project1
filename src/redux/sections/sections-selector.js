export const getSections = ({sections}) =>(sections.sections)
export const getSectionsLive = ({sectionsLive}) => ( sectionsLive.sections)
export const getState = ({sections}) => ({loading: sections.loading, error: sections.error});