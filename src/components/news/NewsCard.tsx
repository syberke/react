
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  date: string;
}

const NewsCard = ({ title, content, category, imageUrl, date }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardHeader>
        <div className="flex justify-between items-center">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{content}</p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
