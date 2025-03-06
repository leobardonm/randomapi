import Image from "next/image";

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
    };};
    phone: string;
    login: {

        password: string;
    }
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const formattedDate = new Date(user.dob.date).toLocaleDateString();

    return (
    <div className="border rounded-lg p-4 shadow-lg w-flex flex-col items-center justify-center">
      <Image
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1 className="mt-4 text-xl font-semibold">Hi my name is</h1>
      <h2 className="mt-4 text-lg font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{`${formattedDate}`}</p>
      <p className="text-gray-600">{`${user.location.street.number} ${user.location.street.name}`}</p>
      <p className="text-gray-600">{`${user.phone}`}</p>



    </div>
  );
};

export default UserCard;