/**
 * Method used to fetch data from a given endpoint
 *
 * @param {string} resource_path - resource path to fetch
 * @param {string} sub_resource_path - id for subresource path to fetch
 * @returns {Promise}
 */
export const fetchData = (base_url, resource_path, sub_resource_path) => {
    const RESOURCE = !!sub_resource_path
        ? `${resource_path}/${sub_resource_path}`
        : `${resource_path}`
    const URL_TO_FETCH = `${base_url}/${RESOURCE}`

    return fetch(URL_TO_FETCH)
        .then(response => response.json())
}
