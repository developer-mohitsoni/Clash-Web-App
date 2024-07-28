"use client"

import React from 'react'
import { registerAction } from "@/actions/authActions";
import { SubmitButton } from "@/components/common/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
  return (
    <form action={registerAction}>
      <div className="mt-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name..."
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email..."
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password..."
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="cpassword">Confirm Password</Label>
        <Input
          id="cpassword"
          type="password"
          name="confirm_password"
          placeholder="Confirm your password..."
        />
      </div>
      <div className="mt-4">
        <SubmitButton />
      </div>
    </form>
  );
}

export default Register