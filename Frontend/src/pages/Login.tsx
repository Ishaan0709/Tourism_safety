import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email or ID to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      toast({
        title: "OTP Sent",
        description: "Verification code has been sent to your email.",
      });
    }, 1500);
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast({
        title: "OTP Required",
        description: "Please enter the verification code.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome to Tourist Safety Monitoring System.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/20 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Tourist Safety System</h1>
            <p className="text-muted-foreground">Secure Login Portal</p>
          </div>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">
              {step === "email" ? "Sign In" : "Verify OTP"}
            </CardTitle>
            <CardDescription className="text-center">
              {step === "email" 
                ? "Enter your email or ID to receive verification code" 
                : "Enter the 6-digit code sent to your email"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {step === "email" ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">Email or ID</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="officer@tourism.gov.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendOtp()}
                  />
                </div>
                
                <Button 
                  onClick={handleSendOtp}
                  disabled={isLoading}
                  className="w-full gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send OTP
                    </>
                  )}
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    onKeyPress={(e) => e.key === "Enter" && handleVerifyOtp()}
                    className="text-center text-lg font-mono"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline"
                    onClick={() => setStep("email")}
                    disabled={isLoading}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  
                  <Button 
                    onClick={handleVerifyOtp}
                    disabled={isLoading}
                    className="flex-1 gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                        Verifying...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Verify & Login
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Government of India • Tourism Department</p>
          <p className="text-xs mt-1">Authorized Personnel Only</p>
        </div>
      </div>
    </div>
  );
};

export default Login;