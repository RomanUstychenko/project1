import styled from 'styled-components';
import { Button } from 'components/Button/Button';

export const BtnList = styled.div`
  margin-top: 10px;
`;

export const BtnRename = styled(Button)`
  position: relative;
  right: 0px;
  height: 25px;
  padding: 0px;
  min-width: 80px;
  font-size: 15px;
  color: #010101;
  margin-right: auto;
  margin-left: auto;
`;
export const BtnDelete = styled(Button)`
  position: relative;
  right: 0px;
  height: 25px;
  min-width: 110px;
  font-size: 15px;
  color: #632121;
  margin-right: auto;
  margin-left: 25px;
`;
