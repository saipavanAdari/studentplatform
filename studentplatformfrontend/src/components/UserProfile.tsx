import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface UserProfileProps {
  name: string;
  avatarUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, avatarUrl }) => {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-secondary-gray">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={name} />
            ) : null}
            <AvatarFallback className="bg-secondary-gray text-primary-blue">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm hidden md:inline-block">{name}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-secondary-gray border-secondary-gray/50">
        <DropdownMenuItem className="px-3 py-2 cursor-pointer">
          <Link to="/profile" className="flex w-full">My Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 py-2 cursor-pointer">
          <Link to="/settings" className="flex w-full">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-secondary-gray/20" />
        {/* <DropdownMenuItem className="text-danger-red px-3 py-2 cursor-pointer">
          <Link to="/logout" className="flex w-full">Logout</Link>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
