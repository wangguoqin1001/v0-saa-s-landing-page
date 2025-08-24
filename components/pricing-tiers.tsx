import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "Basic project management", "10GB storage", "Email support", "Basic analytics"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 25 team members",
      "Advanced project management",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom workflows",
      "Time tracking",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "Enterprise project management",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom analytics",
      "Advanced security",
      "SSO integration",
      "Custom integrations",
      "Dedicated account manager",
    ],
    popular: false,
  },
]

export function PricingTiers() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-xl scale-105" : "border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom plan?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
