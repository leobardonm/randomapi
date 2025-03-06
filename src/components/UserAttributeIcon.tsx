import { FC } from 'react';

interface UserAttributeIconProps {
  icon: React.ReactNode;
  attribute: string;
  setHoveredAttribute: (attribute: string) => void;
}

const UserAttributeIcon: FC<UserAttributeIconProps> = ({ icon, attribute, setHoveredAttribute }) => {
return (
    <div
        className="text-black-600 cursor-pointer text-2xl p-4"
        onMouseEnter={() => setHoveredAttribute(attribute)}>
        {icon}
    </div>
);
};

export default UserAttributeIcon;