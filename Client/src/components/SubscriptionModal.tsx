import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface SubscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubscribe?: (plan: string) => void;
}

export function SubscriptionModal({ open, onOpenChange, onSubscribe }: SubscriptionModalProps) {
  const navigate = useNavigate();

  const handleSubscribe = (plan: string) => {
    toast.success(`Successfully subscribed to ${plan} plan!`, {
      description: "Our team will contact you shortly to complete the setup.",
    });
    if (onSubscribe) {
      onSubscribe(plan);
    }
    onOpenChange(false);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const handleFreeTrial = () => {
    toast.success("Free trial activated!", {
      description: "You have 7 days of full access. Welcome to PharmaMind!",
    });
    onOpenChange(false);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const plans = [
    {
      name: "Monthly",
      price: "₹2.6 Lakhs",
      period: "per month",
      icon: Zap,
      color: "text-primary",
      features: [
        "Full access to AI models",
        "Real-time analytics dashboard",
        "Team collaboration tools",
        "Priority email support",
        "Monthly usage reports",
        "API access",
      ],
    },
    {
      name: "Semi-Annual",
      price: "₹14 Lakhs",
      period: "for 6 months",
      icon: Sparkles,
      color: "text-secondary",
      badge: "Save 10%",
      features: [
        "Everything in Monthly",
        "Dedicated account manager",
        "Custom model training",
        "Advanced analytics",
        "24/7 phone support",
        "Quarterly business reviews",
        "Extended data retention",
      ],
    },
    {
      name: "Annual",
      price: "₹25 Lakhs",
      period: "for 12 months",
      icon: Crown,
      color: "text-secondary",
      badge: "Best Value - Save 20%",
      popular: true,
      features: [
        "Everything in Semi-Annual",
        "Unlimited API calls",
        "White-label solutions",
        "Custom integrations",
        "On-site training",
        "Legal & compliance support",
        "Priority feature requests",
        "Unlimited data storage",
      ],
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center">
            Choose Your Plan
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Select the subscription that best fits your organization's needs
          </DialogDescription>
        </DialogHeader>

        {/* Free Trial Banner */}
        <Card className="p-6 bg-accent border-accent-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-accent-foreground mb-1">
                Try PharmaMind Free for 7 Days
              </h3>
              <p className="text-sm text-accent-foreground/80">
                Perfect for companies, educational institutions, and research organizations
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={handleFreeTrial}
              className="bg-card hover:bg-accent"
            >
              Start Free Trial
            </Button>
          </div>
        </Card>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`p-6 relative ${
                  plan.popular ? "border-secondary border-2 shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-3">
                    <IconComponent className={`w-6 h-6 ${plan.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  {plan.badge && (
                    <Badge variant="secondary" className="mb-2">
                      {plan.badge}
                    </Badge>
                  )}
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant="default"
                  size="lg"
                  onClick={() => handleSubscribe(plan.name)}
                >
                  Subscribe Now
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-6 pt-6 border-t">
          <p className="text-sm text-muted-foreground">
            All plans include secure login, ISO certification, and 24/7 support. Custom enterprise plans available.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}