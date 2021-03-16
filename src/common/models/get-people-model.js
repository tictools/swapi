export const getPeopleModel = (people) => {
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        films
    } = people

    return {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        resourceToFetch: films
    }
}
