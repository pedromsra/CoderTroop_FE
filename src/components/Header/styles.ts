import styled from "styled-components";

export const Container = styled('div')<{$menu: boolean, $user: boolean}>`
    grid-area: header;

    width: 100vw;
    min-height: 7.2rem;
    height: fit-content;

    padding: clamp(.5rem, 0rem + 2vw, 1.6rem) clamp(.5rem, 0rem + 2vw, 2rem);

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.mainLight_100};

    margin-bottom: 2rem;
    
    .main {

        .logo {
            display: flex;
            flex-direction: row;
            gap: 1.4rem;
    
            align-items: center;
    
            h1 {
                font-family: ${({theme}) => theme.fonts.main};
                font-size: clamp(2.4rem, 1.8rem + 2.5vw, 4rem);
                font-weight: 500;
    
                color: ${({theme}) => theme.COLORS.mainLight};
            }
    
        }

        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: ${({$user}) => $user ? 'space-between' : 'center'};
        align-items: center;

        gap: clamp(.5rem,1rem + 1vw,4rem);

        button {
            width: fit-content;
            
        }

        .menuPopUp {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .3rem;
            color: ${({theme}) => theme.COLORS.mainLight_300};
            font-size: clamp(1rem, 0rem + 3vw, 1.4rem);
            text-transform: capitalize;

            @media (max-width: 600px) {
                flex-direction: column;
                gap: 0rem;

                .spacer {
                    display: none;
                }
            }

            @media (min-width: 800px) {
                display: none;
            }

            &:hover {
                cursor: pointer;
                opacity: .8;
            }
        }

        @media (min-width: 800px) {
            justify-content: center;
            position: relative;
            .logout {
                position: absolute;
                left: 2rem;
            }
        }
    }

    .menuContainer {
        max-height: ${({$menu}) => $menu ? 'fit-content' : '0'};
        transition: ${({$menu}) => $menu ? '' : 'all 10s ease-out'};
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 10rem;
        z-index: 99;

        padding: 0 1.6rem 2.4rem 1.6rem;
        background-color: ${({theme}) => theme.COLORS.light_100};

        width: 100%;

        font-family: ${({theme}) => theme.fonts.content};
        font-size: 1.6rem;
        
        color: ${({theme}) => theme.COLORS.mainLight_200};

        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        border-radius: 0 0 1rem 1rem;
        
    }

    .menu {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        a {
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.mainLight_200};
        }

        .mainInst {
            width: 100%;
            height: 4rem;
            padding: .8rem 0 .8rem 1.2rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-weight: 500;

            &:hover{
                cursor: pointer;
            }
        }
        
        .menuItem, .itemInst {
            width: 100%;
            height: 4rem;
            padding: .8rem 0 .8rem 1.2rem;
            display: flex;
            align-items: center;
            font-weight: 500;

            flex-direction: row;
            gap: 1rem;

            .material-symbols-outlined {
                font-size: 2.4rem;
                color: ${({theme}) => theme.COLORS.mainLight_200};
            }


            &:hover{
                cursor: pointer;
            }
        }

        .itemInst {
            font-weight: 400;
        }
    }


    background-color: ${({theme}) => theme.COLORS.light_100};

    
    .material-symbols-outlined {
        color: ${({theme}) => theme.COLORS.mainLight};
        font-size: clamp(2rem, 0rem + 6vw, 3.2rem);
        &:hover {
            cursor: pointer;
        }
    }
`;