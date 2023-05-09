export const getSections = ({sections}) => (console.log(sections.sections), sections.sections)
export const getSectionsLive = ({sectionsLive}) => (console.log(sectionsLive.sections), sectionsLive.sections)
export const getState = ({sections}) => ({loading: sections.loading, error: sections.error});