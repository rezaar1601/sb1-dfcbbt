import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Mic, Users } from 'lucide-react';

const services = [
  {
    title: 'Live Performances',
    description: 'Captivating live shows for events of all sizes.',
    icon: Mic,
  },
  {
    title: 'Studio Recordings',
    description: 'Professional studio recordings for albums and collaborations.',
    icon: Music,
  },
  {
    title: 'Vocal Workshops',
    description: 'Educational workshops to inspire and train aspiring vocalists.',
    icon: Users,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;