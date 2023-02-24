import { useState } from "react";
import { addExperience, editExperience } from "../redux/actions";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ExperienceInput({ userId, method, heading, onClose, experience }) {
  console.log("experienceInput triggered la:", experience);

  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);

  const [data, setData] = useState(
    method === "POST"
      ? {
          role: "",
          company: "",
          area: "",
          description: "",
          startDate: "",
          endDate: "",
          image: "",
        }
      : experience
  );

  const handleFileChange = (event) => {
    const image = event.target.files[0];
    setImageFile(image);
    console.log(image);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted successfully");

    const formData = new FormData();
    const procData = JSON.stringify(data);
    formData.append("imageFile", imageFile);
    formData.append("experience", procData);
    formData.append("userId", userId);

    if (method === "POST") {
      event.preventDefault();
      dispatch(addExperience(formData));
      onClose();
    } else if (method === "PUT") {
      console.log("putted it");
      event.preventDefault();
      dispatch(editExperience(userId, data, experience._id, formData));
      onClose();
    }

    // Redirect the user to the profile page or update the experience list
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="popup-form-2" onSubmit={handleSubmit}>
          <div className="popup-form">
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={data?.role}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={data?.company}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={data?.area}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={data?.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={data?.startDate.slice(0, 10)}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={data.endDate?.slice(0, 10)}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <div>
                {data?.image && (
                  <div className="exp-image-lg">
                    <img src={data?.image} alt="" />
                  </div>
                )}
                <Form.File
                  id="imageFile"
                  label={data.image ? "Edit image" : "Choose an image"}
                  onChange={handleFileChange}
                />
              </div>
              <div className="exp-add-footer d-flex justify-content-end mb-3 mt-3"></div>
            </Form.Group>
          </div>
          <div className="exp-add-footer d-flex justify-content-end mb-3 mt-3">
            <Button
              variant="primary"
              type="submit"
              className="create-exp-button"
            >
              {method === "POST" ? "save" : "save"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
}

export default ExperienceInput;
