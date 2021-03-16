export const getFilmModel = (film) => {
    const {
        title,
        episode_id,
        opening_crawl,
        director,
        release_date,
        characters
    } = film

    return {
        title,
        episode_id,
        opening_crawl,
        director,
        release_date,
        resourceToFetch: characters
    }
}
