import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateExperience } from "../redux/actions";

function ExperienceInput({ experience, userId }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(experience);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    console.log("triggered");
    event.preventDefault();
    dispatch(updateExperience(userId, experience._id, data));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          name="role"
          value={data.role}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          name="company"
          value={data.company}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="area"
          value={data.area}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={data.description}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          name="startDate"
          value={data.startDate.slice(0, 10)}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          name="endDate"
          value={data.endDate.slice(0, 10)}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={data.image}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}

export default ExperienceInput;
