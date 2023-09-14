import { NextPage } from "next";
import Image from "next/image";

const ProfileIndex: NextPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          id="block-user"
        >
          <div className="p-4">
            <Image
              src="/imgdn.jpg"
              width={200}
              height={100}
              className="w-34 h-32 rounded-full mx-auto"
              alt="Profile Picture"
            ></Image>
            <h1 className="text-3xl text-center font-semibold mt-4">L.</h1>
            <p className="text-gray-500 text-center">Pro Thinker</p>
          </div>
          <ul>
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
              <span className="ml-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu felis euismod, placerat est non, laoreet magna.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileIndex;
