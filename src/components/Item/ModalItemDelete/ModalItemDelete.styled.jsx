import styled from 'styled-components';
import { Btn, TextBtn } from 'components/Button/Button.styled';

export const TextWrapper = styled.div`
    font-size: 25px;
    border: 1px solid rgb(7, 94, 138);
    border-radius: 5px;
    padding: 30px 10px 10px 10px;
    width: 300px;
    background-color: #919191;
`
export const Text = styled.p`
margin-bottom: 20px;
    font-size: 15px;
`
export const ItemDeleteButton = styled(Btn)`
min-width: 80px;
&:not(:last-child) {
    margin-right: 25px;
}
`
export const ItemDeleteTextButton = styled(TextBtn)`
    
`
