"use server";

import getDb from "./db";
import { Project, Team, Testimonial } from "./type";

type PropsType =
  | {
      formType: "project";
      formData: Project;
    }
  | {
      formType: "team";
      formData: Team;
    }
  | {
      formType: "testimonial";
      formData: Testimonial;
    };

export default async function submitForm(props: PropsType) {
  const db = await getDb();
  const { formType, formData } = props;
  let result;
  if (formType === "project") {
    result = await db.projects.insertOne({
      ...formData,
      createdAt: new Date().toISOString(),
    });
  } else if (formType === "team") {
    result = await db.teams.insertOne({
      ...formData,
      createdAt: new Date().toISOString(),
    });
  } else if (formType === "testimonial") {
    result = await db.testimonials.insertOne({
      ...formData,
      createdAt: new Date().toISOString(),
    });
  }
  if (result?.insertedId) {
    return { success: true, message: "Data inserted successfully" };
  }
  return { success: false, message: "Failed to insert data" };
}
