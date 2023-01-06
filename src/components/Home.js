import styled from "styled-components";

const Home = (props) => {
    return
    (
    <Container>
        <Section>
            <h5>
                <a>
                    Hiring in a hurry? - 
                </a>
                <p>Find talented pros in record time with Upwork and keep business</p>
            </h5>
        </Section>
    </Container>
    )
};

const Container = styled.div`
    padding-top : 52px;
    max-width : 100%;
`;

const Content = styled.div`
    max-width : 1128px;
    margin-left : auto;
    margin-right : auto;
`;

const Section = styled.div`
    min-height : 50px;
`;

export default Home;