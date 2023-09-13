import React, { useState } from "react";
import "../components/CVForm.css";
import { useNavigate } from "react-router-dom";
import { db } from "../fairbase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const CVForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    aboutme: "",
    skils: "",
    experiences: [],
    educations: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExperience = () => {
    const newExperience = {
      title: "",
      subtitle: "",
      description: "",
      timeRange: "",
    };
    setFormData({
      ...formData,
      experiences: [...formData.experiences, newExperience],
    });
  };

  const handleAddEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      graduationDate: "",
    };
    setFormData({
      ...formData,
      educations: [...formData.educations, newEducation],
    });
  };

  const handleItemChange = (e, type, index) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedItems = [...prevState[type]]; 
      updatedItems[index][name] = value; 
      return {
        ...prevState,
        [type]: updatedItems, 
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      const docRef = await addDoc(collection(db, "cvData"), {
        formData: formData,
      });

      alert("Document added with ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate('/')
    console.log(formData);
  };

  return (
    <div className="cv-form">
      <h2>CV Form</h2>
      <label className="form-label">Name:</label>
      <input
        type="text"
        className="form-input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label className="form-label">Email:</label>
      <input
        type="email"
        className="form-input"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label className="form-label">Contact:</label>
      <input
        type="number"
        className="form-input"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
      <br />
      <label className="form-label">About me:</label>
      <input
        type="text"
        className="form-input"
        name="aboutme"
        value={formData.aboutme}
        onChange={handleChange}
      />
      <br />
      <label className="form-label">Skils:</label>
      <input
        type="text"
        className="form-input"
        name="skils"
        value={formData.skils}
        onChange={handleChange}
      />
      <br />
      {/*Experience*/}
      <h3>Experiences:</h3>
      {formData.experiences.map((experience, index) => (
        <div key={index} className="experience">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-input"
            name="title"
            value={experience.title}
            onChange={(e) => handleItemChange(e, "experiences", index)}
          />

          <br />
          <label className="form-label">Subtitle:</label>
          <input
            type="text"
            className="form-input"
            name="subtitle"
            value={experience.subtitle}
            onChange={(e) => handleItemChange(e, "experiences", index)}
          />
          <br />
          <label className="form-label">Description:</label>
          <textarea
            className="form-textarea"
            name="description"
            value={experience.description}
            onChange={(e) => handleItemChange(e, "experiences", index)}
          />
          <br />
          <label className="form-label">Time Range:</label>
          <input
            type="date"
            className="form-input"
            name="timeRange"
            value={experience.timeRange}
            onChange={(e) => handleItemChange(e, "experiences", index)}
          />
          <br />
        </div>
      ))}
      <button className="add-button" onClick={() => handleAddExperience()}>
        Add Experience
      </button>
      <br />
      {/*Education*/}
      <h3>Educations:</h3>
      {formData.educations.map((education, index) => (
        <div key={index} className="education">
          <label className="form-label">Institution:</label>
          <input
            type="text"
            className="form-input"
            name="institution"
            value={education.institution}
            onChange={(e) => handleItemChange(e, "educations", index)}
          />

          <br />
          <label className="form-label">Degree</label>
          <input
            type="text"
            className="form-input"
            name="degree"
            value={education.degree}
            onChange={(e) => handleItemChange(e, "educations", index)}
          />
          <br />
          <label className="form-label">Field Of Study</label>
          <input
            type="text"
            className="form-input"
            name="fieldOfStudy"
            value={education.fieldOfStudy}
            onChange={(e) => handleItemChange(e, "educations", index)}
          />
          <br />
          <label className="form-label">Field Of Study</label>
          <input
            type="text"
            className="form-input"
            name="fieldOfStudy"
            value={education.fieldOfStudy}
            onChange={(e) => handleItemChange(e, "educations", index)}
          />
          <br />
          <label className="form-label">Graduation Date</label>
          <input
            type="date"
            className="form-input"
            name="graduationDate"
            value={education.graduationDate}
            onChange={(e) => handleItemChange(e, "educations", index)}
          />
          <br />
        </div>
      ))}
      <button className="add-button" onClick={() => handleAddEducation()}>
        Add Education
      </button>
      <br />
      <button className="submit-button" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default CVForm;
