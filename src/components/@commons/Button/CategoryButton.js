import styled from "styled-components";

export const CategoryButton = ({ title, ...rest }) => {
  return (
    <Button
      style={{}}
      className="cafe-category-name btn bg-white shadow mx-1"
      data-category-name={title}
      {...rest}
    >
      {title}
    </Button>
  );
};

const Button = styled.button`
  width: 110px;
  letter-spacing: 3px;
  text-align: center;
`;
