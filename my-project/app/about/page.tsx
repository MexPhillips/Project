import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TIMELINE = [
  { year: "2020", title: "Founded", description: "Handcrafted Haven launches with 50 founding artisans in Portland, Oregon." },
  { year: "2021", title: "1,000 Sellers", description: "We reach our first thousand artisan shops and expand internationally." },
  { year: "2022", title: "$1M Milestone", description: "Over one million dollars channeled directly to independent creators." },
  { year: "2023", title: "Community Hub", description: "Blog, forums, and seller education programs launch." },
  { year: "2024", title: "Global Growth", description: "2,500+ artisans, 50,000 customers, and $5M+ in creator revenue." },
];

const TEAM = [
  { name: "Emma Wilson", role: "Founder & CEO", expertise: "E-commerce strategist, former ceramic artist", emoji: "👩‍💼" },
  { name: "James Park", role: "CTO", expertise: "Full-stack developer, marketplace architect", emoji: "👨‍💻" },
  { name: "Lisa Martinez", role: "Head of Community", expertise: "Community builder, artisan advocate", emoji: "👩‍🎨" },
  { name: "David Okonkwo", role: "Head of Seller Success", expertise: "Small business coach, former Etsy seller", emoji: "👨‍🏫" },
  { name: "Anna Kowalski", role: "Creative Director", expertise: "Brand designer, craft enthusiast", emoji: "👩‍🎤" },
  { name: "Michael Torres", role: "Operations Lead", expertise: "Logistics expert, sustainability advocate", emoji: "👨‍🔧" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="about" />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Handcrafted Haven</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are on a mission to revolutionize how handcrafted items are discovered, appreciated, and acquired. By providing a digital platform for artisans to showcase their creativity, we foster a thriving community of passionate creators and conscious consumers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Handcrafted Haven was born from a simple belief: handmade items have soul. Each product tells a story of dedication, skill, and passion. We noticed that talented artisans struggled to reach customers who would truly appreciate their work, while consumers were overwhelmed by mass-produced alternatives.</p>
            <p>We created Handcrafted Haven as a bridge between these two worlds. Our platform celebrates the beauty of craftsmanship and supports local creators in building sustainable businesses. We believe in quality over quantity, authenticity over mass production, and community over competition.</p>
            <p>Since our launch in 2020, we&apos;ve connected over 2,500 artisans with 50,000 satisfied customers worldwide. Together, we&apos;ve channeled over $5 million directly to independent creators, supporting their dreams and livelihoods.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
          <div className="space-y-6">
            {TIMELINE.map((item) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">{item.year}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Authenticity", desc: "Genuine craftsmanship and direct creator-to-consumer relationships." },
              { title: "Sustainability", desc: "Eco-conscious practices and support for environmentally responsible artisans." },
              { title: "Community", desc: "A supportive ecosystem where creators and collectors inspire each other." },
              { title: "Quality", desc: "Rigorous standards ensuring only the finest handcrafted items reach our marketplace." },
              { title: "Empowerment", desc: "Tools, education, and resources to turn passion into thriving businesses." },
              { title: "Transparency", desc: "Complete transparency in fees, processes, and creator support." },
            ].map((v) => (
              <div key={v.title} className="border-l-4 border-amber-700 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">To empower artisans worldwide by providing a trusted digital marketplace where authentic creations are celebrated, valued, and accessible to customers who appreciate handmade excellence.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">A world where handcrafted items are the preferred choice for conscious consumers, where artisans thrive through creativity, and human skill is recognized and rewarded.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2,500+", label: "Active Artisans" },
              { value: "15,000+", label: "Products Listed" },
              { value: "50,000+", label: "Happy Customers" },
              { value: "$5M+", label: "Creator Revenue" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-4xl font-bold text-amber-700 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-700 to-orange-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-8 text-amber-50">Whether you&apos;re an artisan or collector, there&apos;s a place for you here</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50">Explore Marketplace</Link>
            <Link href="/auth/signup" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10">Become a Seller</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
