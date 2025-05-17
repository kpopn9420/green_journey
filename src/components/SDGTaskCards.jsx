// SDG 任務卡
import { Card, Row, Col } from 'react-bootstrap';

const sdgTasks = [
  {
    title: '步行/騎車代步',
    desc: '今天出門時選擇步行或騎腳踏車，減少碳排放。',
    sdg: 'SDG 13 氣候行動',
    icon: '🚴‍♂️',
  },
  {
    title: '自備水壺',
    desc: '外出時自備水壺，減少一次性塑膠瓶使用。',
    sdg: 'SDG 12 責任消費與生產',
    icon: '💧',
  },
  {
    title: '重複使用購物袋',
    desc: '購物時自備環保袋，減少塑膠袋浪費。',
    sdg: 'SDG 14 保育海洋生態',
    icon: '🛍️',
  },
];

function SDGTaskCards() {
  return (
    <Row className="g-3 my-4">
      {sdgTasks.map((task, idx) => (
        <Col xs={12} key={idx}>
          <Card className="h-100">
            <Card.Body>
              <div className="fs-2 mb-2">{task.icon}</div>
              <Card.Title>{task.title}</Card.Title>
              <Card.Text>{task.desc}</Card.Text>
              <div className="text-success fw-bold">{task.sdg}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SDGTaskCards;
