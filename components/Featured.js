import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
`;

const Heading = styled.h1`
  font-size: 45px;
  font-weight: normal;
`;

const Desc = styled.p`
  font-size: 16px;
  color: #aaa;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  color: #fff;
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  img {
    max-width: 80%;
    align: right;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Heading>{product.name}</Heading>
              <Desc>{product.description}</Desc>

              <ButtonWrapper>
                <ButtonLink
                  href={"/products/" + product._id}
                  white={1}
                  size="l"
                >
                  Read More
                </ButtonLink>
                
                <Button onClick={() => addProduct(product._id)} primary={1} size="l">
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>

          <Column>
            <div>
              <img src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray_2x.png"></img>
            </div>
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
