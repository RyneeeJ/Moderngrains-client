import { Suspense } from "react";
import OrdersFilter from "../features/orders/OrdersFilter";
import OrdersList from "../features/orders/OrdersList";
import OperationsContainer from "../ui/OperationsContainer";

import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Loader from "../ui/Loader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function PurchaseHistory() {
  useDocumentTitle("MGrains | Orders");
  return (
    <Section>
      <SectionHeading>Purchase History</SectionHeading>

      <OperationsContainer>
        <OrdersFilter />
      </OperationsContainer>

      <Suspense fallback={<Loader />}>
        <OrdersList />
      </Suspense>
    </Section>
  );
}

export default PurchaseHistory;
