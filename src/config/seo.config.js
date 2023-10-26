const SITE_NAME = 'JS Bank'
export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}`
}
