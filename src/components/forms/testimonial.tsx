import {
  Building,
  MapPin,
  MessageSquare,
  Star,
  Upload,
  User,
  UserCog,
} from "lucide-react";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import { SubmitEvent } from "react";
import { Testimonial } from "@/lib/type";

export default function TestimonialForm({
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
  defaultValue?: Testimonial;
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Image Upload */}
      <Input
        required={action === "add"}
        type="file"
        label="Client Image"
        name="image"
        placeholder="Client Image"
        icon={Upload}
      />
      {/* User Name */}
      <Input
        required={true}
        defaultValue={defaultValue?.name}
        type="text"
        label="Client name"
        name="name"
        placeholder="John Doe"
        icon={User}
        />
      {/* Country */}
      <Input
        required={true}
        defaultValue={defaultValue?.country}
        type="text"
        label="Country"
        name="country"
        placeholder="USA"
        icon={MapPin}
        />
      {/* Rating */}
      <Input
        required={true}
        defaultValue={defaultValue?.rating.toString()}
        type="number"
        label="Ratings"
        name="rating"
        placeholder="eg: 5"
        max={5}
        min={1}
        icon={Star}
        />
      {/* Company name */}
      <Input
        required={true}
        defaultValue={defaultValue?.company}
        type="text"
        label="Company name"
        name="company"
        placeholder="Creative Hub IT"
        icon={Building}
        />
      {/* Position */}
      <Input
        required={true}
        defaultValue={defaultValue?.position}
        type="text"
        label="Position"
        name="position"
        placeholder="CEO"
        icon={UserCog}
      />
      {/* Description */}
      <Textarea
        required={true}
        defaultValue={defaultValue?.review}
        label="Review"
        name="review"
        placeholder="Write client review"
        icon={MessageSquare}
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
              : "Add Review"
            : loading // Checks if action is update and loading is true
              ? "Updating..."
              : "Update Review"}
        </button>
      </div>
    </form>
  );
}
