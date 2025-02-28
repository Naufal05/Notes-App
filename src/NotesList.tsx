import { useState } from "react";
import { Button, Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select"
import { Tag } from "./App";

type NoteListPRops = {
    availableTags: Tag[]
}

export function NotesList({availableTags}: NoteListPRops) {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    
    return <>
        <Row>
            <Col>
                <h1>Notes</h1>
            </Col>
            <Col xs="auto">
            <Stack gap={2} direction="horizontal" >
                <Link to="/new">
                    <Button variant="primary">Create</Button>
                </Link>
                    <Button variant="secondary">Edit Tags</Button>

            </Stack>
            </Col>
        </Row>
        <Form>
            <Row className="mb-4">
                <Col>
                <Form.Group controlId="title">
                    <label>Title</label>
                    <Form.Control type="text"/>
                </Form.Group>
                </Col>
                <Col>
                  <FormGroup controlId="tags">
                    <Form.Label>Tags</Form.Label>
                    <ReactSelect 
                      
                        isMulti 
                        options={availableTags.map(tag => {
                            return {label:tag.label, value:tag.id}
                        })}
                        value={selectedTags.map(tag => {
                            return { label: tag.label, value: tag.id}
                        })}
                        onChange={tags => {
                    setSelectedTags(tags.map(tag => ({ label: tag.label, id: tag.value })));
                }}
                    />
                </FormGroup>
                </Col>
            </Row>    
        </Form>     
    </>
}