import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
  title: "NexCart- Store Dashboard",
  description: "NexCart Store Dashboard",
};
const RootStorelayout = ({ children }) => {
  return (
    <>
      <StoreLayout>{children}</StoreLayout>
    </>
  );
};

export default RootStorelayout;
