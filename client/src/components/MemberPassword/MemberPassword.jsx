import React, { Component } from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import './MemberPassword.css'
class MemberPassword extends Component {
    state = {}
    render() {
        return (
            <Accordion defaultActiveKey="0" className="member-password-container mt-4">
                <Card>
                    <Card.Header className="member-password-title">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <span>密碼管理</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1" className="member-password-content-container">
                        <Card.Body>
                            <Form>
                                <p>
                                    須包含至少8個字符，並使用字母與數字組合
                                </p>
                                <Form.Group className="width-300">
                                    <Form.Label className="text-align-left">現有密碼</Form.Label>
                                    <Form.Control className="my-2" type="password" />
                                </Form.Group>
                                <Form.Group className="width-300 mb-5">
                                    <Form.Label className="text-align-left">新密碼 </Form.Label>
                                    <Form.Control className="my-2 mb-3" style={{ marginBottom: '1rem' }} type="password" placeholder="更改密碼" />
                                    <Form.Control className="my-2 mb-3" type="password" placeholder="確認新密碼" />
                                </Form.Group>
                                <Button type="submit">儲存</Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default MemberPassword;