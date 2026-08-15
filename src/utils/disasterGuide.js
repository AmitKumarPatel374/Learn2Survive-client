const disasterGuideMap = {
  flood: [
    "flood",
    "heavy rain",
    "very heavy rain",
    "extremely heavy rain",
    "moderate rain",
  ],

  "urban-flood": [
    "urban flood",
    "urban flooding",
  ],

  lightning: [
    "lightning",
  ],

  thunderstorm: [
    "thunderstorm",
    "thunderstorms",
  ],

  cyclone: [
    "cyclone",
  ],

  earthquake: [
    "earthquake",
  ],

  landslide: [
    "landslide",
  ],

  "heat-wave": [
    "heat wave",
    "heatwave",
  ],

  "cold-wave": [
    "cold wave",
    "coldwave",
  ],
}

export const getSafetyGuideSlug = (event) => {
  if (!event) return null

  const normalizedEvent = event.trim().toLowerCase()

  for (const [slug, events] of Object.entries(disasterGuideMap)) {
    if (events.includes(normalizedEvent)) {
      return slug
    }
  }

  return null
}