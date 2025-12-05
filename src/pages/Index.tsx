import SparkleEffect from "@/components/SparkleEffect";

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Abstract Blur Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary blob */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 animate-float-1 animate-pulse-glow"
          style={{ filter: 'blur(80px)' }}
        />
        {/* Secondary blob */}
        <div 
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/40 animate-float-2 animate-pulse-glow"
          style={{ filter: 'blur(100px)' }}
        />
        {/* Accent blob */}
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-chart-1/25 animate-float-3 animate-pulse-glow"
          style={{ filter: 'blur(90px)' }}
        />
        {/* Additional subtle blob */}
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-chart-2/20 animate-float-1"
          style={{ filter: 'blur(120px)', animationDelay: '-10s' }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Sparkle Effect */}
      <SparkleEffect />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Coming Soon Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-shine animate-fade-in-up">
            COMING SOON
          </h1>

          {/* Description */}
          <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up-delay-1">
            Website sedang dalam tahap pengembangan.
            <br />
            Harap bersabar ygy hehe :)
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center animate-fade-in-up-delay-2">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center animate-fade-in-up-delay-2">
        <p className="text-sm text-muted-foreground/70">
          © {currentYear} XzeelArcadia. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
