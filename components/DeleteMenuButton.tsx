"use client";
import { error } from "console";
import React from "react";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteMenuAction } from "@/actions/delete-menu";
import { success } from "zod";

type props = {
  id: string;
};
const DeleteMenuButton = ({ id }: props) => {
  const [formState, FormAction, isPending] = useActionState(
    deleteMenuAction.bind(null, id),
    { success: false }
  );

  return (
    <div>
      <form action={FormAction}>
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="text-destructive"
          disabled={isPending}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default DeleteMenuButton;
