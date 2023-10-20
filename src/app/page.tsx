import FormWithoutReactHookForm from "@/components/FormWithoutReactHookForm";
import FormWithReactHookForm from "@/components/FormWithReactHookForm";
import FormWithReactHookFormAndZod from "@/components/FormWithReactHookFormAndZod";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen text-lg">
      {/* <FormWithoutReactHookForm /> */}
      {/* <FormWithReactHookForm /> */}
      <FormWithReactHookFormAndZod />
    </div>
  );
};
export default Home;
