import {
  Header,
  Description,
  Mounting,
  Form,
  Videofragment,
  PhotoWork,
  Footer,
} from "../components";
import "./index.scss";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Description />
      <Mounting />
      <Form />
      <Videofragment />
      <PhotoWork />
      <Footer />
    </>
  );
};
