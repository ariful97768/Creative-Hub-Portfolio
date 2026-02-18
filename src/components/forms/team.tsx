import { Team } from "@/lib/type";
import { SubmitEvent } from "react";
import Input from "../ui/input";
import { FileText, Upload, User } from "lucide-react";
import Textarea from "../ui/textarea";

export default function TeamForm({
  handleSubmit,
  action,
  loading,
  setIsOpen,
  defaultValue,
}: {
  handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  action: "add" | "update";
  loading: boolean;
  setIsOpen: (isOpen: boolean) => void;
  defaultValue?: Team;
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Image Upload */}
      <Input
        required={action === "add"}
        type="file"
        label="Profile Image"
        name="image"
        placeholder="Profile Image"
        icon={Upload}
      />
      {/* User Name */}
      <Input
        required={true}
        type="text"
        label="Name"
        name="name"
        placeholder="John Doe"
        icon={User}
        defaultValue={defaultValue?.name}
      />
      {/* About User */}
      <Textarea
        required={true}
        label="About"
        name="about"
        placeholder="Write about member's designation..."
        icon={FileText}
        defaultValue={defaultValue?.about}
      />
      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 active:scale-[0.97]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-accent cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
        >
          {action === "add"
            ? loading // Checks if action is add and loading is true
              ? "Adding..."
              : "Add Project"
            : loading // Checks if action is update and loading is true
              ? "Updating..."
              : "Update Project"}
        </button>
      </div>
    </form>
  );
}
