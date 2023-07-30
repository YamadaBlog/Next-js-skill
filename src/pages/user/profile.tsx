import { NextPage } from "next";

const ProfileIndex:NextPage = () => {
    return <div className="container mx-auto px-4 py-8">
        <div className="primary shadow-lg rounded-lg overflow-hidden" id="block-user">
            <div className="p-4">
                <img className="w-34 h-32 rounded-full mx-auto" src="/imgdn.jpg" alt="Profile Picture"></img>
                <h1 className="text-3xl text-center font-semibold mt-4">L.</h1>
                <p className="text-gray-500 text-center">Pro Thinker</p>
            </div>
            <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                    <li className="p-4">
                        <span className="text-gray-500">Email:</span>
                        <span className="ml-2">L.sav@example.com</span>
                    </li>
                    <li className="p-4">
                        <span className="text-gray-500">Location:</span>
                        <span className="ml-2"> ????? </span>
                    </li>
                    <li className="p-4">
                        <span className="text-gray-500">Bio:</span>
                        <span className="ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu felis euismod,
                            placerat est non, laoreet magna.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>;
}

export default ProfileIndex;
