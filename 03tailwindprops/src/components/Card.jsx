import React from "react";

function Card({username, btnText = 'Click Me'}) {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
            <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card Image"
            />
            <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {username}
                </h2>
                <p className="mt-2 text-gray-600">
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                </p>
                <div className="mt-4">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition">
                        {btnText }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
