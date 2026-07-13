import db from "@/lib/db";
import RecipientTable from "@/components/dashboard/RecipientTable";
import AddRecipient from "@/components/dashboard/AddRecipient";

export default function RecipientsPage() {
  const recipients = db
    .prepare(
      `
    SELECT *
    FROM recipients
    ORDER BY created_at DESC
`,
    )
    .all();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Recipients</h1>

            <p className="text-gray-500">Manage your email subscribers</p>
          </div>

          <AddRecipient />
        </div>

        <RecipientTable recipients={recipients} />
      </div>
    </main>
  );
}
