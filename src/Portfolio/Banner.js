import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import { Instagram, LinkedIn } from '@material-ui/icons';
// import Particle from './Practicle';

const Banner = () => {
    return (
        <HomePageStyled>
            {/* <div className="particle-con">
                <Particle />
            </div> */}
            <div className="typography">
                <h1 className='font-bold text-3xl'>Hi, I'm <span>Payel Tilak</span></h1>
                <p className='font-bold text-1xl'>
                    I am a Front-End Web Developer
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/hrituraz.banik" target="_blank" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/hritu_raz/" target="_blank" className="icon i-instagram">
                        <Instagram />
                    </a>
                    <a href="https://github.com/HrituRaz33" target="_blank" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/hritu-raz-241906229/" target="_blank" className="icon i-linkedin">
                        <LinkedIn />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
};
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;
export default Banner;