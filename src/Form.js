import  { useState } from "react";

import { FormBuilder as FormBuilderIo, Formio,  } from "react-formio";



import "formiojs/dist/formio.full.css";
const formIoData = {
    display: "form",
    components: [
      {
        label: "Checkbox",
        tableView: false,
        key: "checkbox",
        type: "checkbox",
        input: true
      },
  
      {
        label: "Text Field",
        tableView: true,
        validate: {
          // pattern: "/^([A-Z][a-z .'-]*)*$/",
          customMessage: "Test error",
          // "custom": "valid = (input !== 'Joe')",
          minLength: 3,
          maxLength: 10
        },
        errorLabel: "Please fill in only letters.",
        key: "textField",
        type: "textfield",
        input: true
      },
      {
        type: "button",
        label: "Submit",
        key: "submit",
        disableOnInvalid: true,
        input: true,
        tableView: false
      }
    ]
  };
  

const url = `https://safe-springs-353/06.herokuapp.com/api/formdata?cid=`;
// const saveUrl = `https://safe-springs-35306.herokuapp.com/api/formdata?cid`;

export const FormBuilderComponent=()=> {
  // const [data, setData] = useState([]);
  // const [preview, togglePreview] = useState(false);
  const [formData, setFormData] = useState(formIoData);
  // const [selectedSection, setSelectedSection] = useState("reactFormBuilder");
  // const onPost = (d) => setData(d.task_data);
  // const onToggle = () => togglePreview(!preview);
  const printResult = () => {
    // if (selectedSection === "formIo") {

    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
      // console.log(document.getElementById("formio-result"));
    });
    // }
  };

  return (
    <div className="App">
      <h2>Form builder playground</h2>
      
      <div>
        <button className="green" onClick={printResult}>
          display result
        </button>

        <FormBuilderIo
          form={formIoData}
          // onChange={schema => setFormData(schema)}
          onSubmit={(data) => {
            console.log(data);
          }}
          saveForm={(data) => setFormData(data)}
          saveText="Save Form"
          onSubmitDone={(data) => console.log(data)}
        />
        <div style={{ display: "none" }}>
          <div id="formio-result" />
        </div>
      </div>
    
    </div>
  );
}
