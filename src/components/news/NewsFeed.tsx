
import NewsCard from "./NewsCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Modern Society",
    content: "AI is revolutionizing how we live and work. From autonomous vehicles to smart home devices...",
    category: "Technology",
    imageUrl: "https://source.unsplash.com/random/800x600/?tech",
    date: "2025-04-25"
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    content: "World leaders have come together to sign a groundbreaking climate accord that promises to...",
    category: "Environment",
    imageUrl: "https://source.unsplash.com/random/800x600/?climate",
    date: "2025-04-24"
  },
  {
    id: 3,
    title: "Breaking Records: Sports Highlights of the Week",
    content: "This week in sports has been nothing short of extraordinary, with multiple records being...",
    category: "Sports",
    imageUrl: "https://source.unsplash.com/random/800x600/?sports",
    date: "2025-04-23"
  }
];

const NewsFeed = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search news..."
          className="pl-10"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNews.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
