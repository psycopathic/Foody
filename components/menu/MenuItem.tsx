"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useStore } from "@/store/store";
import Image from "next/image";
import { ImageKitProvider } from "@imagekit/next";
import type { MenuItem as Item } from "@/lib/generated/prisma";

export function MenuItem({ item }: { item: Item  }) {
  const addToCart = useStore((store) => store.addToCart);
  console.log(item.image);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0 pb-4">
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/psycopathic">
          <Image
            src={item.image}
            width={400}
            height={400}
            alt="Picture of the author"
            className="w-full h-48 object-cover"
          />
        </ImageKitProvider>
        
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">${item.price.toFixed(2)}</span>
        <Button
          onClick={() => addToCart(item)}
          size="sm"
          className="gap-1 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
