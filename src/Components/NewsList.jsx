import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./NewsList.css";

import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
    const { category, searchTerm } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    const { newsData, loading, error } = useNewsData(category, searchTerm);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!newsData || newsData.length === 0) {
        return <p>No news found.</p>;
    }

    const totalArticles = newsData.length;
    const totalPages = Math.ceil(totalArticles / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentArticles = newsData.slice(startIndex, endIndex);

    return (
        <Container>
            <Row>
                {currentArticles?.map((article) => (
                    <Col xs={12} md={6} lg={3} key={article.url} >
                        <Card className="news-card">
                            <Card.Img variant="top" src={article.image} alt={article.title} />
                            <Card.Body>
                                <Card.Title className="card-title">{article.title}</Card.Title>
                                <Card.Text className="card-text">{article.description}</Card.Text>
                                <Card.Link href={article.url} className="card-link">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </Container>

    );
};

export default NewsList;