"use client";
import ProjectForm from "@/components/forms/project";
import TeamForm from "@/components/forms/team";
import TestimonialForm from "@/components/forms/testimonial";
import Button from "@/components/ui/button";
import signIn from "@/lib/signin";
import SubmitForm from "@/lib/submit-form";
import { uploadImage } from "@/lib/upload-image";
import { useState } from "react";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<
  "projects" | "team" | "testimonial"
  >("projects");
  const [loading, setLoading] = useState(false);

  async function handleSignin(e: FormData) {
    const username = e.get("username") as string;
    const password = e.get("password") as string;
    const result = await signIn({ username, password });
    setIsLoggedIn(result.success);
  }

  if (!isLoggedIn) {
    return (
      <div className="h-[60vh] flex items-center">
        <form
          action={handleSignin}
          className="max-w-xs border p-5 rounded-lg mx-auto"
        >
          <div className="flex gap-2 flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border max-w-xs px-3 py-2 transition-colors duration-300 rounded-md outline-none bg-white text-dark"
            />
          </div>
          <Button variant="action" className="mt-5 mx-auto">
            Sign In
          </Button>
        </form>
      </div>
    );
  }


  /**
   * The submit function for submits the form data to the database.
   * It first extracts the data from the form, then uploads the image to the imgbb server and then submits the form data to the database.
   */
  async function submit(e: FormData) {
    setLoading(true);
    let result;
    try {
      // Team form submission
      if (activeTab === "team") {
        const name = e.get("name") as string;
        const image = e.get("image") as File;
        const about = e.get("about") as string;
        const joiningDate = e.get("joiningDate") as string;
        const salary = e.get("salary") as string;

        // Check if image is provided
        if (!image) return alert("Image is required");

        // Upload image
        const imageResult = await uploadImage(image);
        if (!imageResult?.data) return alert(imageResult.message);

        // Submit form
        result = await SubmitForm({
          formType: "team",
          formData: {
            name,
            image: imageResult.data.url,
            about,
            joiningDate: joiningDate.toString(),
            salary: Number(salary),
          },
        });
      } else if (activeTab === "testimonial") {
        // Testimonial form submission
        const review = e.get("review") as string;
        const image = e.get("image") as File;
        const country = e.get("country") as string;
        const company = e.get("company") as string;
        const position = e.get("position") as string;

        // Check if image is provided
        if (!image) return alert("Image is required");

        // Upload image
        const imageResult = await uploadImage(image);
        if (!imageResult?.data) return alert(imageResult.message);

        // Submit form
        result = await SubmitForm({
          formType: "testimonial",
          formData: {
            review,
            image: imageResult.data.url,
            country,
            company,
            position,
          },
        });
      } else if (activeTab === "projects") {
        // Project form submission
        const link = e.get("link") as string;
        const image = e.get("image") as File;
        const description = e.get("description") as string;
        const clientCountry = e.get("clientCountry") as string;

        // Check if image is provided
        if (!image) return alert("Image is required");

        // Upload image
        const imageResult = await uploadImage(image);
        if (!imageResult?.data) return alert(imageResult.message);

        // Submit form
        result = await SubmitForm({
          formType: "project",
          formData: {
            link,
            image: imageResult.data.url,
            description,
            clientCountry,
          },
        });
      }
      alert(result?.message);
    } catch (error) {
      console.log(error);
      alert("Failed to submit form, check console for more information");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-10 mt-5">
        Admin Dashboard
      </h1>
      <div className="flex max-w-xl mx-auto justify-between items-center">
        <button
          className="flex items-center gap-2 px-4 py-1 lg:px-9 lg:py-3 rounded-full text-lg font-semibold bg-[#03255A] text-white"
          onClick={() => setActiveTab("projects")}
        >
          Add New Project
        </button>
        <button
          className="flex items-center gap-2 px-4 py-1 lg:px-9 lg:py-3 rounded-full text-lg font-semibold bg-[#03255A] text-white"
          onClick={() => setActiveTab("team")}
        >
          Add New Team
        </button>
        <button
          className="flex items-center gap-2 px-4 py-1 lg:px-9 lg:py-3 rounded-full text-lg font-semibold bg-[#03255A] text-white"
          onClick={() => setActiveTab("testimonial")}
        >
          Add New Testimonial
        </button>
      </div>
      <form action={submit}>
        <div className="w-full mt-10 p-0">
          <div className="max-w-md shadow-lg bg-light-yellow p-5 rounded-lg mx-auto">
            {activeTab === "projects" && <ProjectForm />}
            {activeTab === "testimonial" && <TestimonialForm />}
            {activeTab === "team" && <TeamForm />}
            <div className="mt-7 flex justify-center">
              <button
                disabled={loading}
                className="flex items-center gap-2 px-4 py-1 lg:px-9 lg:py-3 rounded-full text-lg font-semibold bg-[#03255A] text-white"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
