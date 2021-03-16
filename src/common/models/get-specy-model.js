export const getSpecyModel = (specy) => {
    const {
        name,
        classification,
        designation,
        average_height,
        skin_colors,
        hair_colors,
        eye_colors,
        average_lifespan,
        language,
        films
    } = specy

    return {
        name,
        classification,
        designation,
        average_height,
        skin_colors,
        hair_colors,
        eye_colors,
        average_lifespan,
        language,
        resourceToFetch: films
    }
}
