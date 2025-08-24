import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, BarChart3, Shield, Workflow, Clock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance that keeps your team moving forward without delays.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools that bring your team together, no matter where they are.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights and reporting to help you make data-driven decisions and track progress.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption to keep your data safe and compliant.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Smart automation that eliminates repetitive tasks and streamlines your processes.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Built-in time tracking and project management tools to keep everything on schedule.",
  },
]

export function ProductHighlights() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help teams work smarter, not harder. From collaboration to analytics, we've
            got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
