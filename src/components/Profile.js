import React from 'react'; 
import { Card, Container, Row, ProgressBar, Accordion } from 'react-bootstrap';
import SocialFollow from './SocialFollow'

function Profile() {
    return (
        <Container>
            <Row>
                <div className="col col-md-3">
                    <Card>
                        <Card.Img variant="top" src="/portfolio/img/profile.jpg" />
                        <Card.Body>
                            <Card.Title>Maximiliano Mainero</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Computer Science</Card.Subtitle>
                            <Card.Text>
                                From Santa Fe, Argentina<br/>
                                Birth 10/10/1996
                            </Card.Text>
                            <Card.Link href="https://docs.google.com/document/d/1v0m-hYVNmJ1mNyidO1gyeZhe_60QTJzrntO61Fxhm-c/" target="_blank">Resume</Card.Link>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card>
                        <Card.Header>My skills 📊</Card.Header>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted"><i className="fab fa-python"></i> Python</Card.Subtitle>
                            <div>
                                <ProgressBar now={90} label={`${90}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-node"></i> NodeJS</Card.Subtitle>
                            <div>
                                <ProgressBar now={80} label={`${80}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-cuttlefish"></i> C#</Card.Subtitle>
                            <div>
                                <ProgressBar now={75} label={`${75}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fas fa-circle-notch"></i> Lua</Card.Subtitle>
                            <div>
                                <ProgressBar now={75} label={`${75}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-js"></i> Javascript</Card.Subtitle>
                            <div>
                                <ProgressBar now={70} label={`${70}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-google"></i> Go</Card.Subtitle>
                            <div>
                                <ProgressBar now={65} label={`${65}%`} />
                            </div>                            
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fas fa-database"></i> MySQL</Card.Subtitle>
                            <div>
                                <ProgressBar now={80} label={`${80}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i class="fas fa-server"></i> PostgreSQL</Card.Subtitle>
                            <div>
                                <ProgressBar now={80} label={`${80}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fas fa-folder-minus"></i> SQL Server</Card.Subtitle>
                            <div>
                                <ProgressBar now={80} label={`${80}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-bootstrap"></i> Bootstrap</Card.Subtitle>
                            <div>
                                <ProgressBar now={60} label={`${60}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-html5"></i> HTML-5</Card.Subtitle>
                            <div>
                                <ProgressBar now={70} label={`${70}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-css3-alt"></i> CSS3</Card.Subtitle>
                            <div>
                                <ProgressBar now={60} label={`${60}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-react"></i> ReactJS</Card.Subtitle>
                            <div>
                                <ProgressBar now={60} label={`${60}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-docker"></i> Docker</Card.Subtitle>
                            <div>
                                <ProgressBar now={70} label={`${70}%`} />
                            </div>
                            <Card.Subtitle className="mb-2 mt-4 text-muted"><i className="fab fa-git-alt"></i> GIT</Card.Subtitle>
                            <div>
                                <ProgressBar now={70} label={`${70}%`} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-md-9">
                    <Card>
                        <Card.Header>About me 🤙</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            I am a Computer Ingeneer student that wants to improve every day. My favorite lenguage is Python and i want to learn more about Go. I love Linux environments, develop, scripting and the Security Administration of the information.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card>
                        <Card.Header>Experiences 🛠️</Card.Header>
                        <Card.Body>
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Support at Estudio Contable SAIPE</Accordion.Header>
                                    <Accordion.Body>
                                    <p className="fw-bold ">Apr 2019 – Oct 2020</p>
                                    Help and Support users problems, develop, scripting, and architecture solutions for programs, network and System Operatives.                                    
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Information Security at SanCor Salud</Accordion.Header>
                                    <Accordion.Body>
                                    <p className="fw-bold ">Oct 2020 – Present</p>
                                    Prevent and make aware people how has intrusion attemps or threats. Control access list of users and groups.
                                    <br/>
                                    <div className="text-secondary">
                                        ⚡ Kaspersky Security Center Manager
                                        <br/>
                                        ⚡ Google Workspace Administrator
                                        <br/>
                                        ⚡ Add security structure to mitigate attacks
                                        <br/>
                                        ⚡ Develop sophisticated backend
                                        <br/>
                                        ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
                                        <br/>
                                        ⚡ Implements scriptiong, bash and batch to hotfix bugs
                                    </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card>
                        <Card.Header>Education 👨‍🏫</Card.Header>
                        <Card.Body>
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Technical High School - Electronic Technical</Accordion.Header>
                                    <Accordion.Body>
                                    <p className="fw-bold ">Sept 2010 - Apr 2016</p>
                                    <div className="text-secondary">
                                        🔵 Communication Systems and Links
                                        <br/>
                                        🔵 Analog Electronic Systems
                                        <br/>
                                        🔵 Industrial Electronics Laboratory
                                        <br/>
                                        🔵 Electronic Control Systems
                                        <br/>
                                        🔵 Electronic Testing Laboratory
                                    </div>                                  
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Santiago del Estero University - Computer Engineer</Accordion.Header>
                                    <Accordion.Body>
                                    <p className="fw-bold ">May 2017 - Present</p>
                                    Plan, direct, carry out and / or evaluate projects of survey, analysis, specification, design, development, implementation, verification, validation, tuning, maintenance and updating.
                                    <br/><br/>
                                    <div className="text-secondary">
                                        🟢 Establish metrics and quality standards, and software security, controlling them in order to have an industrial product that respects national and international standards.
                                        <br/>
                                        🟢 Control the specification of the product, the design process, development, implementation and maintenance. Establishment of validation and quality certification metrics.
                                    </div>
                                    </Accordion.Body>
                                </Accordion.Item>                                
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card>
                        <Card.Header>Contact Me ☎️</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Discuss a project or just want to say hi? My Inbox is open for all.
                            <br/><br/>
                            <div className="fa-2x">
                                <SocialFollow></SocialFollow>
                            </div>                            
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default Profile;
