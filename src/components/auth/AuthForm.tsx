import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Mail, Lock, Github } from "lucide-react";

interface AuthFormProps {
  onEmailLogin: (email: string, password: string) => void;
  onGoogleLogin: () => void;
  onGithubLogin: () => void;
  onRegister: (email: string, password: string) => void;
  onResetPassword: (email: string) => void;
}

const AuthForm = ({
  onEmailLogin,
  onGoogleLogin,
  onGithubLogin,
  onRegister,
  onResetPassword,
}: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      onRegister(email, password);
    } else {
      onEmailLogin(email, password);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {isRegistering ? "Create Account" : "Welcome Back"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            <LogIn className="mr-2 h-4 w-4" />
            {isRegistering ? "Register" : "Login"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onGoogleLogin}
              className="w-full"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onGithubLogin}
              className="w-full"
            >
              <Github className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center space-y-2">
            <Button
              type="button"
              variant="link"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-sm"
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Button>
            {!isRegistering && (
              <Button
                type="button"
                variant="link"
                onClick={() => onResetPassword(email)}
                className="text-sm"
              >
                Forgot password?
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
