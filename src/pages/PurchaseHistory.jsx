import OrdersFilter from "../features/orders/OrdersFilter";
import OrdersList from "../features/orders/OrdersList";
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

      <OrdersList />
    </Section>
  );
}

export default PurchaseHistory;
