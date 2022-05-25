import { Container } from "@mui/system";
import Navbar from "./components/Navbar";

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
