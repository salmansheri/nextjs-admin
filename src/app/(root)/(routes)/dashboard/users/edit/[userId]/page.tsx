import UserForm from "@/components/ui/form/user-form";
import React from "react";

interface UserEditPageProps {
  params: {
    userId: string;
  };
}

const UserEditPage = ({ params }: UserEditPageProps) => {
  const { userId } = params;

  return (
    <div className="bg-background-soft lg:p-6 p-2 ">
      <UserForm />
    </div>
  );
};

export default UserEditPage;
