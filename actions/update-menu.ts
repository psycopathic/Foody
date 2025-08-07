'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache"; 
import { z } from "zod";

export type UpdateMenuFormState = {
    errors: {
        name?: string[];
        description?: string[];
        category?: string[];
        price?: string[];
        image?: string[];
        formError?: string[];
    };
};

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    price: z.coerce.number().min(0.01, { message: "Price must be at least $0.01" }),
});

export const updateMenuAction = async (
    initialState: UpdateMenuFormState,
    formData: FormData,
    id: string
): Promise<UpdateMenuFormState> => {
    const values = {
        name: formData.get("name")?.toString() || "",
        description: formData.get("description")?.toString() || "",
        category: formData.get("category")?.toString() || "",
        price: formData.get("price") || "", 
    };

    const result = formSchema.safeParse(values);

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { name, description, category, price } = result.data;

    try {
        await prisma.menuItem.update({
            where: { id },
            data: {
                name,
                description,
                category,
                price, 
            },
        });

    } catch (error: unknown) {
        return {
            errors: {
                formError: [error instanceof Error ? error.message : "An unexpected error occurred"],
            },
        };
    }
    revalidatePath("/admin/menu"); 
    return {
        errors:{}
    }
};
