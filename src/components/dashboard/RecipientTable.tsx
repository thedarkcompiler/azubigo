import RecipientRow from "./RecipientRow";

export default function RecipientTable({ recipients = [] }: any) {
  return (
    <div
      className="
bg-white
rounded-xl
shadow
overflow-hidden
"
    >
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Email</th>

            <th>Name</th>

            <th>Status</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {recipients.map((recipient: any) => (
            <RecipientRow key={recipient.id} recipient={recipient} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
