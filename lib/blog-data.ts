export const BLOG_POSTS = [
  {
    slug: "oyster-mushroom-cultivation-india",
    title: "The Rise of Oyster Mushroom Cultivation in India: A High-Profit, Low-Cost Agri-Business",
    description: "Discover why Oyster mushroom cultivation is transforming small-scale farmers and urban youth into successful business owners in India with its high-profit and low-cost model.",
    image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
    imageAlt: "Oyster Mushroom Cultivation in India",
    datePublished: "2024-01-10T08:00:00+08:00",
    dateModified: "2024-01-10T08:00:00+08:00",
  },
  {
    slug: "button-mushroom-vs-oyster-mushroom",
    title: "Button Mushroom vs Oyster Mushroom: Which is Better? Complete Guide",
    description: "Detailed comparison of button mushroom and oyster mushroom cultivation, including temperature, humidity, growing period, substrate, yield and farming requirements.",
    image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
    imageAlt: "Button vs Oyster Mushroom",
    datePublished: "2024-01-15T08:00:00+08:00",
    dateModified: "2024-01-15T08:00:00+08:00",
  },
  {
    slug: "oyster-mushroom-cultivation-process",
    title: "Oyster Mushroom Cultivation in India | Complete Guide",
    description: "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
    image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
    imageAlt: "Oyster Mushroom Cultivation Process",
    datePublished: "2024-01-20T08:00:00+08:00",
    dateModified: "2024-01-20T08:00:00+08:00",
  }
];

export async function getBlogPost(slug: string) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
}
