"use client";
import { useRandomUser } from '../hooks/useRandomUser';
import UserCard from '../components/UserCard';

export default function Home() {
  const { user, loading, error } = useRandomUser();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex items-center justify-center h-screen">
      {user && <UserCard user={user} />}
    </div>
  );
}
