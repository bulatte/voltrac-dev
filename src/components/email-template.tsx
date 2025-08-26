import { ContactFormValues } from "./contact-form";

export function EmailTemplate({
  name,
  email,
  message,
  address,
  phone,
}: ContactFormValues) {
  return (
    <div>
      <h1>New message from {name}</h1>

      <p>You have received a new message from {name}.</p>
      <p>Here are the details:</p>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Address: {address}</li>
        <li>Phone: {phone}</li>
        <li>Message: {message}</li>
      </ul>
    </div>
  );
}
