// 聯繫方式區塊
import { Container, Row, Col } from 'react-bootstrap';

function ContactFooter() {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <Container>
        <Row className="text-center">
          <Col>
            <a href="mailto:greenjourney@email.com" className="mx-2" title="Gmail">
              <i className="bi bi-envelope-fill fs-3 text-success"></i>
            </a>
            <a href="https://github.com/greenjourney" className="mx-2" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="bi bi-github fs-3 text-success"></i>
            </a>
            <a href="https://goo.gl/maps/xxxx" className="mx-2" target="_blank" rel="noopener noreferrer" title="公司位置">
              <i className="bi bi-geo-alt-fill fs-3 text-success"></i>
            </a>
          </Col>
        </Row>
        <Row className="text-center mt-2">
          <Col className="text-muted small">&copy; 2025 綠行日記 Green Journey</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ContactFooter;
