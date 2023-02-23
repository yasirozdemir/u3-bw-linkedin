// import { useRef, useState } from "react";
// import { Form, Modal, Spinner } from "react-bootstrap";
// import { MdOutlineSaveAlt } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { setPostPicture } from "../redux/actions";

// const PostPictureModal = ({ showPostPictureModal, setShowPostPictureModal }) => {

//     const dispatch = useDispatch();
//     const [imgData, setImgData] = useState(null);
//     const [isChanging, setIsChanging] = useState(false);
//     const postInfo = useSelector((state) => state.specificPost);

//     const inputRef = useRef(null);

//     const imitateInputFile = () => {
//         inputRef.current.click();
//     };

//     const handleChange = (e) => {
   
//         const img = e.target.files[0];
//         const imgData = new FormData();
//         imgData.append("post", img);
//         // setImgData(imgData);
//         console.log(" imgData: ", imgData)
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(setPostPicture(postInfo?._id, imgData, setIsChanging));
//     }

//     return(
//         <Modal
//       id="PostPictureModal"
//       show={showPostPictureModal}
//       onHide={() => {
//         setShowPostPictureModal(false);
//       }}
//     >
//       <Modal.Header>
//         <h5 className="m-0">Post picture</h5>
//         <button
//           onClick={() => {
//             setShowPostPictureModal(false);
//           }}
//         >
//           <svg viewBox="0 0 24 24" width="24" height="24">
//             <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
//           </svg>
//         </button>
//       </Modal.Header>
//       <Modal.Body>
//         {isChanging ? (
//           <div
//             className="d-flex align-items-center"
//             style={{ height: "280px" }}
//           >
//             <Spinner animation="border" variant="light" />
//           </div>
//         ) : (
//           <img
//             src={postInfo?.image}
//             className="w-100 rounded-circle"
//             alt="Profile img"
//             onClick={() => {
//               setShowPostPictureModal(true);
//             }}
//           />
//         )}
//       </Modal.Body>
//       <Form onSubmit={handleSubmit} style={{ height: "fit-content" }}>
//         <Modal.Footer>
//           {/* <button className="d-flex flex-column align-items-center">
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
//             </svg>
//             Edit
//           </button> */}
//           <button
//             onClick={imitateInputFile}
//             className="d-flex flex-column align-items-center"
//           >
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
//             </svg>
//             Add photo
//           </button>
//           <input
//             type="file"
//             className="d-none"
//             id="avatar"
//             name="avatar"
//             ref={inputRef}
//             accept="image/png, image/jpeg"
//             onChange={handleChange}
//           ></input>
//           <button
//             className="d-flex flex-column align-items-center"
//             onClick={() => {
//               setIsChanging(true);
//             }}
//             type="submit"
//           >
//             <MdOutlineSaveAlt
//               style={{ fontSize: "1.8rem", transform: "rotate(180deg)" }}
//             />
//             Submit
//           </button>
//           <button className="d-flex flex-column align-items-center ml-auto">
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path d="M20 4v1H4V4a1 1 0 011-1h4a1 1 0 011-1h4a1 1 0 011 1h4a1 1 0 011 1zM5 6h14v13a3 3 0 01-3 3H8a3 3 0 01-3-3zm9 12h1V8h-1zm-5 0h1V8H9z"></path>
//             </svg>
//             Delete
//           </button>
//         </Modal.Footer>
//       </Form>
//     </Modal>
//     )
// };

// export default PostPictureModal