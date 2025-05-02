// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/components/Logo';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9001/login', { email, password });

      const { token, role, name, _id } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', _id);
      localStorage.setItem('name', name);
      if (role === "student") {
        navigate('/studentdashboard');

      }
      else if (role === "teacher") {
        navigate('/teacherdashboard');

      } else if (role === "admin") {
        navigate('/admindashboard');

      }
    } catch (err: any) {
      setErrorMsg(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-darkest-blue">
      <div className="py-6 px-6">
        <Logo />
      </div>

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-dark-blue rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome to EduPlatform</h2>
          <p className="text-text-muted text-center mb-6">
            Sign in to continue your educational journey
          </p>

          {errorMsg && (
            <p className="text-red-500 text-center mb-4">{errorMsg}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-secondary-gray border-secondary-gray/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 bg-secondary-gray border-secondary-gray/50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary-blue hover:bg-primary-blue/90">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-muted">
              Don’t have an account?{" "}
              <Link to="/register" className="text-primary-blue hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-text-muted text-sm">
        <p>© 2025 EduPlatform. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
