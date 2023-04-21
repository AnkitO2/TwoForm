import React from "react";
import { Home } from "feather-icons-react";
import "./Sendemailform.css";
import {
  Form,
  Label,
  FormGroup,
  Button,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  Alert,
} from "reactstrap";
function Sendemailform() {
  const ToggleTheme=() =>{
    Alert("hi")
  }
  return (
    <>
      <h5 className="heading-Send-E-Email">Send E-mail</h5>
      <Breadcrumb className="d-flex  align-items-center">
        <BreadcrumbItem active className="d-flex  align-items-center">
          <Home size={17} />
        </BreadcrumbItem>
        <BreadcrumbItem active className="Home ">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem active className="Home">
          Tools
        </BreadcrumbItem>
        <BreadcrumbItem active className="Home">
          <span className="text-danger">Send E-mail</span>
        </BreadcrumbItem>
      </Breadcrumb>
      <Form className="shadow p-3 mb-5 bg-body rounded ">
        <h6 className="mb-4 Send-Email-Label">Send E-mail to user</h6>

        <p className="mb-1 Subject-Paragraph">subject</p>
        <Input type="text"></Input>

        <span className="Span-Text-Size">
          Choose the title for your massage
        </span>
        <FormGroup className="py-1">
          <Label for="exampleText">
            <span className="Massage-Html">Message (HTML Allowed)</span>
          </Label>

          <Input id="exampleText" name="text" type="textarea" />

          <span className="Span-Text-Size">Write your massage here </span>
        </FormGroup>
        <FormGroup>
          <p className="Send-Email-Paragraph mb-1">Send E-mail to</p>

          <Input type="select" className="Option-Select">
            <option>All Active Users</option>
            <option>All Active Users</option>
            <option>All Active Users</option>
            <option>All Active Users</option>
            <option>All Active Users</option>
          </Input>
        </FormGroup>
        <p className="Span-Text-Size ">
          Choose the type of user you want to send massage to.
        </p>
        <FormGroup className="">
          <Label for="exampleSearch">
            <h6 className="mb-1">Search User(Optional)</h6>
          </Label>
          <Input name="search" type="search" />
          <span className="Span-Text-Size">
            Send only those users ,leave it empty to send all user
          </span>
        </FormGroup>
        <p className="Last-Paragraph d-flex  align-items-center">
          Test Massage (Send to my email first)
          <Input name="check" type="checkbox" className="Last-Check-Box" />
        </p>
        <Button color="danger Send-button" onClick={()  => ToggleTheme}>Send</Button>
      </Form>
    </>
  );
}

export default Sendemailform;
