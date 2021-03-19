export const getStarshipModel = (starship) => {
  const {
    name,
    model,
    manufacturer,
    crew,
    passengers,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    hyperdrive_rating,
    starship_class,
    films
  } = starship

  return {
    header: name,
    model,
    manufacturer,
    crew,
    passengers,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    hyperdrive_rating,
    starship_class,
    resourceToFetch: films
  }
}
