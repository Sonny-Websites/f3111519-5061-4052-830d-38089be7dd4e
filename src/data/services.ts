export interface ServiceItem {
  name: string;
  slug: string;
  shortDescription: string;
  overview: string[];
  checklist: string[];
  pricing: string[];
  metaDescription: string;
}

export const services: ServiceItem[] = [
  {
    name: 'Residential Cleaning',
    slug: 'residential-cleaning',
    shortDescription: 'Placeholder: One-line description for Residential Cleaning.',
    overview: [
      'We provide reliable residential cleaning services for houses, apartments, and condos with careful attention to each room.',
      'Our team handles kitchens, bathrooms, bedrooms, and living spaces on recurring or one-time schedules based on your needs.',
      'Every visit follows a consistent process so your home stays fresh, organized, and comfortable.'
    ],
    checklist: [
      'Dusting and wiping surfaces in living areas and bedrooms',
      'Kitchen cleaning including counters, stovetop, and exterior appliances',
      'Bathroom cleaning including sinks, toilets, mirrors, and showers',
      'Vacuuming carpets and mopping hard floors'
    ],
    pricing: [
      'Pricing placeholder - enter your rates here.',
      'Studio / 1 BR - $XX',
      '2 BR - $XX',
      '3+ BR - $XX'
    ],
    metaDescription: 'Placeholder: Residential cleaning page description for SEO.'
  },
  {
    name: 'Commercial Cleaning',
    slug: 'commercial-cleaning',
    shortDescription: 'Placeholder: One-line description for Commercial Cleaning.',
    overview: [
      'We offer dependable commercial cleaning for offices, retail spaces, and small business facilities.',
      'Service plans can be scheduled daily, weekly, or custom to support your operations and traffic levels.',
      'Our cleaners focus on presentation and sanitation so staff and visitors experience a consistently clean environment.'
    ],
    checklist: [
      'Workstation and shared surface dusting/wipe-down',
      'Restroom sanitation and restocking checks',
      'Breakroom and kitchen area cleaning',
      'Trash removal and floor vacuum/mop service'
    ],
    pricing: [
      'Pricing placeholder - enter your rates here.',
      'Small office (up to 1,500 sq ft) - $XX',
      'Medium office (1,500-3,000 sq ft) - $XX',
      'Contact for pricing on custom scopes'
    ],
    metaDescription: 'Placeholder: Commercial cleaning page description for SEO.'
  },
  {
    name: 'Deep Cleaning',
    slug: 'deep-cleaning',
    shortDescription: 'Placeholder: One-line description for Deep Cleaning.',
    overview: [
      'Our deep cleaning service is designed for spaces that need extra detail beyond routine maintenance.',
      'We target buildup, hard-to-reach areas, and high-touch surfaces with a methodical room-by-room approach.',
      'This service is ideal for seasonal resets, first-time visits, or homes that have not been professionally cleaned recently.'
    ],
    checklist: [
      'Detailed dust removal including baseboards and trim',
      'Thorough kitchen degreasing and cabinet exterior wipe-down',
      'Bathroom deep scrub including tile and grout focus areas',
      'Interior spot-cleaning of doors, frames, and high-touch points'
    ],
    pricing: [
      'Pricing placeholder - enter your rates here.',
      'Studio / 1 BR Deep Clean - $XX',
      '2 BR Deep Clean - $XX',
      '3+ BR Deep Clean - $XX'
    ],
    metaDescription: 'Placeholder: Deep cleaning page description for SEO.'
  },
  {
    name: 'Move-In / Move-Out Cleaning',
    slug: 'move-cleaning',
    shortDescription: 'Placeholder: One-line description for Move-In / Move-Out Cleaning.',
    overview: [
      'We deliver move-in and move-out cleaning to help prepare properties for handoff, listing, or a fresh start.',
      'Our checklist is built for empty or near-empty spaces and focuses on details that matter during transitions.',
      'Landlords, tenants, and homeowners use this service to reduce stress and improve property presentation.'
    ],
    checklist: [
      'Inside cabinets, drawers, and closet shelf wipe-down',
      'Appliance exterior cleaning and interior spot cleaning as requested',
      'Bathroom, kitchen, and floor detailing throughout the property',
      'Final touch-up on switches, handles, and frequently used surfaces'
    ],
    pricing: [
      'Pricing placeholder - enter your rates here.',
      '1 BR Move Clean - $XX',
      '2 BR Move Clean - $XX',
      '3+ BR Move Clean - $XX'
    ],
    metaDescription: 'Placeholder: Move cleaning page description for SEO.'
  },
  {
    name: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    shortDescription: 'Placeholder: One-line description for Carpet Cleaning.',
    overview: [
      'We provide carpet cleaning service for homes and businesses to refresh high-traffic areas and improve appearance.',
      'Our process helps lift embedded dirt and address routine stains while supporting a cleaner indoor environment.',
      'Appointments are available as standalone visits or as part of broader cleaning service plans.'
    ],
    checklist: [
      'Pre-inspection of carpet condition and traffic patterns',
      'Targeted treatment of common spots and stained areas',
      'Full-area carpet cleaning for selected rooms',
      'Post-service walkthrough and care recommendations'
    ],
    pricing: [
      'Pricing placeholder - enter your rates here.',
      'Single room - $XX',
      '2-3 rooms - $XX',
      'Whole home package - $XX'
    ],
    metaDescription: 'Placeholder: Carpet cleaning page description for SEO.'
  }
];
