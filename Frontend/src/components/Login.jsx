import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  
  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-xl bg-white rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4">
            {isSignUp ? "Sign Up" : "Login"}
          </h2>
          <form className="space-y-4">
            <Input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
            <Input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
            {isSignUp && (
              <Input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded-md" />
            )}
            <Button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </form>
          <p className="text-center text-sm mt-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"} 
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={toggleAuthMode}
            >
              {isSignUp ? " Login" : " Sign Up"}
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
