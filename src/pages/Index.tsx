
import AuthForm from "@/components/auth/AuthForm";
import Navbar from "@/components/layout/Navbar";
import NewsFeed from "@/components/news/NewsFeed";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User // Add this import
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBVV_2-Jfi6yWOmlNeFAn3KlhmPHO1Y-ew",
  authDomain: "news-c97d6.firebaseapp.com",
  projectId: "news-c97d6",
  storageBucket: "news-c97d6.firebasestorage.app",
  messagingSenderId: "123459649936",
  appId: "1:123459649936:web:53c1287c342ba12fe8b315",
  measurementId: "G-CJMB9F3EY5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Admin account credentials
const ADMIN_EMAIL = "admin@firenews.com";
const ADMIN_PASSWORD = "Admin123!";

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const { isAdmin } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Berhasil",
        description: "Login berhasil",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Terjadi kesalahan yang tidak diketahui",
          variant: "destructive",
        });
      }
    }
    
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast({
        title: "Berhasil",
        description: "Login dengan Google berhasil",
      });
    }  catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Terjadi kesalahan yang tidak diketahui",
          variant: "destructive",
        });
      }
    }
    
  };

  const handleGithubLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      toast({
        title: "Berhasil",
        description: "Login dengan GitHub berhasil",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Terjadi kesalahan yang tidak diketahui",
          variant: "destructive",
        });
      }
    }
    
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Berhasil",
        description: "Registrasi berhasil",
      });
    }  catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Terjadi kesalahan yang tidak diketahui",
          variant: "destructive",
        });
      }
    }
    
  };

  const handleResetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast({
        title: "Berhasil",
        description: "Email reset password telah dikirim",
      });
    }  catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Terjadi kesalahan yang tidak diketahui",
          variant: "destructive",
        });
      }
    }
    
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Berhasil",
        description: "Logout berhasil",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Terjadi kesalahan yang tidak diketahui",
          variant: "destructive",
        });
      }
    }
    
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <AuthForm
          onEmailLogin={handleEmailLogin}
          onGoogleLogin={handleGoogleLogin}
          onGithubLogin={handleGithubLogin}
          onRegister={handleRegister}
          onResetPassword={handleResetPassword}
        />
        <div className="fixed bottom-2 text-xs text-gray-500">
          <p>Admin login: {ADMIN_EMAIL} / {ADMIN_PASSWORD}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onLogout={handleLogout} />
      <div className="container mx-auto px-4 py-6">
        {isAdmin && (
          <div className="mb-4">
            <Link to="/admin">
              <Button>
                Admin Dashboard
              </Button>
            </Link>
          </div>
        )}
        <NewsFeed />
      </div>
    </div>
  );
};

export default Index;
