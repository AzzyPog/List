import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css";

function BasicExample() {
  return (
    <Card className='Card' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://img.elo7.com.br/product/original/46B928F/big-poster-filme-avatar-o-caminho-da-agua-90x60-cm-lo002-presente-geek.jpg" />
      <Card.Body>
        <Card.Title className='Title'>Avatar: O Caminho da Água</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;