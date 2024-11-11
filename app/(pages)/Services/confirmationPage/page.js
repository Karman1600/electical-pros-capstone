// Reference- https://v0.dev/ Prompt - create a confirmation page for the e-commerce website which shows the name of the service, plan name (advance or basic), area in sq meteres, (list of appliances which contain name, price only if persomn use advance plan) and total amount including 0.5% tax and also show the payment options


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Smartphone } from "lucide-react";

export default function Component({
  serviceName = "Cleaning Service",
  planName = "Advanced",
  area = 100,
  appliances = [
    { name: "Refrigerator", price: 20 },
    { name: "Oven", price: 15 },
    { name: "Dishwasher", price: 10 },
  ],
  baseAmount = 150,
}) {
  const isAdvancedPlan = planName === "Advanced";
  const appliancesTotal = isAdvancedPlan ? appliances.reduce((sum, appliance) => sum + appliance.price, 0) : 0;
  const subtotal = baseAmount + appliancesTotal;
  const tax = subtotal * 0.005; // 0.5% tax
  const total = subtotal + tax;

  return (
    <Card className="w-full max-w-2xl mx-auto">
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
          <span>{planName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Area:</span>
          <span>{area} sq meters</span>
        </div>
        {isAdvancedPlan && appliances.length > 0 && (
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
          <Button variant="outline" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span>Credit Card</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span>Debit Card</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Smartphone className="h-4 w-4" />
            <span>Apple Pay</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
