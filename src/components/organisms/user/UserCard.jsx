import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/NE0XGVKTmcA"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>11111@aaa.com</dd>
        <dt>TEL</dt>
        <dd>000-9999-88888</dd>
        <dt>会社名</dt>
        <dd>あいうえお株式会社</dd>
        <dt>WEB</dt>
        <dd>aiueo.com</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
