import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;

    overflow: hidden;

    grid-template-rows: auto 1fr;
    grid-template-areas:
    "header"
    "main"
    ;

    main {
        grid-area: main;

        overflow: hidden;
        
        width: 100%;
        height: 100%;


        display: flex;

        flex-direction: column;

        .newTask {
            display: flex;
            flex-direction: column;
        }

        .newTaskPriority {
            padding: 0.5rem 1.5rem 0.5rem 1.5rem;
            display: flex;
            flex-direction: row;
            gap: clamp(1rem, 0rem + .4vw, 1.5rem);
            justify-content: flex-end;
            align-items: center;

            label {
                display: flex;
                flex-direction: row;
                gap: .5rem;
                align-items: center;

                text-transform: capitalize;

                font-size: clamp(1.2rem, 0rem + 3vw, 1.4rem);

                color: ${({ theme }) => theme.COLORS.mainLight_200};
            }
        }

        .newTaskInput {
            display: flex;
            flex-direction: row;

            button {
                width: fit-content;
                border: none;
            }
        }

        .tasksAndFilter {
            display: flex;
            flex-direction: row;
            gap: .5rem;
            justify-content: space-around;
            

            width: 100%;

            overflow: hidden;

            .filter {
                display: none;
                @media (min-width: 800px) {

                    overflow: hidden;

                    width: fit-content;

                    display:flex;
                    flex-direction: column;
                    gap: 1rem;

                    padding: 2rem;

                    color: ${({ theme }) => theme.COLORS.mainLight_300};
                    font-size: clamp(1rem, 0rem + 3vw, 1.4rem);
                    text-transform: capitalize;

                    white-space: nowrap;

                    button {
                        margin-top: 2rem;
                    }

                    .filterItem{
                        width: fit-content;
                        height: 4rem;
                        padding: .8rem 0 0 1.2rem;
                        display: flex;
                        align-items: center;
                        font-weight: 500;

                        flex-direction: row;
                        gap: 1rem;
                    }

                    .filterHeader {
                        display: flex;
                        flex-direction: row;
                        gap: .3rem;
                        padding-bottom: 2rem;
                    }
                }
            }

        }

        .tasks {
            min-width: 70%;

            height: 100%;

            margin-top: clamp(.5rem, 0rem + 2vw, 2rem);
            background-color: ${({ theme }) => theme.COLORS.light_100};

            overflow: auto;

            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

`;