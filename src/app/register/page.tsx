// app/register/page.tsx
import RegistrationPage from '@/app/components/registration_page'; // if '@' alias exists
// If the alias doesn't work, use: import RegistrationPage from '../components/RegistrationPage';

export default function Page() {
  return <RegistrationPage />;
}
