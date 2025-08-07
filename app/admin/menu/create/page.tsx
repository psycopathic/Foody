'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Upload from "@/components/Upload";
import { useActionState, useState } from "react";
// import { createMenuAction } from "@/action/create-menu";
import Link from "next/link";
import { create } from "domain";
import { createMenuAction } from "@/actions/create-menu";

const categories = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];
const page = () => {
  const [formState, action, isPending] = useActionState(createMenuAction, {errors:{}})
  const [imageUrl, setImageUrl] = useState<string | null>(null)
    const handleAction = (formdata : FormData) =>{
       formdata.append("image", imageUrl || "");
       return action(formdata);
    }
  return (
<div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1>Add New Menu Item</h1>
            <Link href={"/admin/menu"}>
              <Button variant={"link"}>All menu list</Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleAction} className="space-y-4">
            {/* Item Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Item Name</Label>
              <Input name="name" placeholder="e.g. Margherita Pizza" />
              {formState.errors.name && (
                <p className="text-red-500 text-sm">{formState.errors.name}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                placeholder="Brief description of the item"
              />
              {formState.errors.description && (
                <p className="text-red-500 text-sm">
                  {formState.errors.description}
                </p>
              )}
            </div>

            {/* Price and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                />
                {formState.errors.price && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.price}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {formState.errors.category && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.category}
                  </p>
                )}
              </div>
            </div>

            {/* Upload */}
            <div className="space-y-2">
              <Upload setImageUrl={setImageUrl} />
              {/* <Upload/> */}
            </div>

            {/* Submit */}
            <Button disabled={isPending} type="submit" className="w-full mt-4">
              {isPending ? (
                "Loading..."
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Menu Item
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
