import React, { useEffect, useState } from 'react';
import { API_URLS, Enums } from '../../constants';
import Axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getHeaders } from '../../utils';

export const Home = () => {

    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(-1);
    const [candidates, setCandidates] = useState(null);

    useEffect(() => {
        Axios.get(API_URLS.jobsList, getHeaders(localStorage.getItem('token'))).then(response => {
            if (response.status === Enums.statusCodes.HTTP_200_OK) {
                setJobs(response.data.results);
            };
        });
    }, []);

    useEffect(() => {
        if (selectedJob !== -1)
            Axios.get(API_URLS.getCandidatesList(selectedJob),
                getHeaders(localStorage.getItem('token'))).then(response => {
                    if (response.status === Enums.statusCodes.HTTP_200_OK) {
                        setCandidates(response.data.results);
                    };
                });
    }, [selectedJob]);

    return (
        <Row>
            <Col sm className="full-height">
                <h4 className="text-center">Jobs</h4>
                <ListGroup>
                    {
                        jobs ? jobs.map(job => 
                            <ListGroup.Item key={job.id}
                                onClick={() => setSelectedJob(job.id)}
                                action>
                                { job.title }
                            </ListGroup.Item>
                        ) : <h6>No candidates</h6>
                    }
                </ListGroup>
            </Col>
            <Col sm className="full-height">
                <h4 className="text-center">Candidates</h4>
                <ListGroup>
                    {
                        candidates ? candidates.map(candidateTest =>
                            <ListGroup.Item key={candidateTest.candidate.id}>
                                { candidateTest.candidate.full_name } - { candidateTest.logic_test_score }
                            </ListGroup.Item>
                        ) : <h6>Select job</h6>
                    }
                </ListGroup>
            </Col>
        </Row>
    );
};