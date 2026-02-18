import { SubmitEvent } from "react";
import Input from "../ui/input";
import {
  Upload,
  Globe,
  Code,
  FileText,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";
import Textarea from "../ui/textarea";
import { Project } from "@/lib/type";

export default function ProjectForm({
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
  defaultValue?: Project;
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Image Upload */}
      <Input
        required={action === "add"}
        type="file"
        label="Project Image"
        name="image"
        placeholder="Project Image"
        icon={Upload}
      />
      {/* Country */}
      <Input
        required={true}
        defaultValue={defaultValue?.clientCountry}
        type="text"
        label="Country"
        name="country"
        placeholder="USA"
        icon={MapPin}
      />
      {/* Project Title */}
      <Input
        required={true}
        defaultValue={defaultValue?.title}
        type="text"
        label="Project Title"
        name="title"
        placeholder="PetMart E-Commerce"
        icon={FileText}
      />
      {/* Technologies */}
      <Input
        required={true}
        defaultValue={defaultValue?.technologies.join(",")}
        type="text"
        label="Technologies (separated by comma)"
        name="technologies"
        placeholder="React.js, Node.js, Express.js, MongoDB..."
        icon={Code}
      />
      {/* Project Link */}
      <Input
        required={true}
        defaultValue={defaultValue?.link}
        type="url"
        label="Project Link"
        name="link"
        placeholder="https://example.com"
        icon={LinkIcon}
      />
      {/* Description */}
      <Textarea
        required={true}
        defaultValue={defaultValue?.description}
        label="Description"
        name="description"
        placeholder="Write a brief description of the project..."
        icon={Globe}
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
