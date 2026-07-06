import Header from "@/components/header";
import Footer from "@/components/footer";
import LinksGrid from "@/components/links-grid";

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative w-full border-t border-border">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full py-12 md:py-20 px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Hero Section */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full blur-xl opacity-40"></div>
                  <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    All My Links
                  </h1>
                </div>
              </div>
              <p className="text-foreground/60 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                Find me on every streaming platform and social network. Click any link to connect.
              </p>
            </div>

            {/* Links Grid */}
            <LinksGrid />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

