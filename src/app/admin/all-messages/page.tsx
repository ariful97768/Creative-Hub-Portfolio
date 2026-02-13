export default function AllMessagesPage() {
  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">All Messages</h1>
        <p className="text-gray-500">Manage all messages</p>
      </div>
      <div className="flex justify-center items-center h-96">
        <p className="text-4xl font-bold">No Messages Found</p>
      </div>
    </section>
  );
}
