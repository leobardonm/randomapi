import Image from "next/image";
import { useState } from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaLock } from 'react-icons/fa';
import UserAttributeIcon from './UserAttributeIcon';

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  dob: {
    date: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
  };
  phone: string;
  login: {
    password: string;
  };
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [hoveredAttribute, setHoveredAttribute] = useState<string>('name');
  const formattedDate = new Date(user.dob.date).toLocaleDateString();

  return (
    <div className="border rounded-lg p-4 shadow-lg w-64 flex flex-col items-center justify-center bg-white relative">
      <Image
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="text-center">
        <div className="flex space-x-6 mt-4 ">
          <UserAttributeIcon icon={<FaUser />} attribute="name" setHoveredAttribute={setHoveredAttribute} />
          <UserAttributeIcon icon={<FaEnvelope />} attribute="email" setHoveredAttribute={setHoveredAttribute} />
          <UserAttributeIcon icon={<FaMapMarkerAlt />} attribute="address" setHoveredAttribute={setHoveredAttribute} />
          <UserAttributeIcon icon={<FaPhone />} attribute="phone" setHoveredAttribute={setHoveredAttribute} />
          <UserAttributeIcon icon={<FaLock />} attribute="password" setHoveredAttribute={setHoveredAttribute} />
        </div>
        <div className="mt-4">
          {hoveredAttribute === 'name' && (
            <div className="text-center">
              <h1 className="text-xl font-semibold">Hi my name is</h1>
              <h2 className="text-gray-600">{`${user.name.first} ${user.name.last}`}</h2>
            </div>
          )}
          {hoveredAttribute === 'email' && (
            <div className="text-center">
            <h1 className="text-xl font-semibold">My mail is</h1>
            <p className="text-gray-600">{user.email}</p>
            </div>
          )}
          {hoveredAttribute === 'address' && (
            <div className="text-center">
                <h1 className="text-xl font-semibold">My address is</h1>
              <p className="text-gray-600">{`${user.location.street.number} ${user.location.street.name}`}</p>
            </div>
          )}
          {hoveredAttribute === 'phone' && (
            <div className="text-center">
                <h1 className="text-xl font-semibold">My phone is</h1>
              <p className="text-gray-600">{`${user.phone}`}</p>
            </div>
          )}
          {hoveredAttribute === 'password' && (
            <div className="text-center">
                <h1 className="text-xl font-semibold">My password is</h1>
              <p className="text-gray-600">{`${user.login.password}`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;