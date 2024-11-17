// Reference- https://v0.dev/ Prompt - create a confirmation page for the e-commerce website which shows the name of the service, plan name (advance or basic), area in sq meteres, (list of appliances which contain name, price only if persomn use advance plan) and total amount including 0.5% tax and also show the payment options
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Smartphone } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Component() {
    const searchParam = useSearchParams();
    const serviceName = searchParam.get("serviceName");
    const planName = searchParam.get("planName");
    const area = searchParam.get("area");
    const appliancesJSON = searchParam.get("appliances");
    const appliances = JSON.parse(appliancesJSON) || null;
    const baseAmount = searchParam.get("baseAmount");
    const isAdvancedPlan = planName === "advanced";
    const appliancesTotal = isAdvancedPlan && appliances ? appliances.reduce((sum, appliance) => sum + appliance.price, 0) : 0;
    const subtotal = parseFloat(baseAmount) + parseFloat(appliancesTotal);
    const tax = subtotal * 0.005; // 0.5% tax
    const total = subtotal + tax;

    useEffect(() => {
        console.log(isAdvancedPlan);
    }, [isAdvancedPlan]);

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                serviceName,
                planName,
                area,
                baseAmount: total.toFixed(2), // Send total amount for payment
                appliances: isAdvancedPlan ? appliances : null,
            }),
        });

        const session = await response.json();

        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto my-20">
            <CardHeader>
                <CardTitle className="text-2xl">Order Confirmation</CardTitle>
                <CardDescription>Please review your order details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between">
                    <span className="font-semibold">Service:</span>
                    <span>{serviceName}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Plan:</span>
                    <span>{planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Area:</span>
                    <span>{area} sq meters</span>
                </div>
                {isAdvancedPlan && appliances && appliances.length > 0 && (
                    <>
                        <Separator />
                        <div>
                            <h3 className="font-semibold mb-2">Appliances:</h3>
                            <ul className="space-y-1">
                                {appliances.map((appliance, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span>{appliance.name}</span>
                                        <span>${appliance.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
                <Separator />
                <div className="flex justify-between">
                    <span className="font-semibold">Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Tax (0.5%):</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
                <h3 className="font-semibold w-full">Payment Options:</h3>
                <div className="flex justify-between w-full">
                    <Button onClick={handleCheckout} variant="outline" className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4" />
                        <span>Proceed to Payment</span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
