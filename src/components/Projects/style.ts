import Image from "next/future/image";

import styled, { css } from "styled-components";

export const ContentProjects = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
`;

export const ImageStyle = styled(Image)`
    ${({ theme }) => css`
        width: 80rem;
        height: 20rem;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 2rem;
        transition: 0.3s ease;
        box-shadow: ${theme.colors.border};
        @media (max-width: 1100px) {
            width: 80rem;
        }
        @media (max-width: 900px) {
            width: 100%;
        }

        &:hover {
            z-index: -1;
            transform: translateX(1rem);
        }
    `}
`;

export const ContainerImage = styled.div`
    display: flex;

    justify-content: flex-start;
    &:nth-child(2n + 1) {
        justify-content: flex-end;
    }

    @media (max-width: 900px) {
        display: block;
    }
`;

export const ContainerGitHub = styled.div`
    display: flex;
    justify-content: center;
`;

export const LinkSeeMore = styled.a`
    ${({ theme }) => css`
        font-size: ${theme.fonts.titleSmall};
        margin-top: 2rem;
        color: ${theme.colors.white};
        &:hover {
            cursor: pointer;
            text-shadow: 2px 1px 1px ${theme.colors.blueCian};
        }
    `}
`;
