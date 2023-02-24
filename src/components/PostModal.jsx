import { useRef } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { MdOutlineSaveAlt } from "react-icons/md";

const PostModal = ({
  showPostModal,
  setShowPostModal,
  myInfo,
  post,
  handleInputChange,
  handleFileChange,
  handleSubmit,
}) => {
  const inputRef = useRef(null);
  const imitateInputFile = () => {
    inputRef.current.click();
  };

  return (
    <>
      <Modal
        id="postModal"
        show={showPostModal}
        onHide={() => {
          setShowPostModal(false);
        }}
      >
        <Modal.Header closeButton>
          <h5 className="m-0">Create a post</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center w-100">
            <div
              className="d-flex align-items-center justify-content-center mr-2"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
            >
              <img
                src={myInfo?.image}
                alt=""
                className="w-100 rounded-circle"
              />
            </div>
            <h6 style={{ fontWeight: "600" }}>
              {myInfo?.name} {myInfo?.surname}
            </h6>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              id="post-text-input"
              as="textarea"
              name="text"
              value={post.text}
              placeholder="What do you want to talk about?"
              onChange={handleInputChange}
            />
            <div className="d-flex align-items-center justify-content-center mt-auto">
              <button type="submit" className="mr-3">
                <MdOutlineSaveAlt
                  className="mr-1"
                  style={{ fontSize: "1.5rem", transform: "rotate(180deg)" }}
                />
                Share
              </button>
              <button type="button" onClick={imitateInputFile}>
                <svg
                  className="mr-1"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
                </svg>
                Add photo
              </button>
              <Form.File
                className="d-none"
                ref={inputRef}
                id="imageFile"
                onChange={handleFileChange}
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostModal;
