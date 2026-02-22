export const dynamic = "force-dynamic";

import { getAllMessages } from "@/lib/actions/contact-email";
import { Mail, Phone, Clock, MessageSquare, Inbox } from "lucide-react";
import DeleteMessage from "./delete-message";

export default async function AllMessagesPage() {
  const result = await getAllMessages();

  if (!result.success) {
    throw new Error(result.error);
  }

  const messages = result.data;

  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">All Messages</h1>
        <p className="text-gray-500">Manage all messages</p>
      </div>

      {messages.length > 0 ? (
        <div className="mt-10 px-5 md:px-10 space-y-4">
          {/* Stats bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">
                {messages.length}
              </span>{" "}
              message{messages.length !== 1 && "s"} received
            </p>
          </div>

          {/* Messages list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {messages.map((message) => (
              <div
                key={message._id}
                className="bg-white border border-gray-200 max-w-md w-full rounded-2xl p-6 shadow-lg hover:shadow-md transition-shadow duration-300"
              >
                {/* Header: Name + Actions */}
                <div className="flex items-start justify-between mb-2 sm:mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-11 h-11 rounded-full bg-linear-to-br from-primary/80 to-accent/80 flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {message.first_name.charAt(0)}
                      {message.last_name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                        {message.first_name} {message.last_name}
                      </h3>
                      {message.createdAt && (
                        <div className="sm:flex hidden items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                          <Clock className="shrink-0" size={12} />
                          <time>
                            {new Date(message.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "Asia/Dhaka",
                              },
                            )}
                          </time>
                        </div>
                      )}
                    </div>
                  </div>
                  <DeleteMessage id={message._id} />
                </div>
                {message.createdAt && (
                  <div className="sm:hidden mb-4 flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                    <Clock className="shrink-0" size={12} />
                    <time>
                      {new Date(message.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "Asia/Dhaka",
                      })}
                    </time>
                  </div>
                )}

                {/* Contact info */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm break-all">
                  <a
                    href={`mailto:${message.email}`}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                  >
                    <Mail size={15} className="text-primary/60" />
                    {message.email}
                  </a>
                  <a
                    href={`tel:${message.phone}`}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                  >
                    <Phone size={15} className="text-primary/60 shrink-0" />
                    {message.phone}
                  </a>
                </div>

                {/* Message body */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start gap-2.5">
                    <MessageSquare
                      size={16}
                      className="text-accent/50 mt-0.5 shrink-0"
                    />
                    <p className="text-gray-700 line-clamp-4 text-sm leading-relaxed whitespace-pre-wrap">
                      {message.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-96 gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <Inbox size={36} className="text-gray-300" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-300">No Messages Yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Messages from the contact form will appear here
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
