
import AdminLayout from "@/components/admin/AdminLayout";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreHorizontal } from "lucide-react";

// Mock data for categories
const mockCategories = [
  {
    id: "1",
    name: "Teknologi",
    slug: "teknologi",
    postCount: 45,
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Bisnis",
    slug: "bisnis",
    postCount: 32,
    createdAt: "2023-01-20",
  },
  {
    id: "3",
    name: "Olahraga",
    slug: "olahraga",
    postCount: 28,
    createdAt: "2023-02-05",
  },
  {
    id: "4",
    name: "Politik",
    slug: "politik",
    postCount: 19,
    createdAt: "2023-02-10",
  },
  {
    id: "5",
    name: "Kesehatan",
    slug: "kesehatan",
    postCount: 25,
    createdAt: "2023-02-15",
  },
];

const AdminCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState(mockCategories);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout pageTitle="Kategori">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari kategori..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>Tambah Kategori</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Jumlah Artikel</TableHead>
                <TableHead>Dibuat Pada</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{category.slug}</TableCell>
                  <TableCell>{category.postCount}</TableCell>
                  <TableCell>{category.createdAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Tindakan</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Hapus
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCategories;
