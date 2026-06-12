import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, BLOG_ARTICLES } from "@/lib/data";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = BLOG_ARTICLES.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Header active="blog" />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-amber-700 hover:text-amber-800 mb-6 inline-block">← Back to Blog</Link>

        <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-8xl mb-8">
          {article.image}
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">{article.category}</span>
          <span className="text-gray-500 text-sm">{article.readTime}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-8">By {article.author} · {article.date}</p>

        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>
          ))}
        </div>

        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((a) => (
                <Link key={a.id} href={`/blog/${a.slug}`}>
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-amber-700 transition-colors">
                    <span className="text-3xl">{a.image}</span>
                    <h3 className="font-bold text-gray-900 mt-2">{a.title}</h3>
                    <p className="text-sm text-gray-500">{a.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
