import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductGrid";

const Heading = styled.h1`
    font-size: 25px;
    font-weight: normal;
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Heading>New Arrivals</Heading>
      <ProductsGrid products={products} />
    </Center>
  );
}
