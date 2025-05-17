// SDG 集點卡與徽章
import { Card, Badge } from 'react-bootstrap';

const user = {
  name: '小綠',
  points: 27,
  badge: '銀徽章',
};

function SDGPointCard() {
  let badgeColor = 'secondary';
  if (user.points >= 100) badgeColor = 'warning';
  else if (user.points >= 50) badgeColor = 'primary';
  else if (user.points >= 10) badgeColor = 'success';

  return (
    <Card className="my-4 text-center">
      <Card.Body>
        <Card.Title>SDG 集點卡</Card.Title>
        <h2 className="fw-bold text-success">{user.points} 點</h2>
        <Badge bg={badgeColor} className="fs-5">{user.badge}</Badge>
      </Card.Body>
    </Card>
  );
}

export default SDGPointCard;
