import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-background py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Deja vu CPT Vocal Group
        </h1>
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Experience the magic of harmony with Cape Town's premier vocal ensemble. Our voices blend to create unforgettable musical moments that will leave you spellbound.
        </p>
        <Button size="lg" className="mr-4">Listen Now</Button>
        <Button size="lg" variant="outline">Book Us</Button>
      </div>
    </section>
  );
};

export default Hero;