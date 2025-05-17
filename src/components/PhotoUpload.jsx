// 照片回報功能
import { useRef, useState } from 'react';
import { Card, Button, Form, Image, Alert } from 'react-bootstrap';

function PhotoUpload({ onComplete }) {
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(false);
  const fileInput = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    if (onComplete) onComplete();
  };

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>照片回報</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>上傳任務完成照片</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleFileChange} ref={fileInput} />
          </Form.Group>
          {preview && <Image src={preview} thumbnail className="mb-3" style={{ maxHeight: 200 }} />}
          <Button variant="success" type="submit" disabled={!preview}>
            上傳並完成任務
          </Button>
        </Form>
        {success && <Alert variant="success" className="mt-3">恭喜！任務已完成，進度已更新。</Alert>}
      </Card.Body>
    </Card>
  );
}

export default PhotoUpload;
