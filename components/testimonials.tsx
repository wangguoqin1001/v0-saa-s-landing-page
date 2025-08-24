import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    content:
      "FlowSync has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    company: "InnovateLabs",
    content:
      "The automated workflows and real-time collaboration features are game-changers. We've reduced project delivery time by 30% since switching to FlowSync.",
    rating: 5,
    avatar: "/professional-bearded-man.png",
  },
  {
    name: "Emily Watson",
    role: "Operations Director",
    company: "GrowthCorp",
    content:
      "Outstanding platform with exceptional support. The analytics dashboard gives us insights we never had before, helping us make better decisions.",
    rating: 5,
    avatar: "/professional-woman-glasses.png",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    company: "NextGen Solutions",
    content:
      "As a growing startup, FlowSync scales perfectly with our needs. The pricing is fair and the features are exactly what we need to stay organized.",
    rating: 5,
    avatar: "/young-professional-man.png",
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    company: "Creative Agency",
    content:
      "The time tracking and project management tools are incredibly intuitive. Our clients love the transparency and we love the efficiency.",
    rating: 5,
    avatar: "/professional-woman-short-hair.png",
  },
  {
    name: "Alex Johnson",
    role: "CTO",
    company: "DataDriven Co.",
    content:
      "Security and performance are top-notch. FlowSync handles our enterprise needs while remaining user-friendly for the entire team.",
    rating: 5,
    avatar: "/professional-man-suit.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Loved by teams worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams who have transformed their workflow with FlowSync. Here's what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
