// SDG 任務進度條與今日任務
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col, Image } from 'react-bootstrap';

const tasks = [
  { icon: '🌱', desc: '步行/騎車代步', done: true },
  { icon: '💧', desc: '自備水壺', done: false },
  { icon: '🛍️', desc: '重複使用購物袋', done: false },
];

function SDGProgress() {
  const completed = tasks.filter(t => t.done).length;
  return (
    <div className="my-4">
      <h5 className="fw-bold mb-2">今日 SDG 任務進度</h5>
      <ProgressBar now={completed * 33.33} label={`${completed}/3`} variant="success" />
      <Row className="mt-3 text-center">
        {tasks.map((task, idx) => (
          <Col key={idx}>
            <div style={{ fontSize: 36 }}>{task.icon}</div>
            <div className={task.done ? 'text-success fw-bold' : ''}>{task.desc}</div>
            {task.done && <div className="text-success">✔️</div>}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SDGProgress;
