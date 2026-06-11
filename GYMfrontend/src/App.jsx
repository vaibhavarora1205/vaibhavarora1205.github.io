import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import ExpercideSection from "./components/ExpercideSection";
import MembershipSection from "./components/MembershipSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import CreditFooter from "./components/CreditFooter";
function App() {
  return (
    <>
      <NavBar />
      <div className="pt-20px">
      <Hero/>
      <ExpercideSection></ExpercideSection>
      <MembershipSection></MembershipSection>
      <CallToAction></CallToAction>
      <Footer></Footer>
      <CreditFooter></CreditFooter>
      </div>
    </>
  );
}
export default App;
