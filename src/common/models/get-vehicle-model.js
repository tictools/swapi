export const getVehicleModel = (vehicle) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    crew,
    passengers,
    length,
    max_atmosphering_speed,
    vehicle_class,
    films
  } = vehicle

  return {
    header: name,
    model,
    manufacturer,
    cost_in_credits,
    crew,
    passengers,
    length,
    max_atmosphering_speed,
    vehicle_class,
    resourceToFetch: films
  }
}
