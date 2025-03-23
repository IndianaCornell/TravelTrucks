const filteredTrucks = (trucks, filters) =>
  (trucks?.items || []).filter((truck) => {
    if (
      filters.query &&
      !truck.location.toLowerCase().includes(filters.query.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.vehicleType.length > 0 &&
      !filters.vehicleType.includes(truck.form)
    ) {
      return false;
    }

    if (
      filters.equipment.length > 0 &&
      !filters.equipment.every((eq) => truck[eq] === true)
    ) {
      return false;
    }

    return true;
  });

export default filteredTrucks;
