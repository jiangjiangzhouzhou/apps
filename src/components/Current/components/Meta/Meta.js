import styled from "styled-components";
import Text from "../Text";

const Container = styled.div`
text-align: center;
`
const Title = styled.div`
  display: inline-block;
  margin-bottom: 0.75rem; 
`
const Value = styled.div`
  font-size: 1.25rem;
  letter-spacing: 1px;
`

const Meta = ({title, value}) => (
  <Container>
    <Title>
      <Text>{title}</Text>
    </Title>
    <br />
    <Value>
      <Text>{value}</Text>
    </Value>
  </Container>
  
)

export default Meta;