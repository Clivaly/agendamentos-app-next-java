import { styled } from '@mui/material/styles';

export const PageTitleContainer = styled('div')`
margin: 40px 0;
text-align: center;
`;

export const PageTitleStyled = styled('h2')`
margin: 0;
color: ${({theme}) => theme.palette.primary.main};
font-size: ${({theme}) => theme.typography.h6.fontSize};
font-weight: 600;
`;
