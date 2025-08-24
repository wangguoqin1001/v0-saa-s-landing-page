import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8">
            <span className="mr-2">🚀</span>
            <span>Introducing FlowSync 2.0 - Now with AI-powered insights</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
            Streamline Your
            <span className="text-primary block">Workflow</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The all-in-one SaaS platform that transforms how teams collaborate, manage projects, and deliver results.
            Experience seamless productivity like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
