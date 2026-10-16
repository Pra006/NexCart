import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
  title: "NexCart- Admin Dashboard",
  description: "NexCart Admin Dashboard",
};
const RootAdminLayout = ({ children }) => {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
};

export default RootAdminLayout;
