// app/menu/page.tsx
import { MenuList } from "@/components/menu/MenuList";
import { MenuSkeleton } from "@/components/menu/MenuSkeleton";
import { Suspense } from "react";
 

export default function Item() {
  return (
    <div className="container mx-auto py-8">
      <div className="gap-4 mb-8">
        <h1 className="text-3xl font-bold">Our Menu</h1>
      </div>
      <Suspense fallback={<MenuSkeleton />}>
        <MenuList />
      </Suspense>
    </div>
  );
}
