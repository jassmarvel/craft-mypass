import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export default function PasswordManagerPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Password Manager</h1>
          {currentUser && <p className="text-sm text-gray-500">Welcome, {currentUser.email}</p>}
        </div>
        <Button onClick={handleLogout} variant="outline">Log Out</Button>
      </header>

      <main>
        {/* We will add the password list and form here in the next step */}
        <div className="text-center p-8 border-2 border-dashed rounded-lg">
          <p className="text-gray-500">Your password manager will be here.</p>
        </div>
      </main>
    </div>
  );
}