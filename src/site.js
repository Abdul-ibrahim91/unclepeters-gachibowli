// ---------------------------------------------------------------------------
// Single place to edit the outlet's real details.
// Replace the phone number, WhatsApp number and street address before launch,
// and mirror the same values in the JSON-LD block inside index.html.
// ---------------------------------------------------------------------------

export const site = {
  name: "Uncle Peter's Pancakes",
  area: 'Gachibowli',
  city: 'Hyderabad',

  // TODO: replace with the outlet's real number
  phoneDisplay: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',

  // TODO: replace with the outlet's real WhatsApp number (country code, no +)
  whatsappNumber: '919000000000',
  whatsappText:
    "Hi Uncle Peter's Pancakes, Gachibowli — I'd like to place an order for pickup/delivery.",

  rating: 4.6,
  reviewCount: 134,

  // Opening hours in 24h, closing after midnight is written as 25 = 1 AM
  opensHour: 9,
  closesHour: 25,

  addressLines: ['Plot 00, Gachibowli Main Road', 'Gachibowli, Hyderabad 500032'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Uncle+Peters+Pancakes+Gachibowli+Hyderabad',
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Uncle+Peters+Pancakes+Gachibowli+Hyderabad',
}

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappText,
)}`

export const pancakes = [
  {
    name: 'Classic Buttermilk Stack',
    detail: 'Five pancakes, salted butter, warm maple syrup',
    price: 269,
    tags: ['Most ordered'],
  },
  {
    name: 'Dark Chocolate Lava Stack',
    detail: 'Cocoa pancakes, molten centre, cacao nibs',
    price: 329,
  },
  {
    name: 'Gluten-Free Oat Stack',
    detail: 'Oat and almond flour, banana, honey, toasted seeds',
    price: 339,
    tags: ['Gluten-free'],
  },
  {
    name: 'Biscoff Cheesecake Stack',
    detail: 'Speculoos crumb, baked cheesecake cream, caramel drizzle',
    price: 349,
  },
  {
    name: 'Red Velvet Stack',
    detail: 'Beetroot-cocoa batter, cream cheese frosting, white chocolate',
    price: 319,
    tags: ['Eggless'],
  },
]

export const waffles = [
  {
    name: 'Liège Sugar Waffle',
    detail: 'Pearl-sugar dough, caramelised crust, vanilla cream',
    price: 299,
  },
  {
    name: 'Tiramisu Waffle',
    detail: 'Espresso-soaked waffle, mascarpone, cocoa dust',
    price: 359,
  },
  {
    name: 'Nutella Hazelnut Waffle',
    detail: 'Warm Nutella pour, roasted hazelnuts, sea salt',
    price: 329,
  },
  {
    name: 'Gluten-Free Buckwheat Waffle',
    detail: 'Buckwheat batter, blueberry compote, maple butter',
    price: 349,
    tags: ['Gluten-free'],
  },
]

export const sides = [
  { name: 'Filter Coffee Cold Brew', detail: 'Chicory cold brew, 14-hour steep', price: 189 },
  { name: 'Belgian Hot Chocolate', detail: '58% dark chocolate, steamed milk', price: 219 },
  { name: 'Banana Date Shake', detail: 'No refined sugar, toasted walnut', price: 229 },
]

export const reviews = [
  {
    quote:
      'The buttermilk stack actually jiggles when the plate lands. Four of us came at midnight and the kitchen was still going strong.',
    author: 'Sravanthi R.',
    context: 'Google review',
    stars: 5,
  },
  {
    quote:
      'I am coeliac and I have never been able to order pancakes out. The oat stack came out on a separate griddle and tasted better than the regular one.',
    author: 'Imran K.',
    context: 'Google review',
    stars: 5,
  },
  {
    quote:
      'Our post-shift spot. Walk in at 12:30 AM from the Financial District and the waffles are still fresh off the iron.',
    author: 'Divya M.',
    context: 'Google review',
    stars: 4,
  },
]

// The hero showcase card pulls straight from the board above, so prices never drift.
const byName = (list, needle) => list.find((item) => item.name.includes(needle))

export const showcase = {
  featured: byName(pancakes, 'Dark Chocolate Lava'),
  alsoTonight: [byName(waffles, 'Sugar Waffle'), byName(pancakes, 'Gluten-Free Oat')],
}

// Photograph behind the hero showcase card.
// Swap for a shot of the real counter when you have one: drop it in public/ and
// set src to '/hero-stack.jpg'. Current image is free under the Unsplash License
// (Chad Montano) — attribution is not required but is appreciated.
export const heroPhoto = {
  src: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&w=900&q=80',
  credit: {
    name: 'Chad Montano',
    url: 'https://unsplash.com/photos/person-pouring-syrup-on-pancake-gf9777gaYjs',
  },
}
