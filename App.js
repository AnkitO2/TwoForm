import "./App.css";


import Sendemailform from "./Sendemailform";
import React from "react";

import {
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  Container,
  Row,
  Col,
} from "reactstrap";

function App() {
  return (
    <>

      <Container fluid>
        <Row className="d-flex align-items-center">
          <Col sm={6}>
            <Form className="shadow p-3 mb-5 bg-body rounded ">
              <label className="mb-4 Updata-side-label">Update SiteMap</label>
              <div className="Label-One">Sociomee.com</div>
              <FormGroup className="py-3">
                <Label>
                  <h4>Updating*</h4>
                </Label>
                <Input type="select" className="Option-Select">
                  <option>Site Updating map</option>
                  <option>Site Updating map</option>
                  <option>Site Updating map</option>
                  <option>Site Updating map</option>
                  <option>Site Updating map</option>
                </Input>
              </FormGroup>
              <div className="Label-One mb-3">
                Note: This may take up to 10 minutes
              </div>
              <Button color="danger red-button">Genrate</Button>
            </Form>
          </Col>
          <Col sm={6} className="bg-light text-dark">
            <Sendemailform />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
