const projects = [
  {
    id: 1,
    thumbnail: "/images/word.webp",
    title: "Word Master",
    description:
      "This is my version of the popular Wordle game, built with vanilla JavaScript. In this interactive game, users need to guess a secret 5-letter word within a limited number of attempts. <br > Each guess provides feedback on the correctness of the letters and their positions, guiding players toward the solution, users can play multiple rounds with different words, not just the word of the day.",
    repository: "https://github.com/Orliland/word_master",
    live: "https://orliland.github.io/word_master/",
  },
  {
    id: 2,
    thumbnail: "/images/cart.webp",
    title: "Product list with cart",
    description:
      "An interactive project where users can add and remove products, adjust quantities, confirm orders, and reset their selections. The data is persisted using localStorage, built with React and Tailwind CSS, the design is fully responsive and optimized for different devices.",
    repository: "https://github.com/Orliland/product_list_with_cart",
    live: "https://product-list-with-cart-psi-seven.vercel.app/",
  },
  {
    id: 3,
    thumbnail: "/images/tracking.webp",
    title: "IP address tracker",
    description:
      "A web app that allows users to track the location of any IP address or domain. It displays key information such as location, timezone, and ISP, alongside an interactive map. Built with React, Tailwind CSS, React Leaflet and the IPify Geolocation API, it ensures a responsive and seamless experience across devices.",
    repository: "https://github.com/Orliland/ip-address-tracker",
    live: "https://ip-address-tracker-c7t.pages.dev/",
  },
];

export default projects;
