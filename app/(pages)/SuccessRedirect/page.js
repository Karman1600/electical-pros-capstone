"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Stripe from "stripe";
import postData from "@/app/lib/postData";
import { useUserAuth } from "@/app/lib/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.uid) {
        const session_id = searchParams.get("session_id");

        if (!session_id) return;

        const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
        const session = await stripe.checkout.sessions.retrieve(session_id);

        // Extract metadata
        const { serviceName, planName, area, baseAmount, appliances } =
          session.metadata;

        // Convert appliances back to an array
        const parsedAppliances = appliances ? JSON.parse(appliances) : [];

        // Save data to Firestore
        const data = {
          paymentId: session.id, // Add customer ID if available
          serviceName,
          planName,
          area,
          baseAmount: parseFloat(baseAmount), // Convert back to number
          appliances: parsedAppliances,
          paymentStatus: session.payment_status,
          status: "In Progress",
          spent: 0,
        };

        console.log("Payment data:", user.uid);

        try {
          await postData(user.uid, "payments", data);
          console.log("Payment data added to Firestore");
        } catch (error) {
          console.error("Error saving payment data:", error.message);
        }

        // Redirect to success page
        router.push("/Success");
      }
    };

    fetchData();
  }, [router, searchParams, user]);

  return <p>Processing your payment... Please wait.</p>;
}
