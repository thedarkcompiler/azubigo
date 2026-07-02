import { useRouter } from "next/router";
import { FormEvent } from "react";


// Models

export default function Login() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const 
    
  }

  return (
        <div>
            <h1>Hello, Next.js!</h1>
            <p>This is the login page.</p>
        </div>
      );
}
