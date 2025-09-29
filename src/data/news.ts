import type { NewsArticle } from "./types";

export const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    title: "Cairo Contemporary Art Fair Announces 2025 Edition",
    author: "Sarah Mitchell",
    date: "2024-12-15",
    category: "Art Fair",
    excerpt:
      "The Cairo Contemporary Art Fair returns for its 10th edition, featuring over 50 galleries from across the MENA region.",
    content: `
      <p>The Cairo Contemporary Art Fair (CCAF) has announced its 2025 edition, scheduled to take place from March 15-20 at the newly renovated Cairo Expo City. This milestone 10th edition promises to be the most ambitious yet, featuring over 50 galleries from across the Middle East, North Africa, and beyond.</p>

      <p>Fair director Layla Mahmoud expressed excitement about the upcoming edition: "This year, we're celebrating a decade of supporting contemporary art in the region. We've curated a program that reflects both the rich heritage and dynamic future of Middle Eastern art."</p>

      <p>Highlights include a special pavilion dedicated to emerging artists under 35, a sculpture park featuring monumental works, and a series of talks addressing the role of art in social change. The fair will also introduce a digital art section for the first time, recognizing the growing importance of new media in contemporary practice.</p>

      <p>International collectors and curators are expected to attend, with the fair serving as a crucial platform for regional artists to gain global recognition. Early bird tickets are now available through the official website.</p>
    `,
    imageUrl: "/images/news/news-1.jpg",
    tags: ["Art Fair", "Cairo", "Contemporary Art", "MENA Region"],
  },
  {
    id: "news-2",
    title: "Dubai Artist Wins Venice Biennale Golden Lion",
    author: "Ahmed Rahman",
    date: "2024-12-10",
    category: "Awards",
    excerpt:
      "Fatima Al-Rashid becomes the first Arab artist to win the prestigious Golden Lion award at the Venice Biennale.",
    content: `
      <p>In a historic moment for Middle Eastern art, Dubai-based artist Fatima Al-Rashid has been awarded the Golden Lion at the 60th Venice Biennale, becoming the first Arab artist to receive this prestigious honor.</p>

      <p>Al-Rashid's installation, "Displaced Memories," uses found objects and personal artifacts to explore themes of migration and belonging. The jury praised the work for its "powerful commentary on contemporary displacement while maintaining deep personal resonance."</p>

      <p>The artist dedicated the award to "all displaced peoples and those working to preserve cultural memory in times of upheaval." Her win has been celebrated across the Arab art world as a breakthrough moment for regional contemporary art.</p>

      <p>Following the announcement, several major museums have expressed interest in acquiring Al-Rashid's works, with retrospectives planned in New York and London for 2026.</p>
    `,
    imageUrl: "/images/news/news-2.jpg",
    tags: ["Venice Biennale", "Awards", "Fatima Al-Rashid", "Contemporary Art"],
  },
  {
    id: "news-3",
    title: "New Digital Art Museum Opens in Riyadh",
    author: "Maria Torres",
    date: "2024-12-05",
    category: "Museum",
    excerpt:
      "Saudi Arabia unveils the regions first dedicated digital art museum, featuring immersive installations and NFT galleries.",
    content: `
      <p>Riyadh has unveiled the Middle East's first museum dedicated exclusively to digital art, marking a significant milestone in the region's cultural development. The 10,000 square meter facility features state-of-the-art projection systems, VR experiences, and dedicated NFT galleries.</p>

      <p>The museum's opening exhibition, "Pixels and Patterns," showcases works by leading digital artists from across the GCC, including Omar Khaled's algorithmic interpretations of Islamic geometry and interactive installations that respond to visitor movement.</p>

      <p>Museum director Dr. Khalid Al-Saud emphasized the institution's educational mission: "We're not just displaying digital art; we're creating a space where visitors can understand and engage with the technologies shaping contemporary artistic practice."</p>

      <p>The museum will also house a digital art lab where local artists can access cutting-edge technology and participate in international collaborations through virtual residencies.</p>
    `,
    imageUrl: "/images/news/news-3.jpg",
    tags: ["Museum", "Digital Art", "Riyadh", "Technology"],
  },
  {
    id: "news-4",
    title: "Beirut Gallery Scene Shows Resilience Despite Challenges",
    author: "Jean-Paul Khoury",
    date: "2024-11-28",
    category: "Gallery",
    excerpt:
      "Beirut's contemporary art galleries continue to thrive, organizing innovative exhibitions that address current realities.",
    content: `
      <p>Despite ongoing economic challenges, Beirut's contemporary art scene continues to demonstrate remarkable resilience. Galleries across the city have adapted with innovative programming, including pop-up exhibitions, artist talks, and collaborative projects that address the city's current realities.</p>

      <p>Beirut Contemporary gallery recently opened "Acts of Resistance," featuring works by Lebanese artists who explore themes of survival and hope. Gallery director Rania Matar notes: "Art has always been a form of resistance in Beirut. Our artists are documenting this moment while imagining possible futures."</p>

      <p>International support has been crucial, with partnerships from European and American institutions helping to sustain local galleries. Virtual exhibitions have also expanded audiences, connecting Beirut's art scene with global collectors unable to visit in person.</p>

      <p>The upcoming Beirut Art Week in February 2025 promises to showcase this resilience, with over 20 galleries participating in a city-wide celebration of contemporary creativity.</p>
    `,
    imageUrl: "/images/news/news-4.jpg",
    tags: ["Beirut", "Galleries", "Contemporary Art", "Resilience"],
  },
  {
    id: "news-5",
    title: "Morocco Pavilion Announced for 2025 Venice Biennale",
    author: "Yasmin Benali",
    date: "2024-11-20",
    category: "International",
    excerpt:
      "Morocco reveals plans for its national pavilion at the 2025 Venice Biennale, featuring sculptor Layla Benali.",
    content: `
      <p>The Moroccan Ministry of Culture has announced that renowned sculptor Layla Benali will represent the country at the 2025 Venice Biennale. This marks Morocco's continued commitment to showcasing contemporary Moroccan art on the international stage.</p>

      <p>Benali's proposed installation, "Atlas Rising," will transform the Moroccan pavilion into an immersive environment exploring the relationship between ancient traditions and contemporary expression. The work will feature large-scale sculptures created using traditional Moroccan crafts techniques combined with modern materials.</p>

      <p>Curator Abdel Kader Damani expressed enthusiasm for the project: "Layla's work perfectly embodies Morocco's position at the crossroads of Africa, the Arab world, and Europe. Her installation will offer visitors a profound meditation on cultural identity in our globalized world."</p>

      <p>The announcement has generated significant interest in Moroccan contemporary art, with several of Benali's works already being acquired by major international collections ahead of the Biennale.</p>
    `,
    imageUrl: "/images/news/news-5.jpg",
    tags: ["Venice Biennale", "Morocco", "Sculpture", "International"],
  },
];
