// 右側隱藏 Sidebar 導航
import { useState } from 'react';
import { Offcanvas, Button, Nav } from 'react-bootstrap';

function SidebarNav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navItems = [
    { label: '首頁', anchor: '#slider' },
    { label: '今日任務', anchor: '#progress' },
    { label: '集點卡', anchor: '#pointcard' },
    { label: '任務卡', anchor: '#taskcards' },
    { label: '照片回報', anchor: '#photoupload' },
    { label: '聯繫方式', anchor: '#contact' },
  ];

  return (
    <>
      <Button variant="success" onClick={handleShow} className="position-fixed end-0 top-50 translate-middle-y z-3 rounded-circle shadow" style={{ width: 48, height: 48 }}>
        <i className="bi bi-list fs-2"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>導覽</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navItems.map((item, idx) => (
              <Nav.Link key={idx} href={item.anchor} onClick={handleClose} className="fs-5 mb-2">
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SidebarNav;
