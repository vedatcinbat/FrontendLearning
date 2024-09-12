"use client"
import { Button } from './components/Button';

export default function HomePage() {
  const handleClick = () => alert('Button clicked!');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Button label="Primary Button" onClick={handleClick} variant="primary" size="medium" />
      <Button label="Secondary Button" onClick={handleClick} variant="secondary" size="large" />
    </div>
  );
}
