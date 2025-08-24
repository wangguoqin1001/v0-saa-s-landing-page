import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams who have already revolutionized their productivity. Start your free trial today and
            experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="text-sm opacity-75">No credit card required • 14-day free trial • Cancel anytime</div>
        </div>
      </div>
    </section>
  )
}
