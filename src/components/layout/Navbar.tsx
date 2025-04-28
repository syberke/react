
import { Button } from "@/components/ui/button";
import { LogOut, Menu, Search } from "lucide-react";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar = ({ onLogout }: NavbarProps) => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold ml-2">FireNews</h1>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost">Latest</Button>
            <Button variant="ghost">Technology</Button>
            <Button variant="ghost">Business</Button>
            <Button variant="ghost">Sports</Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
