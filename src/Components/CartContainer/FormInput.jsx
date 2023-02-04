import React from "react";

const FormInput = ({ value, name, onChange, label, type}) => {
  return (
    <>
      <div className="mb-3 form-group">
        <label className="form-label text-uppercase">
          {label}
        </label>
        <input className="form-control" type={type} onChange={onChange} value={value} required name={name} />
      </div>
    </>
  );
};

export default FormInput;
