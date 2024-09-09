import OrdersFilter from "../features/products/OrdersFilter";
import OperationsContainer from "../ui/OperationsContainer";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

function PurchaseHistory() {
  return (
    <Section>
      <SectionHeading>Purchase History</SectionHeading>

      <OperationsContainer>
        <OrdersFilter />
      </OperationsContainer>
    </Section>
  );
}

export default PurchaseHistory;
