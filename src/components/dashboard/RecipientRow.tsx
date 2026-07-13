import { deleteRecipient } from "@/app/dashboard/recipients/actions";

export default function RecipientRow({ recipient }: any) {
  return (
    <tr className="border-t">
      <td className="p-5">{recipient.email}</td>

      <td>
        {recipient.first_name}

        {recipient.last_name}
      </td>

      <td>
        <span
          className="
bg-green-500
text-white
px-3
py-1
rounded-full
text-sm
"
        >
          {recipient.status}
        </span>
      </td>

      <td>
        <form action={deleteRecipient.bind(null, recipient.id)}>
          <button
            className="
bg-red-600
text-white
px-3
py-1
rounded
"
          >
            Delete
          </button>
        </form>
      </td>
    </tr>
  );
}
