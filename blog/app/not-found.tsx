import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
      <p className="text-lg text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 inline-block text-blue-600 font-medium">
        Go back to Home →
      </Link>
    </div>
  );
}
