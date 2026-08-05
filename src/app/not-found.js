import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      {/* Center Image */}
      <Image
        src="/not-found.png"
        alt="Not Found"
        width={400}
        height={400}
        className="w-72 h-72 object-contain mb-6"
      />

      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold text-gray-800 sm:text-4xl">404 - Page Not Found</h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-[#018EDE] text-white rounded-lg shadow-md hover:bg-[#007bb8] transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
