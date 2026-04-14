import Link from 'next/link';

const NotFoundPageHome = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-green-300 px-4">

            <div className="bg-linear-to-br from-green-300 to-green-50 shadow-xl rounded-2xl p-10 text-center max-w-md w-full space-y-6">

                {/* 404 */}
                <h1 className="text-6xl font-bold text-green-700">404</h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center mt-4">

                    {/* Home */}
                    <Link
                        href="/"
                        className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition"
                    >
                        🏠 Home
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default NotFoundPageHome;