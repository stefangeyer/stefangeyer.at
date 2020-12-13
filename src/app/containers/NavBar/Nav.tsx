import * as React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as ResumeIcon } from './assets/resume-icon.svg'
import { ReactComponent as GithubIcon } from './assets/github-icon.svg'
import { ReactComponent as LinkedinIcon } from './assets/linkedin-icon.svg'

export function Nav() {
    return (
        <Wrapper>
            <Item
                href={process.env.PUBLIC_URL + '/Resume_Geyer.pdf'}
                target="_blank"
                title="Resume"
                rel="noopener noreferrer"
            >
                <ResumeIcon />
                Resume
            </Item>
            <Item
                href="https://www.linkedin.com/in/stefan-geyer/"
                target="_blank"
                title="LinkedIn"
                rel="noopener noreferrer"
            >
                <LinkedinIcon />
                LinkedIn
            </Item>
            <Item
                href="https://github.com/stefangeyer"
                target="_blank"
                title="GitHub"
                rel="noopener noreferrer"
            >
                <GithubIcon />
                GitHub
            </Item>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    margin-right: -1rem;
`

const Item = styled.a`
    color: ${p => p.theme.primary};
    cursor: pointer;
    text-decoration: none;
    display: flex;
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    align-items: center;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.4;
    }

    .icon {
        margin-right: 0.25rem;
    }
`
